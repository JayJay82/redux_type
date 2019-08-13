import React from 'react';
import {SearchBar} from './components/search-bar';
import {IRootState} from '../_configuration/store';
import { connect } from 'react-redux';
import { videoListSelector} from './state/videos.selectors';

class Home extends React.Component<HomeProps> {

    searchBarChange = (value : string) : void => {
        console.log(value);
        console.log(this.props.videoList);
    }
    render () {
        return(
            <SearchBar onChange = {this.searchBarChange} />
        )
    }
}

const mapStateToProps = ( state :  IRootState) => {
    return {
        videoList : videoListSelector(state)
    }
}

type HomeProps = ReturnType<typeof mapStateToProps>;
export default connect(mapStateToProps)(Home);