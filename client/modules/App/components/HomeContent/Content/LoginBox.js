import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './LoginBox.css';

export class LoginBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = {styles.box}>
				<p className="header text-center">Sign In</p>
				<form>
					<div className = "form-group {styles.forms}">
						<label htmlFor="email-form">Email Address</label>
	    				<input type="email" className="form-control" id="email-form" placeholder="Email"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Password</label>
	    				<input type="email" className="form-control" id="password-form" placeholder="Password"></input>
	    				<small className="form-text" id="forgot-pass"> Forgot password </small>
					</div>
				</form>
			</div>
		)
	}
}

export default LoginBox;