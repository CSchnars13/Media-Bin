import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import styles from './LoginBox.css';

import {getUsers} from '../../../../User/UserReducer'

export class LoginBox extends Component{
	constructor(props){
		super(props);

   	this.handleLogin = this.handleLogin.bind(this);

   	this.state = {
	   	error: {
	   		msg: "Login failed - invalid email/password",
	   		show: false,
		},

		test: false,
	}
	}

	checkCredentials(){
		const emailRef = this.refs.email.value;

		if (emailRef){
			this.props.checkCredentials(emailRef);
			
		}
	}

	handleLogin(){
		this.checkCredentials();
		setTimeout(function(){
			if (this.props.user.length > 0)
				this.props.loginHandler();
			else{
				this.setState({error: {show: true, msg: this.state.error.msg}});
			}
		}.bind(this), 1000);

		
		
	}

	render(){
		return (
			<div className = {styles.box}>
				<h4 className="header text-center">Sign In</h4>
				<form>
					<div className = "form-group {styles.forms}">
						<label htmlFor="email-form">Email Address</label>
	    				<input type="email" className="form-control" id="email-form" placeholder="Email" ref="email"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Password</label>
	    				<input type="email" className="form-control" id="password-form" placeholder="Password" ref="password"></input>
					</div>
				</form>
				<a onClick={this.props.toggleSignIn}> Create Account </a>
				<div className="text-center">
					<button type="button" className="btn btn-default" onClick={this.handleLogin}>Log In</button>
				</div>
				<h6 className="text-center"> {(this.state.error.show ? this.state.error.msg : "")} </h6>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(LoginBox);