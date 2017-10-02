import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './LoginBox.css';

export class LoginBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "login-box">
				<form>
					<textarea placeholder="Email Address"></textarea>
					<textarea placeholder="Password"></textarea>
				</form>

				<h1> Forgot password </h1>
			</div>
		)
	}
}

export default LoginBox;