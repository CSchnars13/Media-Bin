import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './AlbumFeedBox.css';
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
						],
					
						tempTitle: null,
						tempArtist: null,
						tempDate: null

					};

		this.createAlbumForm = this.createAlbumForm.bind(this);
		this.submitNewAlbum = this.submitNewAlbum.bind(this);
		this.cancelEntry = this.cancelEntry.bind(this);

	}

	createAlbumForm(){
		this.setState({albumEntry: true});
	}

	submitNewAlbum(){
		this.setState({albumEntry: false, albums: [...this.state.albums, {title: this.state.tempTitle, artist: this.state.tempArtist, date: this.state.tempDate}]});

	}

	cancelEntry(){
		this.setState({albumEntry: false});
	}

	render(){

		var view;
		var albums = this.state.albums.map((item,i) => <Album key={i} title={item.title} artist={item.artist} date={item.date} />);

		if(this.state.albumEntry)
			view = <BlankAlbum submitNewAlbum={this.submitNewAlbum} cancelEntry={this.cancelEntry} titleRef = {el => {this.setState({tempTitle: el.target.value}); }} 
					artistRef = {el => {this.setState({tempArtist: el.target.value}); }} 
					dateRef = {el => {this.setState({tempDate: el.target.value}); }} />;
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
			<h4 className="text-center">{this.state.albumEntry ? "Add New Album" : "Latest Albums"}</h4>
				{view}
			</div>
		)
	}
}

export default AlbumFeedBox;