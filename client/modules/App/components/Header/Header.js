import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './Header.css';

export class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "header">
				<div className = "navbar navbar-expand-lg navbar-light bg-light">
					<span className = "h1 navbar-brand"> Media Bin </span>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
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