import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './EventBox.css';
import Event from './Event/Event';
import BlankEvent from './BlankEvent/BlankEvent';

import { addEventRequest} from '../../../../../../User/UserActions';
import {getUsers} from '../../../../../../User/UserReducer'

export class EventBox extends Component{
	constructor(props){
		super(props);

		this.state={eventEntry: false,					
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
		this.setState({eventEntry: false});
		this.props.dispatch(addEventRequest(this.props.user[0].email, { name: this.state.tempName, location: this.state.tempLocation, date: this.state.tempDate}));

	}

	cancelEntry(){
		this.setState({eventEntry: false});
	}

	render(){

		var view;
		var events = this.props.user[0].events.map((item,i) => <Event key={i} name={item.name} location={item.location} date={item.date} />);

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


function mapStateToProps(state) {
	return {
	   	user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(EventBox);