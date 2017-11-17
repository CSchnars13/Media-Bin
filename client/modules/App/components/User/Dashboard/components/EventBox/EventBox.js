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
						{name: "Master of Puppets",
						location: "Metallica",
						date: "1983"},
						{name: "Luv is Rage 2",
						location: "Lil Uzi Vert",
						date: "2017"},						
						{name: "Currents",
						location: "Tame Impala",
						date: "2015"}	
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
		var events = this.state.events.map((item,i) => <Event key={i} name={item.name} artist={item.location} date={item.date} />);

		if(this.state.eventEntry)
			view = <BlankEvent submitNewEvent={this.submitNewEvent} cancelEntry={this.cancelEntry} nameRef = {el => {this.setState({tempName: el.target.value}); }} 
					locationRef = {el => {this.setState({tempArtist: el.target.value}); }} 
					dateRef = {el => {this.setState({tempDate: el.target.value}); }} />;
		else
			view =
			<div>
				<div className="events">
					{events}
				</div>
				<div className={styles.marginTop}>
					<div className="text-center">
						<button type="button" className="btn btn-default" onClick={this.createEventForm}>Add New Album</button>
					</div>
				</div>
			</div>;

		return (
			<div className = "eventFeed">
			<h4 className="text-center">{this.state.eventEntry ? "Add New Album" : "Latest Albums"}</h4>
				{view}
			</div>
		)
	}
}

export default EventBox;