import React, { Component} from 'react';

import styles from './Album.css';

const art = require('./img/MasterofPuppets.png');
const art2 = require('./img/Currents.png');
export class Album extends Component{
	constructor(props){
		super(props);
		var name = this.props.title.replace(/\s/g,'');
		console.log(name);

	}

	

	render(){
		var album;
		if (this.props.title === "Master of Puppets")
			album = art;
		else
			album = art2;
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
						<img className="img-fluid" height="250" width="250" src={album} />
					</div>
				</div>
			</div>
		)
	}
}

export default Album;