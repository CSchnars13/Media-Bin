import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';


import {getAlbumArtRequest} from '../../../../../../../User/ArtActions'
import {getUsers} from '../../../../../../../User/UserReducer'
import {getAllArt} from '../../../../../../../User/ArtReducer'
const loadingPlaceholder = require('./loading.png');


export class Feed extends Component{
	constructor(props){
		super(props);

		this.state={isMounted: false};
	}

	componentDidMount(){
		this.setState({isMounted: true});
		if(this.props.users){
			for (var i = 0; i < this.props.users[0].subscribed.length; i++){
				var currSub = this.props.users[0].subscribed[i];
				console.log(this.props.users[0].subscribed);
				for(var j=0; j<currSub.albums.length; j++){
					this.props.dispatch(getAlbumArtRequest(currSub.albums[j].title));
				}
			}
		}

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
							<br />
							<h6> Their Rating: {item.rating} </h6>
							<h6> Their Comment: {item.comment} </h6>
							<br />
							<p className="font-italic"> Logged: {new Date(item.dateLogged).toDateString()} </p>
						</div>
						<div className="col">
							<img className="img-fluid" height="250" width="250" 
							src={this.props.art.filter((art) => art.title === item.title)[0] ? 
								this.props.art.filter((art) => art.title === item.title)[0].medArt.url :
								loadingPlaceholder} />
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
	   	art: getAllArt(state)
	  };
	}

export default connect(mapStateToProps)(Feed);