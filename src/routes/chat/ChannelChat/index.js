import { useState, useEffect } from "react";
import { useDebounce } from "rooks";
import { useSelector, useDispatch } from "react-redux";
import PinList from "./PinList";
import FavList from "./FavList";
// TODO: add alias for easyier import
import { useReadMessageMutation } from "../../../app/services/message";
import useChatScroll from "../../../common/hook/useChatScroll";
import ChannelIcon from "../../../common/component/ChannelIcon";
import Tooltip from "../../../common/component/Tooltip";
import Contact from "../../../common/component/Contact";
import {
  VideoPanel,
  VideoChatPanel,
} from "../../../common/component/VideoChat/index.js";
import Layout from "../Layout";
import { renderMessageFragment } from "../utils";
import EditIcon from "../../../assets/icons/edit.svg";
// import alertIcon from "../../../assets/icons/alert.svg?url";
import IconFav from "../../../assets/icons/bookmark.svg";
import IconPeople from "../../../assets/icons/people.svg";
import IconPin from "../../../assets/icons/pin.svg";
// import searchIcon from "../../../assets/icons/search.svg?url";
import IconHeadphone from "../../../assets/icons/headphone.svg";
import boardosIcon from "../../../assets/icons/app.boardos.svg?url";
import webrowseIcon from "../../../assets/icons/app.webrowse.svg?url";
import addIcon from "../../../assets/icons/add.svg?url";
import {
  // StyledNotification,
  StyledContacts,
  StyledChannelChat,
  StyledHeader,
} from "./styled";
import ChannelInviteModal from "../../../common/component/ChannelInviteModal";
import { NavLink, useLocation } from "react-router-dom";
import { toggleChat } from "../../../app/slices/videocall";
import Tippy from "@tippyjs/react";

export default function ChannelChat({ cid = "", dropFiles = [] }) {
  const [toolVisible, setToolVisible] = useState("");
  const { pathname } = useLocation();
  const [updateReadIndex] = useReadMessageMutation();
  const updateReadDebounced = useDebounce(updateReadIndex, 300);
  const [membersVisible, setMembersVisible] = useState(true);
  const [addMemberModalVisible, setAddMemberModalVisible] = useState(false);
  const [videoCallVisible, setVideoCallVisiable] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const dispatch = useDispatch();

  const onChat = useSelector((state) => state.videoCall.onChat);
  useEffect(() => {
    if (!onChat) {
      setVideoCallVisiable(false);
    }
  }, [onChat]);

  // const dispatch = useDispatch();
  const {
    selects,
    msgIds,
    userIds,
    data,
    messageData,
    loginUid,
    loginUser,
    footprint,
  } = useSelector((store) => {
    return {
      selects: store.ui.selectMessages[`channel_${cid}`],
      footprint: store.footprint,
      loginUser: store.contacts.byId[store.authData.uid],
      loginUid: store.authData.uid,
      msgIds: store.channelMessage[cid] || [],
      userIds: store.contacts.ids,
      data: store.channels.byId[cid] || {},
      messageData: store.message || {},
    };
  });
  const ref = useChatScroll(msgIds);
  // const handleClearUnreads = () => {
  //   dispatch(readMessage(msgIds));
  // };
  const toggleMembersVisible = () => {
    setMembersVisible((prev) => !prev);
    setVideoCallVisiable(false);
    if (videoCallVisible) {
      dispatch(toggleChat());
    }
  };
  const toggleAddVisible = () => {
    setAddMemberModalVisible((prev) => !prev);
  };
  const toggleVideoCallVisible = () => {
    setMembersVisible(false);
    setVideoCallVisiable((prev) => !prev);
    dispatch(toggleChat());
  };
  const toggleFullScreen = () => {
    if (fullScreen) {
      setFullScreen(false);
      setVideoCallVisiable(true);
    } else {
      setFullScreen(true);
      setVideoCallVisiable(false);
    }
  };

  const { name, description, is_public, members = [], owner } = data;
  const memberIds = is_public ? userIds : members;
  const addVisible = loginUser?.is_admin || owner == loginUid;
  console.log("channel message list", msgIds);
  const readIndex = footprint.readChannels[cid];
  const pinCount = data?.pinned_messages?.length || 0;
  return (
    <>
      {addMemberModalVisible && (
        <ChannelInviteModal cid={cid} closeModal={toggleAddVisible} />
      )}
      <Layout
        to={cid}
        context="channel"
        dropFiles={dropFiles}
        // ref={containerRef}
        aside={
          <>
            <ul className="tools">
              {/* <li className="tool">
                <Tooltip tip="Search" placement="left">
                  <img src={searchIcon} alt="opt icon" />
                </Tooltip>
              </li> */}
              <li className="tool" onClick={toggleVideoCallVisible}>
                <Tooltip tip="Voice/Video Chat" placement="left">
                  <IconHeadphone />
                </Tooltip>
              </li>
              {/* <li className="tool">
                <Tooltip tip="Notifications" placement="left">
                  <img src={alertIcon} alt="opt icon" />
                </Tooltip>
              </li> */}
              <Tooltip
                tip="Pin"
                placement="left"
                disabled={toolVisible == "pin"}
              >
                <Tippy
                  onShow={() => {
                    setToolVisible("pin");
                  }}
                  onHide={() => {
                    setToolVisible("");
                  }}
                  delay={[0, 0]}
                  duration={0}
                  placement="left-start"
                  popperOptions={{ strategy: "fixed" }}
                  offset={[0, 80]}
                  interactive
                  trigger="click"
                  // content={<PinList id={cid} />}
                >
                  <li
                    className={`tool ${pinCount > 0 ? "badge" : ""} ${
                      toolVisible == "pin" ? "active" : ""
                    } `}
                    data-count={pinCount}
                  >
                    <IconPin />
                  </li>
                </Tippy>
              </Tooltip>
              <Tooltip
                tip="Favorite"
                placement="left"
                disabled={toolVisible == "favorite"}
              >
                <Tippy
                  onShow={() => {
                    setToolVisible("favorite");
                  }}
                  onHide={() => {
                    setToolVisible("");
                  }}
                  delay={[0, 0]}
                  duration={0}
                  placement="left-start"
                  popperOptions={{ strategy: "fixed" }}
                  offset={[0, 180]}
                  interactive
                  trigger="click"
                  content={<FavList cid={cid} />}
                >
                  <li
                    className={`tool fav ${
                      toolVisible == "favorite" ? "active" : ""
                    } `}
                    data-count={pinCount}
                  >
                    <IconFav />
                  </li>
                </Tippy>
              </Tooltip>
              <li
                className={`tool ${membersVisible ? "active" : ""}`}
                onClick={toggleMembersVisible}
              >
                <Tooltip tip="Channel Members" placement="left">
                  <IconPeople />
                </Tooltip>
              </li>
            </ul>
            <hr className="divider" />
            <ul className="apps">
              <li className="app">
                <Tooltip tip="Webrowse" placement="left">
                  <img src={webrowseIcon} alt="app icon" />
                </Tooltip>
              </li>
              <li className="app">
                <Tooltip tip="BoardOS" placement="left">
                  <img src={boardosIcon} alt="app icon" />
                </Tooltip>
              </li>
            </ul>
          </>
        }
        header={
          <>
            {!fullScreen && (
              <StyledHeader className="head">
                <div className="txt">
                  <ChannelIcon personal={!is_public} />
                  <span className="title">{name}</span>
                  <span className="desc">{description}</span>
                </div>
              </StyledHeader>
            )}
          </>
        }
        contacts={
          <>
            {membersVisible && (
              <>
                <StyledContacts>
                  {addVisible && (
                    <div className="add" onClick={toggleAddVisible}>
                      <img className="icon" src={addIcon} />
                      <div className="txt">Add members</div>
                    </div>
                  )}
                  {memberIds.map((uid) => {
                    return <Contact key={uid} uid={uid} dm popover />;
                  })}
                </StyledContacts>
              </>
            )}
            {videoCallVisible && (
              <>
                <VideoPanel onFullScreen={toggleFullScreen} channel={cid} />
              </>
            )}
          </>
        }
      >
        <StyledChannelChat ref={ref}>
          {!fullScreen && (
            <>
              <div className="info">
                <h2 className="title">Welcome to #{name} !</h2>
                <p className="desc">
                  This is the start of the #{name} channel.{" "}
                </p>
                <NavLink
                  to={`/setting/channel/${cid}?f=${pathname}`}
                  className="edit"
                >
                  <EditIcon className="icon" />
                  Edit Channel
                </NavLink>
              </div>
              <div className="feed">
                {[...msgIds]
                  .sort((a, b) => {
                    return Number(a) - Number(b);
                  })
                  .map((mid, idx) => {
                    const curr = messageData[mid];
                    if (!curr) return null;
                    const isFirst = idx == 0;
                    const prev = idx == 0 ? null : messageData[msgIds[idx - 1]];
                    const read = curr?.from_uid == loginUid || mid <= readIndex;
                    return renderMessageFragment({
                      selectMode: !!selects,
                      updateReadIndex: updateReadDebounced,
                      read,
                      isFirst,
                      prev,
                      curr,
                      contextId: cid,
                      context: "channel",
                    });
                  })}
              </div>
            </>
          )}
          {fullScreen && <VideoChatPanel onOffFullScreen={toggleFullScreen} />}
        </StyledChannelChat>
        {/* {unreads != 0 && (
        <StyledNotification>
          <div className="content">
            {unreads} new messages
            {msgs.lastAccess
              ? `since ${dayjs(msgs.lastAccess).format("YYYY-MM-DD h:mm:ss A")}`
              : ""}
          </div>
          <button onClick={handleClearUnreads} className="clear">
            Mark As Read
          </button>
        </StyledNotification>
      )} */}
      </Layout>
    </>
  );
}