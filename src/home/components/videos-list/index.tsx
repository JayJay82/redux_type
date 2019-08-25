import React from 'react'
import { IVideo } from '../../state/videos.state';

interface VideoListProps {
    videoList: IVideo[] | null
}

export const VideoList : React.FC<VideoListProps> = (Props : VideoListProps) => {
    console.log(Props.videoList);
    const mapVideos = (videos : IVideo[]) => {
        return videos.map((item : IVideo, index : number) => {
            return (
                <li key={index}  className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" alt="test" src={item.image}  />
                    </div>
                    <div className="media-body ml-2">
                        <div className="media-heading">
                        {item.title}
                        </div>
                    </div>
                    </div>
                </li> 
            )
        })
    }
    if(Props.videoList) {
        return (
                <ul className="col-md-4 list-group">
                 {mapVideos(Props.videoList)}
                </ul>
        )
    }
}

