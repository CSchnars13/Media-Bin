import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import styles from './HomeContent.css';
//import Album from './Album';

export class ListBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "ListBox">
			<h4 className="text-center">Featured Lists</h4>
				<div className="navBar">

				</div>
				<div className="featuredPlaylist">
				</div>
			</div>
		)
	}
}

export default ListBox;