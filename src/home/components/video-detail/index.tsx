import React from 'react'
import { IVideo } from '../../state/videos.type';

interface VideoDetailProps {
    video : IVideo | null
}

export const VideoDetail : React.FC<VideoDetailProps> = (Props : VideoDetailProps) =>  {
    if(Props.video) {
        const videoId = Props.video.id;
        const url = 'https://www.youtube.com/embed/'+ videoId;
        return(
        
                    <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="youtubevideo" className="embed-responsive-item" src={url}></iframe>
                    </div>
                      <div className="details">
                          <div>{Props.video.title}</div>
                          <div>{Props.video.content}</div>
                      </div>
             </div>
        )
        
    }
    return null;
}