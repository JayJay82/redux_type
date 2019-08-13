import React from 'react';
import {SearchBar} from './components/search-bar';


export class Home extends React.Component {

    searchBarChange = (value : string) : void => {
        console.log("home", value);
    }
    render () {
        return(
            <SearchBar onChange = {this.searchBarChange} />
        )
    }
}


