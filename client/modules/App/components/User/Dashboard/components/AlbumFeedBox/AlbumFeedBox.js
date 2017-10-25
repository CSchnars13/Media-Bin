import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './HomeContent.css';
import Album from './Album/Album';
import BlankAlbum from './BlankAlbum/BlankAlbum';

export class AlbumFeedBox extends Component{
	constructor(props){
		super(props);

		this.state={albumEntry: false,
					albums: [
						{title: "Master of Puppets",
						artist: "Metallica",
						date: "1983"},
						{title: "Luv is Rage 2",
						artist: "Lil Uzi Vert",
						date: "2017"},						
						{title: "Currents",
						artist: "Tame Impala",
						date: "2015"}	
						]};

		this.createAlbumForm = this.createAlbumForm.bind(this);
		this.submitNewAlbum = this.submitNewAlbum.bind(this);
		this.mapAlbums = this.mapAlbums.bind(this);
	}

	createAlbumForm(){
		this.setState({albumEntry: true});
	}

	submitNewAlbum(){
		var newAlbum = {}; //refs
		this.setState({albumEntry: false, albums: [...this.state.albums, newAlbum]});

	}

	mapAlbums(){
		return(
			this.state.albums.map(function(item,i){
				<Album key={i} title={item.title} artist={item.artist} date={item.date} />
			})
		);
	}


	render(){

		var view;
		var albums = this.mapAlbums;
		console.log(albums);

		if(this.state.albumEntry)
			view = <BlankAlbum submitNewAlbum={this.submitNewAlbum} />;
		else
			view =
			<div>
				<div className="albums">
					{albums}
				</div>
				<div className="text-center">
					<button type="button" className="btn btn-default" onClick={this.createAlbumForm}>Add New Album</button>
				</div>
			</div>;

		return (
			<div className = "albumFeed">
			<h4 className="text-center">{this.state.albumEntry ? "Add New Album" : "Latest Albums"}</h4>
				{view}
			</div>
		)
	}
}

export default AlbumFeedBox;