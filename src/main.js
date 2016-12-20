import React from 'react';
import ReactDOM from 'react-dom';
// import jquery  from 'jquery';
// import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import styles from './style.css';

import HeaderComponent from './header.js';
import ContentComponent from './content.js';
import FooterComponent from './footer.js';


var App = React.createClass({
	render : function(){
		const pageLayout = {
			width: '80%',
			margin: '0 auto',
		};
		return <div style={pageLayout}> <HeaderComponent/><ContentComponent/><FooterComponent/></div>
	}
});

ReactDOM.render(<App></App> , document.getElementById('main'));