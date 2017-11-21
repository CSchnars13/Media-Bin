import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import styles from './HomeContent.css';
import LoginBox from './Content/LoginBox';
import SignUpBox from './Content/SignUpBox';
import InfoBox from './Content/InfoBox';

import { addUserRequest, getUserRequest } from '../../../User/UserActions';
import {getUsers} from '../../../User/UserReducer'



export class HomeContent extends Component{
	constructor(props){
		super(props);
	}

	handleAddUser = (email, password, role) => {
    	this.props.dispatch(addUserRequest({ email, password, role }));
	};

	handleLoginAttempt = (email) => {
		this.props.dispatch(getUserRequest(email));
	};




	render(){
		var userLogin;
		if (this.props.signUp)
			userLogin = <SignUpBox toggleSignUp={this.props.toggleSignUp} addUser = {this.handleAddUser} />;
		else
			userLogin = <LoginBox loginHandler={this.props.loginHandler} toggleSignUp={this.props.toggleSignUp} checkCredentials = {this.handleLoginAttempt} />;

		return (
			<div className = {styles.content}>
				<div className="row">
					<div className="col">
						<InfoBox />
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