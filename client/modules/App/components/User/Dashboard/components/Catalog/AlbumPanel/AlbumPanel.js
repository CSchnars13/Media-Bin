import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';


//import {getUsers} from '../../../../User/UserReducer'


export class AlbumPanel extends Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className = "AlbumPanel">
				<div className = "img-fluid">
				</div>


				<div className = "AlbumInfo">
					<h3>Example Title</h3>
					<h3>Example Artist</h3>
					<h3>Example Release Date</h3>
					<h3>Example Rating</h3>
					<h3>Example Comment</h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	//user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(AlbumPanel);