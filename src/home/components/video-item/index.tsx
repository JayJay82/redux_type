import React from "react";
import { IVideo } from "../../state/videos.type";

interface VideoItemProps {
  onSelected: (video: IVideo) => void;
  video: IVideo;
}

export const VideoItem: React.FC<VideoItemProps> = (Props: VideoItemProps) => {
  const onClick = (e: any) => {
    Props.onSelected(Props.video);
  };
  return (
    <li onClick={onClick} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="test" src={Props.video.image} />
        </div>
        <div className="media-body ml-2">
          <div className="media-heading">{Props.video.title}</div>
        </div>
      </div>
    </li>
  );
};
