import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './HomeContent.css';
import Album from './Album';

export class AlbumFeedBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "albumFeed">
				<div className="row">
					<Album title="Master of Puppets" artist="Metallica" date="1983">
				</div>
				<div className="text-center">
					<button type="button" class="btn btn-primary">Add New Album</button>
				</div>
			</div>
		)
	}
}

export default AlbumFeedBox;