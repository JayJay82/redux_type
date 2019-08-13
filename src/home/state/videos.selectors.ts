import { Selector, createSelector} from 'reselect';
import { IRootState } from '../../_configuration/store';
import { IVideoState, IVideo } from './videos.state';


const videosReducer : Selector<IRootState , IVideoState> = state => state.videos;

export const videoListSelector = createSelector<IRootState,IVideoState, IVideo[]>(
    [videosReducer],
    (videos) => {
       return videos.videoList;
    }
)