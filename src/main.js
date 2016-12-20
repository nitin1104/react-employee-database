var react = require('react');
var reactDom = require('react-dom');
require('./style.css');

var App = react.createClass({
	render : function(){
		var name = "Nitin";
		return <div> Hi {name}! This is my first component!</div>
	}
});

reactDOM.render(<App></App> , document.getElementById('main'));