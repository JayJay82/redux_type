import {IVideoState, IVideo} from './videos.state';


const init : IVideoState = {
   videoList : [{image : 'test' , title : 'test' , content : ' test' }]
}

export default function VideosReducer(state : IVideoState = init , action : any) : IVideoState {
    switch (action.type) {
        default : 
           return state
    }
}