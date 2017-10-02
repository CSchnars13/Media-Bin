import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './InfoBox.css';

export class InfoBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "info-box">
				<h1> DIS </h1>
				<h1> SUM </h1>
				<h1> FILLER </h1>
				<h1> TEXT </h1>
			</div>
		)
	}
}

export default InfoBox;