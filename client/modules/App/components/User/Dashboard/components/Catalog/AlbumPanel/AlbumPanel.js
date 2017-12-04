import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {getAllArt} from '../../../../../../../User/ArtReducer'
import {getAlbumArtRequest} from '../../../../../../../User/ArtActions'

//import styles from './Catalog.css';


//import {getUsers} from '../../../../User/UserReducer'\

const loadingPlaceholder = require('./img/loading.png');

export class AlbumPanel extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var artObject = this.props.art.filter((art) => art.title === this.props.title)[0];

		if (artObject)
			console.log(artObject);

		return (
			<div className = "AlbumPanel">
				<img className = "img-fluid" height={artObject ? artObject.lgArt.height : '640'} 
				width={artObject ? artObject.lgArt.width : '640'} 
				src={artObject ? artObject.lgArt.url || artObject.mdArt.url : loadingPlaceholder} />


				<div className = "AlbumInfo">
					<h4>{this.props.title}</h4>
					<h5>{this.props.artist}</h5>
					<h5>{this.props.date}</h5>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	   	art: getAllArt(state),
	  };
	}

export default connect(mapStateToProps)(AlbumPanel);