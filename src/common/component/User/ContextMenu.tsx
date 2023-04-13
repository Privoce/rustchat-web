import { FC, ReactElement } from "react";
import Tippy from "@tippyjs/react";
import useUserOperation from "../../hook/useUserOperation";
import ContextMenu, { Item } from "../ContextMenu";
import { useTranslation } from "react-i18next";

interface Props {
  enable?: boolean;
  uid: number;
  cid?: number;
  visible: boolean;
  hide: () => void;
  children: ReactElement;
}

const UserContextMenu: FC<Props> = ({ enable = false, uid, cid, visible, hide, children }) => {
  const { t } = useTranslation("member");
  const { t: chatTran } = useTranslation("chat");
  const {
    blockThisContact,
    removeFromContact,
    copyEmail,
    canCopyEmail,
    startChat,
    canRemove,
    canRemoveFromContact,
    canBlock,
    canRemoveFromChannel,
    removeFromChannel,
    removeUser
  } = useUserOperation({
    uid,
    cid
  });
  return (
    <Tippy
      disabled={!enable}
      visible={visible}
      followCursor={"initial"}
      interactive
      placement="right-start"
      popperOptions={{ strategy: "fixed" }}
      onClickOutside={hide}
      key={uid}
      content={
        <ContextMenu
          hideMenu={hide}
          items={
            [
              {
                title: t("send_msg"),
                handler: startChat
              },
              canCopyEmail && {
                title: t("copy_email"),
                handler: copyEmail
              },
              canRemoveFromChannel && {
                danger: true,
                title: t("remove_from_channel"),
                handler: removeFromChannel
              },
              canRemoveFromContact && {
                danger: true,
                title: t("remove_from_contact"),
                handler: removeFromContact
              },
              canBlock && {
                danger: true,
                title: chatTran("block"),
                handler: blockThisContact
              },
              canRemove && {
                danger: true,
                title: t("remove"),
                handler: removeUser
              }

            ].filter(Boolean) as Item[]
          }
        />
      }
    >
      {children}
    </Tippy>
  );
};

export default UserContextMenu;
