import React from 'react';
import ReactDOM from 'react-dom';

import AddForm from './formToAdd';
import ListToShow from './listToShow';

class ContentRight extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			employees: []
		}
		this.updateList = this.updateList.bind(this);
	}

	updateList(data) {
		this.setState({ 
			employees: this.state.employees.concat([data])
		 })
		 alert("Employee " + data.firstName + " successfully added");
	}

	render () {		
		let content = <ListToShow listData = {this.state.employees} />
		if(this.props.currentView === 'addEmployee') {
			content = <AddForm updateList = {this.updateList}/>
		}
		return (
			<div>	
				{content}
			</div>
		)	
	}
}

export default ContentRight;