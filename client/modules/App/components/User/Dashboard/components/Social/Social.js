import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';
import Feed from './Feed/Feed';
import Discover from './Discover/Discover';
import {addFollowRequest} from '../../../../../../User/UserActions'
import {getUsers} from '../../../../../../User/UserReducer'


export class Social extends Component{
	constructor(props){
		super(props);

		this.state = {
			discoverToggle: true
		}


	}

	handleAddFollow = (email, id) => {
		this.props.dispatch(addFollowRequest(email,id));
	};

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
							<Discover handleFollow={this.handleAddFollow} />
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
	   	user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Social);