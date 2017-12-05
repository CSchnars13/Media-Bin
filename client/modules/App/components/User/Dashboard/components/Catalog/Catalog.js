import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';
import AlbumPanel from './AlbumPanel/AlbumPanel'

import {getUsers} from '../../../../../../User/UserReducer'


export class Catalog extends Component{
	constructor(props){
		super(props);
	}

	render(){

		var view = [];
		var albumRow;
		var userAlbums = this.props.user[0].albums;
		var numRows = Math.ceil(userAlbums.length/4);

		for (var i = 0; i < numRows; i++){
			var factor = i*4;
			if ((i+1)*4 < userAlbums.length){
				console.log("in big row");
				albumRow =
				<div>
					 <div className = "row">
						<div className = "col">
							<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} />
						</div>
						<div className = "col">
							<AlbumPanel title={userAlbums[1+factor].title} artist={userAlbums[1+factor].artist} date={userAlbums[1+factor].date} />
						</div>
						<div className = "col">
							<AlbumPanel title={userAlbums[2+factor].title} artist={userAlbums[2+factor].artist} date={userAlbums[2+factor].date} />
						</div>
						<div className = "col">
							<AlbumPanel title={userAlbums[3+factor].title} artist={userAlbums[3+factor].artist} date={userAlbums[3+factor].date} />
						</div>										
					</div>
				</div>;
				view.push(albumRow);
			}
			else{
				var numAlbums = userAlbums.length-(i*4);
				console.log("userAlbums: ", userAlbums.length);
				console.log("numAlbums: ", numAlbums);
				if (numAlbums===1){
					albumRow =
					<div>
						 <div className = "row">
							<div className = "col">
								<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} />
							</div>
							<div className = "col">
							</div>
							<div className = "col">
							</div>
							<div className = "col">
							</div>										
						</div>
					</div>;

					view.push(albumRow);
				}

				else if (numAlbums===2){
					albumRow =
					<div>
						 <div className = "row">
							<div className = "col">
							</div>
							<div className = "col">
								<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} />						
							</div>
							<div className = "col">
								<AlbumPanel title={userAlbums[1+factor].title} artist={userAlbums[1+factor].artist} date={userAlbums[1+factor].date} />
							</div>
							<div className = "col">
							</div>										
						</div>
					</div>;

					view.push(albumRow);
				}
				else{
					albumRow=
					<div>
						 <div className = "row">
							<div className = "col">
								<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} />	
							</div>
							<div className = "col">
								<AlbumPanel title={userAlbums[1+factor].title} artist={userAlbums[1+factor].artist} date={userAlbums[1+factor].date} />						
							</div>
							<div className = "col">
								<AlbumPanel title={userAlbums[2+factor].title} artist={userAlbums[2+factor].artist} date={userAlbums[2+factor].date} />
							</div>
							<div className = "col">
							</div>										
						</div>
					</div>;

					view.push(albumRow);
				}
			}
		}



		return (
			<div className = "Catalog">
				<div>
				{view}
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

export default connect(mapStateToProps)(Catalog);