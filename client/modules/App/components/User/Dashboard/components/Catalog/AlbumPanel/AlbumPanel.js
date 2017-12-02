import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';


//import {getUsers} from '../../../../User/UserReducer'\

const art = require('./img/MasterofPuppets.png');
const art2 = require('./img/Currents.png');
const art3 = require('./img/LuvIsRage2.png');
const art4 = require('./img/RandomAccessMemories.png');
const art5 = require('./img/Boston.png');
const art6 = require('./img/ARushOfBloodToTheHead.png');



export class AlbumPanel extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var album;
		if (this.props.title === "Master of Puppets")
			album = art;
		else if (this.props.title === "Currents")
			album = art2;
		else if (this.props.title === "Luv is Rage 2")
			album = art3;
		else if (this.props.title === "Random Access Memories")
			album = art4;
		else if (this.props.title === "Boston")
			album= art5;
		else
			album=art6;

		return (
			<div className = "AlbumPanel">
				<img className = "img-fluid" height="400" width="400" src={album} />


				<div className = "AlbumInfo">
					<h4>{this.props.title}</h4>
					<h5>{this.props.artist}</h5>
					<h5>{this.props.date}</h5>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	//user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(AlbumPanel);