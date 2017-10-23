import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './AccountCreation.css';
import styles from './SignUpBox.css';

export class SignUpBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = {styles.box}>
			<h4>Create Account</h4>
				<form>
					<div className = "form-group">
						<label htmlFor="email-form">Email Address</label>
	    				<input type="email" className="form-control" id="email-form" placeholder="Email"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Password</label>
	    				<input type="email" className="form-control" id="password-form" placeholder="Password"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Confirm Password</label>
	    				<input type="email" className="form-control" id="password-confirm" placeholder="Confirm Password"></input>
					</div>
				</form>
				<p> Already have an account? Sign In </p>
				<div className="text-center">
					<button type="button" className="btn btn-default">Sign Up</button>
				</div>
			</div>
		)
	}
}

export default SignUpBox;