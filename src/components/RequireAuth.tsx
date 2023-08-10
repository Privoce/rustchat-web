import { FC, ReactElement } from "react";
import { matchRoutes, Navigate, useLocation } from "react-router-dom";

import { GuestRoutes, KEY_LOCAL_TRY_PATH } from "@/app/config";
import { useGetInitializedQuery } from "@/app/services/auth";
import { useGetLoginConfigQuery } from "@/app/services/server";
import { useAppSelector } from "@/app/store";
import Loading from "./Loading";

interface Props {
  children: ReactElement;
  redirectTo?: string;
}
const GuestAllows = GuestRoutes.map((path) => {
  return { path };
});
const RequireAuth: FC<Props> = ({ children, redirectTo = "/login" }) => {
  const location = useLocation();
  const matches = matchRoutes(GuestAllows, location);
  const allowGuest = matches ? !!matches[0].pathname : false;
  const {
    data: loginConfig,
    isUninitialized: loginConfigUninitialized,
    isLoading: loginConfigLoading
  } = useGetLoginConfigQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  const { isUninitialized: initializedUninitialized, isLoading: initLoading } =
    useGetInitializedQuery(undefined, {
      refetchOnMountOrArgChange: true
    });
  const { token, guest, initialized } = useAppSelector((store) => store.authData);
  console.info(
    "uninitialized",
    initializedUninitialized,
    initializedUninitialized,
    loginConfigLoading,
    initLoading
  );
  // 初始化和login配置检查
  if (initializedUninitialized || loginConfigUninitialized)
    return <Loading fullscreen={true} context="auth-route" />;
  //  未初始化 则先走setup 流程
  if (!initialized) return <Navigate to={`/onboarding`} replace />;
  // 开启guest 并且没token 而且是允许guest访问的路由  则先去过渡页登录
  if (!token) {
    // 记录下当前的路径，登录后跳转回来
    const ignorePath = `/setting/my_account`;
    localStorage.setItem(
      KEY_LOCAL_TRY_PATH,
      ignorePath == location.pathname ? "/" : `${location.pathname}${location.search}`
    );
    const guestLogin = loginConfig?.guest && allowGuest;
    return guestLogin ? (
      <Navigate to={"/guest_login"} replace />
    ) : (
      <Navigate to={redirectTo} replace />
    );
  }
  // 登陆者是guest，并且不允许访问
  if (token && guest && !allowGuest) return <Navigate to={"/"} replace />;
  const tryPath = localStorage.getItem(KEY_LOCAL_TRY_PATH);
  if (tryPath) {
    localStorage.removeItem(KEY_LOCAL_TRY_PATH);
    return <Navigate to={tryPath} replace />;
  }
  return children;
};

export default RequireAuth;
