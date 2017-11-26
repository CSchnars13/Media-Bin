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
						<AlbumPanel />
					</div>
					<div className = "col">
						<AlbumPanel />
					</div>
					<div className = "col">
						<AlbumPanel />
					</div>
					<div className = "col">
						<AlbumPanel />
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