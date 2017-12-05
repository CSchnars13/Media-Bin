import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';
import Feed from './Feed/Feed';
import Discover from './Discover/Discover';

//import {getUsers} from '../../../../User/UserReducer'


export class Social extends Component{
	constructor(props){
		super(props);

		this.state = {
			discoverToggle: true
		}
	}

	render(){
		var view;
		if (this.state.discoverToggle)
			view = 
				<div>
					<div className="row">
						<div className="col">
							<Feed />
						</div>
						<div className="col">
							<Discover />
						</div>
					</div>
				</div>
		else
			view = <Feed />;


		return (
			<div className = "AlbumPanel">
				{view}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	//user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Social);