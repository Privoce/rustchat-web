import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KEY_UID } from "../config";
import { ConnectionState } from "agora-rtc-sdk-ng";
import { resetAuthData } from "./auth.data";

export type VoiceBasicInfo = {
  context: "channel" | "dm"
  id: number,
}

export type VoicingInfo = {
  downlinkNetworkQuality?: number,
  muted?: boolean,
  deafen?: boolean,
  joining?: boolean,
  connectionState?: ConnectionState
} & VoiceBasicInfo

export type VoicingMemberInfo = {
  speakingVolume?: number,
  muted?: boolean,
  deafen?: boolean
}

export type VoicingMembers = {
  ids: number[],
  byId: {
    [key: number]: VoicingMemberInfo
  }
}
export type VoiceInfo = {
  memberCount: number
} & VoiceBasicInfo
interface State {
  voicing: VoicingInfo | null,
  voicingMembers: VoicingMembers,
  list: VoiceInfo[]
}
// const initialInfo = {
//   context: "channel" as const,
//   id: 0,
//   members: []
// };
const initialState: State = {
  voicing: null,
  voicingMembers: {
    ids: [],
    byId: {}
  },
  list: []
};



const voiceSlice = createSlice({
  name: "voice",
  initialState,
  reducers: {
    updateVoicingInfo(state, { payload }: PayloadAction<VoicingInfo | null>) {
      if (payload) {
        state.voicing = { ...(state.voicing ?? {}), ...payload };
      } else {
        // reset
        state.voicing = payload;
        state.voicingMembers = {
          ids: [],
          byId: {}
        };
      }
    },
    updateMuteStatus(state, { payload }: PayloadAction<boolean>) {
      if (state.voicing) {
        state.voicing.muted = payload;
        // 更新登录用户在member list的状态
        const loginUid = localStorage.getItem(KEY_UID) ?? 0;
        const idx = state.voicingMembers.ids.findIndex((uid) => uid == loginUid);
        if (idx > -1) {
          state.voicingMembers.byId[+loginUid].muted = payload;
        }
      }
    },
    updateDeafenStatus(state, { payload }: PayloadAction<boolean>) {
      if (state.voicing) {
        state.voicing.deafen = payload;
        state.voicing.muted = payload;
        // 更新登录用户在member list的状态
        const loginUid = localStorage.getItem(KEY_UID) ?? 0;
        const idx = state.voicingMembers.ids.findIndex((uid) => uid == loginUid);
        if (idx > -1) {
          state.voicingMembers.byId[+loginUid].muted = payload;
        }
      }
    },
    updateConnectionState(state, { payload }: PayloadAction<ConnectionState>) {
      if (state.voicing) {
        state.voicing.connectionState = payload;
      }
    },
    updateVoicingNetworkQuality(state, { payload }: PayloadAction<number>) {
      if (state.voicing) {
        state.voicing.downlinkNetworkQuality = payload;
      }
    },
    upsertVoiceList(state, { payload }: PayloadAction<VoiceInfo[] | VoiceInfo>) {
      if (Array.isArray(payload)) {
        state.list = payload;
      } else {
        const { id, context } = payload;
        const idx = state.list.findIndex(v => v.id == id && v.context == context);
        if (idx > -1) {
          state.list.splice(idx, 1, payload);
        } else {
          state.list.push(payload);
        }
      }
    },
    addVoiceMember(state, { payload }: PayloadAction<number>) {
      const notExisted = !state.voicingMembers.ids.includes(payload);
      console.log("add voice member", payload, notExisted, state.voicingMembers.ids);
      if (notExisted) {
        state.voicingMembers.ids = [...state.voicingMembers.ids, payload];
        state.voicingMembers.byId[payload] = {
          speakingVolume: 0,
          muted: false
        };
      }
    },
    removeVoiceMember(state, { payload }: PayloadAction<number>) {
      const idx = state.voicingMembers.ids.findIndex((uid) => uid == payload);
      if (idx > -1) {
        state.voicingMembers.ids.splice(idx, 1);
        delete state.voicingMembers.byId[payload];
      }
    },
    updateVoicingMember(state, { payload }: PayloadAction<{ uid: number, info: VoicingMemberInfo }>) {
      const idx = state.voicingMembers.ids.findIndex((uid) => uid == payload.uid);
      if (idx > -1) {
        const { uid, info } = payload;
        state.voicingMembers.byId[uid] = { ...state.voicingMembers.byId[uid], ...info };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetAuthData, (state) => {
      //  reset voicing info
      if (window.VOICE_CLIENT) {
        window.VOICE_CLIENT.leave();
      }
      state.voicing = null;
      state.voicingMembers = {
        ids: [],
        byId: {}
      };
    });
  }
});

export const { updateConnectionState, addVoiceMember, removeVoiceMember, upsertVoiceList, updateVoicingInfo, updateVoicingNetworkQuality, updateMuteStatus, updateVoicingMember, updateDeafenStatus } = voiceSlice.actions;
export default voiceSlice.reducer;
