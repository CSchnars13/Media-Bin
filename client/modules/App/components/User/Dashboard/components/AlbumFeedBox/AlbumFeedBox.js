import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './HomeContent.css';
import Album from './Album/Album';

export class AlbumFeedBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "albumFeed">
			<h4 className="text-center">Featured Albums</h4>
				<div className="albums">
					<Album title="Master of Puppets" artist="Metallica" date="1983" />
					<Album title="Luv is Rage 2" artist="Lil Uzi Vert" date="2017" />
					<Album title="Currents" artist="Tame Impala" date="2015" />
				</div>
				<div className="text-center">
					<button type="button" className="btn btn-default">Add New Album</button>
				</div>
			</div>
		)
	}
}

export default AlbumFeedBox;