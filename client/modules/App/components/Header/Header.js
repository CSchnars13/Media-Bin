import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './Header.css';
require("./Header.css");

export class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = {styles.header}>
				<div className ="navbar navbar-toggleable-md navbar-inverse bg-light">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation-menu" aria-controls="navigation-menu" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				 </button>
					<span className = "h1 navbar-brand test"> Media Bin </span>
					<div className="navbar-collapse collapse" id="navigation-menu">
						<ul className ="navbar-nav mr-auto">
					      <li className ="nav-item active">
					        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">About</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Sign In</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Create New Account</a>
					      </li>
					    </ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;