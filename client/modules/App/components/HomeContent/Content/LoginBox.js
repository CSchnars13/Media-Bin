import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './LoginBox.css';

export class LoginBox extends Component{
	constructor(props){
		super(props);
	}

		checkCredentials = () => {
		const emailRef = this.refs.email;
		const passwordRef = this.refs.password;

		if (emailRef.value && passwordRef.value){
			this.props.checkCredentials(emailRef, passwordRef, 'basic');
			console.log(emailRef);
		}
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
					<button type="button" className="btn btn-default" onClick={this.props.loginHandler}>Log In</button>
				</div>

			</div>
		)
	}
}

export default LoginBox;