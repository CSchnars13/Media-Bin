import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './HomeContent.css';
import LoginBox from './Content/LoginBox';
import SignUpBox from './Content/SignUpBox';
import InfoBox from './Content/InfoBox';

import { addUserRequest, fetchUsersRequest, getUserRequest, deleteUsersRequest } from '../../../User/UserActions';
import {getUsers} from '../../../User/UserReducer'



export class HomeContent extends Component{
	constructor(props){
		super(props);
	}

	handleAddUser = (name, email, password) => {
    	this.props.dispatch(addUserRequest({ name, email, password}));
	};

	handleFetchUsers = () => {
		this.props.dispatch(fetchUsersRequest());
	}

	handleLoginAttempt = (email) => {
		this.props.dispatch(getUserRequest(email));
	};

	handleDeleteUsers = () => {
		this.props.dispatch(deleteUsersRequest());
	}




	render(){
		var userLogin;
		if (this.props.signUp)
			userLogin = <SignUpBox loginHandler={this.props.loginHandler} toggleSignUp={this.props.toggleSignUp} addUser = {this.handleAddUser} />;
		else
			userLogin = <LoginBox loginHandler={this.props.loginHandler} toggleSignUp={this.props.toggleSignUp} checkCredentials = {this.handleLoginAttempt} />;

		return (
			<div className = {styles.content}>
				<div className="row">
					<div className="col">
						<InfoBox fetchUsers={this.handleFetchUsers} deleteUsers={this.handleDeleteUsers} />
					</div>
					<div className={styles.divider}></div>
					<div className="col">
						{userLogin}
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

export default connect(mapStateToProps)(HomeContent);