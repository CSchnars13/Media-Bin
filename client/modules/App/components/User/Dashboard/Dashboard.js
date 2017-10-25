import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './Dashboard.css';
import AlbumFeedBox from './components/AlbumFeedBox/AlbumFeedBox';
import PlaylistBox from './components/PlaylistBox/PlaylistBox';
import EventBox from './components/EventBox/EventBox';
import ListBox from './components/ListBox/ListBox';


export class Dashboard extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = {styles.dashboard}>
				<div className="row">
					<div className="col">
						<AlbumFeedBox />
						<PlaylistBox />
					</div>
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