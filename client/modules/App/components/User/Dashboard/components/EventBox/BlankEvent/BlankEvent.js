import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

export class BlankEvent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "blankEvent">
				<form>
					<div className = "form-group">
						<label htmlFor="email-form">Event Name</label>
	    				<input type="text" className="form-control" id="email-form" placeholder="Enter Event Name" onChange={this.props.nameRef}></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Location</label>
	    				<input type="text" className="form-control" id="password-form" placeholder="Enter Event Location" onChange={this.props.locationRef}></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Event Date</label>
	    				<input type="text" className="form-control" id="password-confirm" placeholder="Enter Event Date" onChange={this.props.dateRef}></input>
					</div>
				</form>
				<div className="text-center">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-default" onClick={this.props.submitNewEvent}>Submit Event</button>
						<button type="button" className="btn btn-secondary" onClick={this.props.cancelEntry}>Cancel</button>
					</div>
				</div>

			</div>
		)
	}
}

export default BlankEvent;