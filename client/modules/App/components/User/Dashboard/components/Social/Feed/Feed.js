import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';



import {getUsers} from '../../../../../../../User/UserReducer'


export class Feed extends Component{
	constructor(props){
		super(props);

		this.state={isMounted: false};
	}

	componentDidMount(){
		this.setState({isMounted: true});
	}

	render(){
		var view = [];
		var albums;
				
		if(this.state.isMounted){

			if(this.props.users){
				for(var i=0; i<this.props.users[0].subscribed.length; i++){
					var currSub = this.props.users[0].subscribed[i];
					albums = currSub.albums.map((item, i) =>
					<div> 
					<div className="row">
						<div className="col">
							<h3> {currSub.name} </h3>
							<h4> {item.title} </h4>
							<h4> {item.artist} </h4>
							<h6> Their Rating: {item.rating} </h6>
							<h6> Their Comment: {item.comment} </h6>
						</div>
						<div className="col">
							<h4> IMG Placeholder</h4>
						</div>
					</div>
					<hr />
					</div>);
					view.push(albums);
				}
			}
		}

		else
			view.push(<div></div>)


		return (

			<div className = "Feed">
				<h2 className="text-center"> Friend Activity </h2>
				<hr />
				<div>
					{view}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	users: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Feed);