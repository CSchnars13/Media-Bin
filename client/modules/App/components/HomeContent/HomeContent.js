import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './HomeContent.css';
import LoginBox from './Content/LoginBox';
import SignUpBox from './Content/SignUpBox';
import InfoBox from './Content/InfoBox';

export class HomeContent extends Component{
	constructor(props){
		super(props);
		this.state = {signUp: false};

		this.toggleSignUp = this.toggleSignUp.bind(this);
	}


	toggleSignUp() {
    	this.setState({signUp: !this.state.signUp});
  	};

	render(){
		var userLogin;
		if (this.state.signUp)
			userLogin = <SignUpBox toggleSignUp={this.toggleSignUp}/>;
		else
			userLogin = <LoginBox loginHandler={this.props.loginHandler} toggleSignUp={this.toggleSignUp}/>;

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
				<div className="text-center">
					<button type="button" className="btn btn-primary" onClick={this.toggleSignUp}>Toggle</button>
				</div>
			</div>	
		)
	}
}

export default HomeContent;