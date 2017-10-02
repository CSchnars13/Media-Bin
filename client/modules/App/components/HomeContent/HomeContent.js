import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './LoginBox.css';
import LoginBox from './Content/LoginBox';
import LoginBox from './Content/InfoBox';

export class HomeContent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "container-fluid">
				<div className="row">
					<div className="col">
						<LoginBox />
					</div>
					<div className="col">
						<InfoBox />
					</div>
				</div>	
			</div>
		)
	}
}

export default HomeContent;