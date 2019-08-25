import { action } from "typesafe-actions";
import { ActionType } from "typesafe-actions";
import { IVideo } from "./videos.state";

export enum VideoActions {
  GET_VIDEOS = "GET_VIDEOS_REQUEST",
  GET_VIDEOS_STARTED = "GET_VIDEOS_STARTED",
  GET_VIDEOS_COMPLETED = "GET_VIDEOS_COMPLETED",
  SELECT_VIDEO = "SELECT_VIDEO"
}

export const getVideos = (value: string) => {
  return action(VideoActions.GET_VIDEOS, value);
};

export const getVideosCompleted = (response: IVideo[]) => {
  return action(VideoActions.GET_VIDEOS_COMPLETED, response);
};

export const selectVideo = (video: IVideo) => {
  console.log("action", video);
  return action(VideoActions.SELECT_VIDEO, video);
};
export type VideosActionType = ActionType<
  typeof getVideos | typeof getVideosCompleted | typeof selectVideo
>;
