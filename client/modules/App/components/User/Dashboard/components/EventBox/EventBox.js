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
			<div className = "eventBox">
				<h4 className="text-center">Recent Events</h4>
				<div className="featuredPlaylist">
				</div>
			</div>
		)
	}
}

export default EventBox;