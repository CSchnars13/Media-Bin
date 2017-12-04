import React, { Component} from 'react';
import { connect } from 'react-redux';

import styles from './Album.css';
import {getAllArt} from '../../../../../../../User/ArtReducer'

const loadingPlaceholder = require('./loading.png');

export class Album extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var albumObject = this.props.art.filter((art) => art.title === this.props.title)[0];

		return (
			<div className = {styles.album}>
				<div className="row">
					<div className="col-8">
						<div className="albumInfo">
							<h4> {this.props.title} </h4>
							<h5> {this.props.artist} </h5>
							<h5> {this.props.date} </h5>
							<br />
							<br />
							<h6> Rating: {this.props.rating} </h6>
							<br />
							<h6 className={styles.comment}> {this.props.comment} </h6>
						</div>
					</div>
					<div className="col-4 align-self-center">
						<img className="img-fluid" height={albumObject ? albumObject.medArt.height : "300"} 
						width={albumObject ? albumObject.medArt.width : "300"}
						 src={albumObject ? albumObject.medArt.url : loadingPlaceholder} />
					</div>
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

export default connect(mapStateToProps)(Album);