import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './EventBox.css';
import Event from './Event/Event';
import BlankEvent from './BlankEvent/BlankEvent';

export class EventBox extends Component{
	constructor(props){
		super(props);

		this.state={eventEntry: false,
					events: [
						{name: "RARE Music Festival",
						location: "Orlando, FL",
						date: "2017"},
						{name: "Lil Wayne at UF",
						location: "Gainesville, FL",
						date: "2017"},
						{name: "Okeechobee Music Festival",
						location: "Okeechobee, FL",
						date: "2016"},
						{name: "Bonnaroo Music Festival",
						location: "Manchester, TN",
						date: "2015"},
						],
					
						tempName: null,
						tempLocation: null,
						tempDate: null

					};

		this.createEventForm = this.createEventForm.bind(this);
		this.submitNewEvent = this.submitNewEvent.bind(this);
		this.cancelEntry = this.cancelEntry.bind(this);

	}

	createEventForm(){
		this.setState({eventEntry: true});
	}

	submitNewEvent(){
		this.setState({eventEntry: false, events: [...this.state.events, {name: this.state.tempName, location: this.state.tempLocation, date: this.state.tempDate}]});

	}

	cancelEntry(){
		this.setState({eventEntry: false});
	}

	render(){

		var view;
		var events = this.state.events.map((item,i) => <Event key={i} name={item.name} location={item.location} date={item.date} />);

		if(this.state.eventEntry)
			view = <BlankEvent submitNewEvent={this.submitNewEvent} cancelEntry={this.cancelEntry} nameRef = {el => {this.setState({tempName: el.target.value}); }} 
					locationRef = {el => {this.setState({tempLocation: el.target.value}); }} 
					dateRef = {el => {this.setState({tempDate: el.target.value}); }} />;
		else
			view =
			<div>
				<div className="events">
					{events}
				</div>
				<div className={styles.marginTop}>
					<div className="text-center">
						<button type="button" className="btn btn-default" onClick={this.createEventForm}>Add New Event</button>
					</div>
				</div>
			</div>;

		return (
			<div className = "eventFeed">
			<h2 className="text-center">{this.state.eventEntry ? "Add New Event" : "Latest Events"}</h2>
				{view}
			</div>
		)
	}
}

export default EventBox;