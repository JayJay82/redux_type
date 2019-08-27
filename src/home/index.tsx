import React, { Dispatch } from "react";
import { SearchBar } from "./components/search-bar";
import { IRootState } from "../_configuration/store";
import { connect } from "react-redux";
import { videoListSelector, selectedVideoSelector } from "./state/videos.selectors";
import { VideosActionType, getVideos } from "./state/videos.actions";
import { VideoList } from "./components/videos-list";
import _ from "lodash";
import { VideoDetail } from "./components/video-detail";

class Home extends React.Component<HomeProps> {
  changeDebounce = _.debounce((term: string) => {
    this.props.videosRequest(term);
  }, 1000);

  render() {
    return (
      <>
        <SearchBar onChange={this.changeDebounce} />
        <div className="row">
          <VideoList videoList={this.props.videoList} />
          <VideoDetail video={this.props.video} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    videoList: videoListSelector(state),
    video : selectedVideoSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<VideosActionType>) => {
  return {
    videosRequest: (value: string) => {
      dispatch(getVideos(value));
    }
  };
};

type HomeProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
