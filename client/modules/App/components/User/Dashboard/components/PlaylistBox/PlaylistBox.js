import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './HomeContent.css';
//import Album from './Album';

export class PlaylistBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "playlistBox">
				<h4 className="text-center"> Featured Playlist </h4>
				<div className="navBar">

				</div>
				<div className="featuredPlaylist">
				</div>
			</div>
		)
	}
}

export default PlaylistBox;