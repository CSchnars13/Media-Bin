import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import styles from './HomeContent.css';
import LoginBox from './Content/LoginBox';
import InfoBox from './Content/InfoBox';

export class HomeContent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "container-fluid">
				<div className = {styles.content}>
					<div className="row">
						<div className="col">
							<InfoBox />
						</div>
						<div className={styles.divider}></div>
						<div className="col">
							<LoginBox />
						</div>
					</div>
				</div>	
			</div>
		)
	}
}

export default HomeContent;