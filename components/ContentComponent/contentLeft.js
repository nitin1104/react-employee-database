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
			}, {
				label: 'Add Employee',
				name: 'addEmployee',
			}],
			activeLink: 'viewList'
		};

		this.navClickHandler = this.navClickHandler.bind(this);
	}

	navClickHandler(linkName) {
		this.setState({activeLink: linkName});
		this.props.updateClick(linkName);
	}

	render () {
		var links =  this.state.linkList.map((item, index) => {
			var css = item.name === this.state.activeLink ? 'active' : '';
			return <li key = {index} className={css}>
						<a href="#" onClick={() => this.navClickHandler(item.name)} name={item.name}>{item.label}</a>
					</li>;
		});

		return (
			<div>
				<ul className="nav nav-sidebar">
					{links}
				</ul>
			</div>
		);
	}
}

export default ContentLeft;