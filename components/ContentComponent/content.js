import React from 'react';
import ReactDOM from 'react-dom';

import ContentLeft from './contentLeft.js';
import ContentRight from './contentRight.js';

class ContentComponent extends React.Component {
	constructor () {
		super ()
		this.state = {
			showFrom :false
		}
		this.toggleShowForm = this.toggleShowForm.bind(this)
	}
	toggleShowForm () {
		this.setState ({showFrom :!this.state.showFrom}) 
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className='col-sm-3 col-md-2 sidebar'>
						<ContentLeft updateClick = {this.toggleShowForm}/>
					</div>
					<div className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
						<ContentRight showFrom = {this.state.showFrom}/>
					</div>
				</div>
			</div>
		)
	}
}

export default ContentComponent;