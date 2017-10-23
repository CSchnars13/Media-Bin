import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import MoP from './img/MoP.jpg';

//import styles from './HomeContent.css';
//import Album from './Album';

export class Album extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "album">
				<div className="row">
					<div className="col-8">
						<div className="albumInfo">
							<h6> {this.props.title} </h6>
							<h6> {this.props.artist} </h6>
							<h6> {this.props.date} </h6>
						</div>
					</div>
					<div className="col-4 align-self-center">
						<img className="img-fluid" src={MoP}></img>
					</div>
				</div>
			</div>
		)
	}
}

export default Album;