import {IVideoState} from '../home/state/videos.state';
import VideosReducer from '../home/state/videos.reducers';
import { combineReducers, createStore, applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export interface IRootState {
    videos : IVideoState
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore<IRootState,any,any,any>(
    combineReducers({
        videos : VideosReducer
    }),
    compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);
export default store;