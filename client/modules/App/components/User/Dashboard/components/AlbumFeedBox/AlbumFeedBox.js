import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './AlbumFeedBox.css';
import Album from './Album/Album';
import BlankAlbum from './BlankAlbum/BlankAlbum';

import { addAlbumRequest } from '../../../../../../User/UserActions';
import { getAlbumArtRequest } from '../../../../../../User/ArtActions';
import {getUsers} from '../../../../../../User/UserReducer'

export class AlbumFeedBox extends Component{
	constructor(props){
		super(props);

		this.state={albumEntry: false,
						tempTitle: null,
						tempArtist: null,
						tempDate: null,
						tempRating: null,
						tempComment: null,
						isMounted: false
					};

		this.createAlbumForm = this.createAlbumForm.bind(this);
		this.submitNewAlbum = this.submitNewAlbum.bind(this);
		this.cancelEntry = this.cancelEntry.bind(this);

	}

	componentDidMount(){
		this.setState({isMounted: true});
		for (var i = 0; i < this.props.user[0].albums.length; i++){
			this.props.dispatch(getAlbumArtRequest(this.props.user[0].albums[i].title));
		}
	}

	createAlbumForm(){
		this.setState({albumEntry: true});
	}

	submitNewAlbum(){
		this.setState({albumEntry: false});
		this.props.dispatch(addAlbumRequest(this.props.user[0].email, { title: this.state.tempTitle, artist: this.state.tempArtist, date: this.state.tempDate, rating: this.state.tempRating, comment: this.state.tempComment}));
		this.props.dispatch(getAlbumArtRequest(this.state.tempTitle));

	}

	cancelEntry(){
		this.setState({albumEntry: false});
	}

	render(){

		var view;
		var albums;
		if(this.state.isMounted)
			albums = this.props.user[0].albums.map((item,i) => <Album key={i} title={item.title} artist={item.artist} date={item.date} rating={item.rating} comment={item.comment}/>);
		else
			albums = <div></div>;
		
		if(this.state.albumEntry)
			view = <BlankAlbum submitNewAlbum={this.submitNewAlbum} cancelEntry={this.cancelEntry} 
					titleRef = {el => {this.setState({tempTitle: el.target.value}); }} 
					artistRef = {el => {this.setState({tempArtist: el.target.value}); }} 
					dateRef = {el => {this.setState({tempDate: el.target.value}); }} 
					ratingRef = {el => {this.setState({tempRating: el.target.value}); }}
					commentRef = {el => {this.setState({tempComment: el.target.value}); }} />;
		else
			view =
			<div>
				<div className="albums">
					{albums}
				</div>
				<div className={styles.marginTop}>
					<div className="text-center">
						<button type="button" className="btn btn-default" onClick={this.createAlbumForm}>Add New Album</button>
					</div>
				</div>
			</div>;

		return (
			<div className = "albumFeed">
			<h2 className="text-center">{this.state.albumEntry ? "Add New Album" : "Latest Albums"}</h2>
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

export default connect(mapStateToProps)(AlbumFeedBox);