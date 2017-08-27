import React from 'react';
import ReactDOM from 'react-dom'
import styles from '../cover.css';

class ContentLeft extends React.Component {
	constructor(props) {
		super(props);
		this.state = {activeLinkName: this.state};
		this.updateClick = this.updateClick.bind(this);
	}
	
	updateClick(index, name) {
		this.state.crruntView = name;
		 if (name === 'addEmployee') {
			 this.setState({currentView:"addEmployee"})
		 } else if (name === 'viewList') {
			this.setState({currentView:"viewList"})
		 }
	}
	render () {
		this.linkList = [{
			label: 'View List',
			name: 'viewList',
			css: 'view-list'
		},
		{
			label: 'Add Employee',
			name: 'addEmployee',
			css: 'add-employee'
		}];
		var links =  this.linkList.map((item, index) => {
			var css = item.css === this.state.activeLinkName ? 'active' : '';
			return <li key = {index} className={css}>
						<a href="#" onClick={() => this.updateClick(index, item.name)} name={item.name}>{item.label}</a>
					</li>;
		});

		return (
			<div>
				<ul className="nav nav-sidebar">
					{links}
				</ul>
			</div>
		)
	}
}

export default ContentLeft;