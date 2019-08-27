import { IVideoState } from "./videos.type";
import { VideoActions, VideosActionType } from "../state/videos.actions";

const init: IVideoState = {
  videoList: null,
  selectedVIdeo: null
};

export default function VideosReducer(
  state: IVideoState = init,
  action: VideosActionType
): IVideoState {
  switch (action.type) {
    case VideoActions.GET_VIDEOS_COMPLETED: {
      return { ...state, videoList: action.payload };
    }
    case VideoActions.SELECT_VIDEO: {
      return { ...state, selectedVIdeo: action.payload };
    }
    default:
      return state;
  }
}
