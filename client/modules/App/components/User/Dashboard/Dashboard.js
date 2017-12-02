import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import styles from './Dashboard.css';
import AlbumFeedBox from './components/AlbumFeedBox/AlbumFeedBox';
import PlaylistBox from './components/PlaylistBox/PlaylistBox';
import EventBox from './components/EventBox/EventBox';
import ListBox from './components/ListBox/ListBox';
import Catalog from './components/Catalog/Catalog';
import Social from './components/Social/Social';

import {getUsers} from '../../../../User/UserReducer'


export class Dashboard extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var header;
		var view;

		switch(this.props.view){
			case "dashboard": 
			header = "User Dashboard";
			view =	
				<div>			
					<div className="row">
						<div className="col">
							<AlbumFeedBox />
						</div>
						<div className="col">
							<EventBox />
						</div>
					</div>
				</div>;
			break;
			case "catalog": 
			header = "User Catalog";
			view = <Catalog />;
			break;
			case "social": 
			header = "User Feed";
			view = <Social />;
			break;
			default: 
			header = "";
			view = <div></div>;
		}

		return (
			<div className = {styles.dashboard}>
				<h1 className = "text-center">{header}</h1>
				<br />
				{view}
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