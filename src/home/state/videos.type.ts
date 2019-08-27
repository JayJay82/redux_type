export interface IVideo {
  image: string;
  title: string;
  content: string;
  id? : string
}

export interface IVideoState {
  videoList: IVideo[] | null;
  selectedVIdeo: IVideo | null;
}
