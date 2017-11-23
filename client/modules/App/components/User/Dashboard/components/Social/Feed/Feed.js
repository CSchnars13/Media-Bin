import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';


//import {getUsers} from '../../../../User/UserReducer'


export class Feed extends Component{
	constructor(props){
		super(props);
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
			<div className = "Feed">
				<div className="row">
					<div className="col">
						<h3> User </h3>
						<h3> Album </h3>
						<h3> Rating </h3>
						<h3> Comment </h3>
					</div>
					<div className="col">
						<h1> IMG </h1>
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

export default connect(mapStateToProps)(Feed);