import React from 'react';
import ReactDOM from 'react-dom';

import AddForm from './formToAdd';
import ListToShow from './listToShow';

class ContentRight extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			list: this.props.form
		}
	}

	render () {
		let content = <ListToShow/>
		if(this.props.currentView === 'addEmployee') {
			content = <AddForm/>
		}
		return (
			<div>	
				{content}
			</div>
		)	
	}
}

export default ContentRight;