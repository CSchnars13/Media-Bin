import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';


import {getUsers} from '../../../../../../../User/UserReducer'


export class Discover extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var inactiveUsers;
		var usersToFollow
		if(this.props.users){
			inactiveUsers = this.props.users[1];
		

		usersToFollow = inactiveUsers.map((item, i) => 
				<div key={i} className="row">
					<div className="col">
						<h3> {item.name} </h3>
						<h3> {item.email} </h3>
						<h3> Albums logged: {item.albums.length} </h3>
					</div>
					<div className="col">
						<button className = "btn btn-primary"> Follow </button>
					</div>
				</div>
		);
	}
		else
			usersToFollow = <div></div>;


		return (
			<div className = "Discover">
				{usersToFollow}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	users: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Discover);