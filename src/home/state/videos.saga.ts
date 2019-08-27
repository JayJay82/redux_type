import { call, put, takeEvery } from 'redux-saga/effects';
import { VideoActions, VideosActionType , getVideosCompleted, selectVideo } from './videos.actions'
import axios from 'axios';
import { IVideo } from './videos.type';


export function* getVideosWatcherSaga() {
    yield takeEvery(VideoActions.GET_VIDEOS, getVideosSaga);
  }

  function fetchVideos(term : string) {
    const uri = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ&part=snippet&order=relevance&maxResults=10&q=' + term;
    return axios({
        method: 'get',
        url: uri
    })
}


function* getVideosSaga(action : VideosActionType) {
  const response = yield call(fetchVideos,action.payload as string);
  const videos : IVideo[] = response.data.items.map((item : any) => {  
    const video : IVideo = { image: item.snippet.thumbnails.default.url, title : item.snippet.title, content : item.snippet.description, id : item.id.videoId}
    return video;
   })
  yield put(getVideosCompleted(videos));
  yield put(selectVideo(videos[0]));

}

