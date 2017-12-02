import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';
import AlbumPanel from './AlbumPanel/AlbumPanel'

//import {getUsers} from '../../../../User/UserReducer'


export class Catalog extends Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className = "Catalog">
				<div className = "row">
					<div className = "col">
						<AlbumPanel title="Luv is Rage 2" artist="Lil Uzi Vert" date="2017" />
					</div>
					<div className = "col">
						<AlbumPanel title="Master of Puppets" artist="Metallica" date="1983" />
					</div>
					<div className = "col">
						<AlbumPanel title="Currents" artist="Tame Impala" date="2015" />
					</div>
					<div className = "col">
						<AlbumPanel title="Random Access Memories" artist="Daft Punk" date="2013" />
					</div>										
				</div>
				<div className = "row">
					<div className = "col">
						
					</div>
					<div className = "col">
						<AlbumPanel title="Boston" artist="Boston" date="1975" />
					</div>
					<div className = "col">
						<AlbumPanel title="A Rush of Blood to the Head" artist="Coldplay" date="2002" />
					</div>
					<div className = "col">
						
					</div>										
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

export default connect(mapStateToProps)(Catalog);