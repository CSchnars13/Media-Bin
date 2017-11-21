import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import styles from './Dashboard.css';
import AlbumFeedBox from './components/AlbumFeedBox/AlbumFeedBox';
import PlaylistBox from './components/PlaylistBox/PlaylistBox';
import EventBox from './components/EventBox/EventBox';
import ListBox from './components/ListBox/ListBox';

import {getUsers} from '../../../../User/UserReducer'


export class Dashboard extends Component{
	constructor(props){
		super(props);

	setTimeout(() => {
		console.log(this.props.user);
	}, 3000);
	}

	render(){
		var header;
		if (this.props.user.length > 0)
			header = this.props.user[0].email;
		else
			header = "";

		return (
			<div className = {styles.dashboard}>
				<h1 className = "text-center">{header}</h1>
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

function mapStateToProps(state) {
	return {
	   	user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Dashboard);