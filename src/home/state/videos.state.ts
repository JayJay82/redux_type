export interface IVideo {
    image : string,
    title : string,
    content : string
}

export interface IVideoState {
    videoList : IVideo[] | null
}