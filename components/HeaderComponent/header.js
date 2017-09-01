import React from 'react';
import ReactDOM from 'react-dom';

class HeaderComponent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title:"Employee Database"
		}
	}
	render () {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">{this.state.title}</a>
					</div>
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Help</a></li>
					</ul>
					<form className="navbar-form navbar-right">
						<input type="text" className="form-control" placeholder="Search..."/>
					</form>
				</div>
				</div>
			</nav>
		)
	}
	componentWillMount() {
		
	}

	componentDidMount() {
		
	}

	componentWillReceiveProps(newProps) {    
		
	}

	shouldComponentUpdate(newProps, newState) {
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		
	}

	componentDidUpdate(prevProps, prevState) {
		
	}

	componentWillUnmount() {
		
	}

}

export default HeaderComponent;