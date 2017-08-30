import React from 'react';
import ReactDOM from 'react-dom'
import styles from '../cover.css';

class ContentLeft extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkList: [{
				label: 'View List',
				name: 'viewList',
				css: 'view-list'
			},
			{
				label: 'Add Employee',
				name: 'addEmployee',
				css: 'add-employee'
			}]
		};
	}

	render () {
		var links =  this.state.linkList.map((item, index) => {
			var css = item.css === this.state.currentView ? 'active' : '';
			return <li key = {index} className={css}>
						<a href="#" onClick={() => this.props.updateClick(item.name)} name={item.name}>{item.label}</a>
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