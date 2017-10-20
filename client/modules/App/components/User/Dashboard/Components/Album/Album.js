import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

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
					<div className="col">
						<div className="albumInfo">
							<h3> {this.props.title} </h3>
							<h3> {this.props.artist} </h3>
							<h3> {this.props.date} </h3>
						</div>
					</div>
					<div className="col">
						<p> Picture goes here </p>
					</div>
				</div>
				<div className="text-center">
					<button type="button" class="btn btn-primary">Add New Album</button>
				</div>
			</div>
		)
	}
}

export default AlbumFeedBox;