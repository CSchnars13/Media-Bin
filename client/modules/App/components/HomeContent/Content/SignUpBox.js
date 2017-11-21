import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './AccountCreation.css';
import styles from './SignUpBox.css';

export class SignUpBox extends Component{
	constructor(props){
		super(props);
	}

	addUser = () => {
		const emailRef = this.refs.email.value;
		const passwordRef = this.refs.password.value;

		console.log(emailRef, passwordRef);

		if (emailRef && passwordRef){
			this.props.addUser(emailRef, passwordRef, 'basic');
			console.log("New account added with email: " + emailRef + " and password: " + passwordRef);
		}
	}

	render(){
		return (
			<div className = {styles.box}>
			<h4 className="text-center">Create Account</h4>
				<form>
					<div className = "form-group">
						<label htmlFor="email-form">Email Address</label>
	    				<input type="email" className="form-control" id="email-form" placeholder="Email" ref="email"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Password</label>
	    				<input type="email" className="form-control" id="password-form" placeholder="Password" ref="password"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Confirm Password</label>
	    				<input type="email" className="form-control" id="password-confirm" placeholder="Confirm Password"></input>
					</div>
				</form>
				<a onClick={this.props.toggleSignUp}> Already have an account? Sign In </a>
				<div className="text-center">
					<button type="button" className="btn btn-default" onClick={this.addUser}>Sign Up</button>
				</div>
			</div>
		)
	}
}

export default SignUpBox;