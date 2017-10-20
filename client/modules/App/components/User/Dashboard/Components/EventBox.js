import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './HomeContent.css';
//import Album from './Album';

export class EventBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "playlistBox">
				<div className="navBar">

				</div>
				<div className="featuredPlaylist">
				</div>
			</div>
		)
	}
}

export default EventBox;