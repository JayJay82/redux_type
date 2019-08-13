import {IVideoState} from '../home/state/videos.state';
import VideosReducer from '../home/state/videos.reducers';
import { combineReducers, createStore } from 'redux';

export interface IRootState {
    videos : IVideoState
}

const store = createStore<IRootState,any,any,any>(
    combineReducers({
        videos : VideosReducer
    })
)

export default store;