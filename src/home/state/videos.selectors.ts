import { Selector, createSelector } from "reselect";
import { IRootState } from "../../_configuration/store";
import { IVideoState, IVideo } from "./videos.type";

const videosReducer: Selector<IRootState, IVideoState> = state => state.videos;

export const videoListSelector = createSelector<
  IRootState,
  IVideoState,
  IVideo[] | null
>(
  [videosReducer],
  videos => {
    return videos.videoList;
  }
);

export const selectedVideoSelector = createSelector<
  IRootState,
  IVideoState,
  IVideo | null
>(
  [videosReducer],
  videos => {
    return videos.selectedVIdeo;
  }
);
