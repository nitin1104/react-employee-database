import React from 'react';
import ReactDOM from 'react-dom';

import ContentLeft from './contentLeft.js';
import ContentRight from './contentRight.js';

class ContentComponent extends React.Component {
	constructor () {
		super ()
		this.state = {
			currentView: "",
		}
		this.updateClick = this.updateClick.bind(this);
	}
	updateClick(name) {
		if (name === 'addEmployee') {
			this.setState({currentView:"addEmployee"})
		} else if (name === 'viewList') {
			this.setState({currentView:"viewList"})
		}
	}
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className='col-sm-3 col-md-2 sidebar'>
						<ContentLeft updateClick = {this.updateClick} currentView = {this.state.currentView} />
					</div>
					<div className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
						<ContentRight currentView = {this.state.currentView}/>
					</div>
				</div>
			</div>
		)
	}
}

export default ContentComponent;