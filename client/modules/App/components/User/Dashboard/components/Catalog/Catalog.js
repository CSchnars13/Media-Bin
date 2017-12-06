import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import styles from './Catalog.css';
import AlbumPanel from './AlbumPanel/AlbumPanel'

import {getUsers} from '../../../../../../User/UserReducer'


export class Catalog extends Component{
	constructor(props){
		super(props);

		this.state={sortingMethod: "dateLogged"};

	}

	determineSortingMethod = (method) => {
		this.setState({sortingMethod: method});
	}

	sortArray = (array) => {
		var sortedArray;
			if(this.state.sortingMethod === "dateLogged"){
				sortedArray = array.sort(function(a,b){
	  			return new Date(b.dateLogged) - new Date(a.dateLogged);
			});
			return sortedArray;
		}
		else if(this.state.sortingMethod === "rating"){
			sortedArray = array.sort(function(a, b) {
			    return parseFloat(b.rating) - parseFloat(a.rating);
			});
			return sortedArray;
		}
		else if(this.state.sortingMethod === "title"){
			sortedArray = array.sort(function(a, b) {
			    return a.title.localeCompare(b.title);
			});
			return sortedArray;
		}
		else
			return array;
	}

	render(){

		var view = [];
		var albumRow;
		var userAlbums = this.props.user[0].albums;
		userAlbums = this.sortArray(userAlbums);
		var numRows = Math.ceil(userAlbums.length/4);

		for (var i = 0; i < numRows; i++){
			var factor = i*4;
			if ((i+1)*4 <= userAlbums.length){
				console.log("in big row");
				albumRow =
				<div>
					 <div className = "row">
						<div className = "col">
							<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} rating={userAlbums[0+factor].rating} dateLogged={new Date(userAlbums[0+factor].dateLogged).toDateString()}/>
						</div>
						<div className = "col">
							<AlbumPanel title={userAlbums[1+factor].title} artist={userAlbums[1+factor].artist} date={userAlbums[1+factor].date} rating={userAlbums[1+factor].rating} dateLogged={new Date(userAlbums[1+factor].dateLogged).toDateString()}/>
						</div>
						<div className = "col">
							<AlbumPanel title={userAlbums[2+factor].title} artist={userAlbums[2+factor].artist} date={userAlbums[2+factor].date} rating={userAlbums[2+factor].rating} dateLogged={new Date(userAlbums[2+factor].dateLogged).toDateString()}/>
						</div>
						<div className = "col">
							<AlbumPanel title={userAlbums[3+factor].title} artist={userAlbums[3+factor].artist} date={userAlbums[3+factor].date} rating={userAlbums[3+factor].rating} dateLogged={new Date(userAlbums[3+factor].dateLogged).toDateString()}/>
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
								<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} rating={userAlbums[0+factor].rating} dateLogged={new Date(userAlbums[0+factor].dateLogged).toDateString()}/>
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
								<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} rating={userAlbums[0+factor].rating} dateLogged={new Date(userAlbums[0+factor].dateLogged).toDateString()}/>						
							</div>
							<div className = "col">
								<AlbumPanel title={userAlbums[1+factor].title} artist={userAlbums[1+factor].artist} date={userAlbums[1+factor].date} rating={userAlbums[1+factor].rating} dateLogged={new Date(userAlbums[1+factor].dateLogged).toDateString()}/>
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
								<AlbumPanel title={userAlbums[0+factor].title} artist={userAlbums[0+factor].artist} date={userAlbums[0+factor].date} rating={userAlbums[0+factor].rating} dateLogged={new Date(userAlbums[0+factor].dateLogged).toDateString()}/>	
							</div>
							<div className = "col">
								<AlbumPanel title={userAlbums[1+factor].title} artist={userAlbums[1+factor].artist} date={userAlbums[1+factor].date} rating={userAlbums[1+factor].rating} dateLogged={new Date(userAlbums[1+factor].dateLogged).toDateString()}/>						
							</div>
							<div className = "col">
								<AlbumPanel title={userAlbums[2+factor].title} artist={userAlbums[2+factor].artist} date={userAlbums[2+factor].date} rating={userAlbums[2+factor].rating} dateLogged={new Date(userAlbums[2+factor].dateLogged).toDateString()}/>
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
			<div className="text-left">
				  <button type="button" className="btn btn-default" onClick={() => this.determineSortingMethod("dateLogged")}>Sort By Date</button>
				  <button type="button" className="btn btn-default" onClick={() => this.determineSortingMethod("rating")}>Sort By Rating</button>
				  <button type="button" className="btn btn-default" onClick={() => this.determineSortingMethod("title")}>Sort By Title</button>
			</div>
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
	   	user: getUsers(state),
	  };
	}

export default connect(mapStateToProps)(Catalog);