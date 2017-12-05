import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';



import {getUsers} from '../../../../../../../User/UserReducer'


export class Feed extends Component{
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.users){
			console.log(this.props.users.length, this.props.users[0]);

			var inactiveUsers = this.props.users[1];

			console.log(inactiveUsers);
		}


		return (
			<div className = "Feed">
				<div className="row">
					<div className="col">
						<h6> User </h6>
						<h6> Album </h6>
						<h6> Rating </h6>
						<h6> Comment </h6>
					</div>
					<div className="col">
						<h4> IMG Placeholder</h4>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	users: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Feed);