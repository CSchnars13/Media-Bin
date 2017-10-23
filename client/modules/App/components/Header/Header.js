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
					        <a className="nav-link" href="#">{(this.props.loggedIn ? "Dashboard" : "Home")}<span className="sr-only">(current)</span></a>
					      </li>
					      <li className="nav-item" disabled={!this.props.loggedIn}>
					        {!this.props.loggedIn ? <a className="nav-link" href="#" disabled={this.props.loggedIn}>About</a> : null}
					      </li>
					      <li className="nav-item">
					        {!this.props.loggedIn ? <a className="nav-link" href="#" disabled={this.props.loggedIn}>Create New Account</a> : null}
					      </li>
					 		<li className="nav-item">
					        {this.props.loggedIn ? <a className="nav-link" href="#" disabled={this.props.loggedIn}>My Music</a> : null}
					      </li>
					      <li className="nav-item">
					        {this.props.loggedIn ? <a className="nav-link" href="#" disabled={this.props.loggedIn}>Explore</a> : null}
					      </li>
					      <li className="nav-item">
					        {this.props.loggedIn ? <a className="nav-link" href="#" disabled={this.props.loggedIn}>Sign Out</a> : null}
					      </li>
					    </ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;