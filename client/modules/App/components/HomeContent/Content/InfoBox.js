import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './InfoBox.css';

export class InfoBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "info-box">
				<h2 className="text-center"> What is Media Bin? </h2>
				<h4> Catalog </h4>
				<p> Record ratings, comments, and favorite songs on albums you have listened to </p>
				<h4> Share </h4>
				<p> Create a music profile that your friends follow to stay updated with your latest music tastes </p>
				<h4> Discover </h4>
				<p> Follow your friends and explore genres, artists, and albums you've never encountered before </p>
			</div>
		)
	}
}

export default InfoBox;