import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';

import {addFollowRequest} from '../../../../../../../User/UserActions'
import {getUsers} from '../../../../../../../User/UserReducer'


export class Discover extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var inactiveUsers;
		var usersToFollow;
		if(this.props.users){
			inactiveUsers = this.props.users[1];
			for (var i = 0; i < this.props.users[0].subscribed.length; i++){
				for(var j=0; j < inactiveUsers.length; j++){
					if (this.props.users[0].subscribed[i]._id === inactiveUsers[j]._id){
						inactiveUsers.splice(j,1);
						break;
					}
				}

			}

			usersToFollow = inactiveUsers.map((item, i) => 
				<div key={i} className="row">
					<div className="col">
						<h3> {item.name} </h3>
						<h3> {item.email} </h3>
						<h3> Albums logged: {item.albums.length} </h3>
					</div>
					<div className="col">
						<button className = "btn btn-default" onClick={() => this.props.handleFollow(this.props.users[0].email, item._id)}> Follow </button>
					</div>
				</div>
		);
	}
		else
			usersToFollow = <div></div>;


		return (
			<div className = "Discover">
				<h2 className="text-center"> Who To Follow </h2>
				<hr />
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