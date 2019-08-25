import { all } from 'redux-saga/effects';
import { getVideosWatcherSaga } from '../home/state/videos.saga';


export default function* rootSaga() {
  yield all([
    getVideosWatcherSaga()
  ]);
}