import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './Event.css';

export class Event extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = {styles.event}>
				<div className="row">
					<div className="eventInfo">
							<h5> {this.props.name} </h5>
							<h6> {this.props.location} </h6>
							<h6> {this.props.date} </h6>
					</div>
				</div>
			</div>
		)
	}
}

export default Event;