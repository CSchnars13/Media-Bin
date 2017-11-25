import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';


//import {getUsers} from '../../../../User/UserReducer'


export class Discover extends Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className = "Feed">
				<div className="row">
					<div className="col">
						<h3> User </h3>
					</div>
					<div className="col">
						<button className = "btn btn-primary"> IMG </button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Discover);