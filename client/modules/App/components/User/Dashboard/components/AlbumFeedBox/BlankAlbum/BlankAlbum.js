import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

export class BlankAlbum extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "blankAlbum">
				<form>
					<div className = "form-group">
						<label htmlFor="email-form">Album Title</label>
	    				<input type="email" className="form-control" id="email-form" placeholder="Enter Album Title"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Artist</label>
	    				<input type="email" className="form-control" id="password-form" placeholder="Enter Artist Name"></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Release Date</label>
	    				<input type="email" className="form-control" id="password-confirm" placeholder="Enter Release Date"></input>
					</div>
					<div class="form-group">
					    <label htmlFor="ratingForm">Rating</label>
					    <select class="form-control" id="ratingForm">
					      <option>5</option>
					      <option>4</option>
					      <option>3</option>
					      <option>2</option>
					      <option>1</option>
					    </select>
					</div>
					<div class="form-group">
					    <textarea class="form-control" id="Comments" placeholder="Comments"></textarea>
					 </div>
				</form>
				<div className="text-center">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-default" onClick={this.props.submitNewAlbum}>Submit Album</button>
						<button type="button" className="btn btn-secondary" onClick={this.props.submitNewAlbum}>Cancel</button>
					</div>
				</div>

			</div>
		)
	}
}

export default BlankAlbum;