import React from 'react';
import ReactDOM from 'react-dom';

class FooterComponent extends React.Component{

	constructor (props) {
		super (props);
		this.state = {
			titleText: "Footer Component"
		}
	}

	render () {
		return (
			<div className="footer">
				<div className="inner">
					<p>Cover template for <a href="http://getbootstrap.com">{this.state.titleText}</a>, by <a href="#">Nitin Bhatnagar</a>.</p>
				</div>
			</div>
		)
	}
}

export default FooterComponent;