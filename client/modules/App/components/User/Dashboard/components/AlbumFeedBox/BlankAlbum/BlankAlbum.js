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
	    				<input type="text" className="form-control" id="email-form" placeholder="Enter Album Title" onChange={this.props.titleRef}></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Artist</label>
	    				<input type="text" className="form-control" id="password-form" placeholder="Enter Artist Name" onChange={this.props.artistRef}></input>
					</div>
					<div className = "form-group">
						<label htmlFor="password-form">Release Date</label>
	    				<input type="text" className="form-control" id="password-confirm" placeholder="Enter Release Date" onChange={this.props.dateRef}></input>
					</div>
					<div className="form-group">
					    <label htmlFor="ratingForm">Rating</label>
					    <select className="form-control" id="ratingForm" onChange={this.props.ratingRef}>
					      <option>5</option>
					      <option>4</option>
					      <option>3</option>
					      <option>2</option>
					      <option>1</option>
					    </select>
					</div>
					<div className="form-group">
					    <textarea className="form-control" id="Comments" placeholder="Comments" onChange={this.props.commentRef}></textarea>
					 </div>
				</form>
				<div className="text-center">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-default" onClick={this.props.submitNewAlbum}>Submit Album</button>
						<button type="button" className="btn btn-secondary" onClick={this.props.cancelEntry}>Cancel</button>
					</div>
				</div>

			</div>
		)
	}
}

export default BlankAlbum;