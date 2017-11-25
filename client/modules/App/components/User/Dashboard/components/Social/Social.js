import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';


//import {getUsers} from '../../../../User/UserReducer'


export class Social extends Component{
	constructor(props){
		super(props);

		this.state = {
			discoverToggle: true
		}
	}

	render(){
		var view;
		if (discoverToggle)
			view = 
				<Feed />
				<Discover />;
		else
			view = <Feed />;


		return (
			<div className = "AlbumPanel">
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

export default connect(mapStateToProps)(Social);