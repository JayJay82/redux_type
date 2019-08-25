import React from "react";
import { IVideo } from "../../state/videos.state";
import { VideoItem } from "../video-item";
import { useDispatch } from "react-redux";
import { selectVideo } from "../../state/videos.actions";

interface VideoListProps {
  videoList: IVideo[] | null;
}

export const VideoList: React.FC<VideoListProps> = (Props: VideoListProps) => {
  const dispatch = useDispatch();

  const onSelected = (video: IVideo) => {
    dispatch(selectVideo(video));
  };

  const mapVideos = (videos: IVideo[]) => {
    return videos.map((item: IVideo, index: number) => {
      return <VideoItem key={index} video={item} onSelected={onSelected} />;
    });
  };
  if (Props.videoList) {
    return (
      <ul className="col-md-4 list-group">{mapVideos(Props.videoList)}</ul>
    );
  }
  return null;
};
