import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './HomeContent.css';
import AlbumFeedBox from './Components/AlbumFeedBox/AlbumFeedBox';
import PlaylistBox from './Components/PlaylistBox/PlaylistBox';
import EventBox from './Components/AlbumFeedBox/AlbumFeedBox';
import ListBox from './Components/PlaylistBox/PlaylistBox';


export class Dashboard extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "dashboard">
				<div className="row">
					<div className="col">
						<AlbumFeedBox />
						<PlaylistBox />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<EventBox />
						<ListBox />
					</div>
				</div>

			</div>
		)
	}
}

export default Dashboard;