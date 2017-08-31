import React from 'react';
import ReactDOM from 'react-dom';
import './src/style.css';

import HeaderComponent from './components/HeaderComponent/header.js';
import ContentComponent from './components/ContentComponent/content.js';


var App = React.createClass({
	render : function(){
		return <div>
					<HeaderComponent/>
					<ContentComponent/>
				</div>
	}
	
});

ReactDOM.render(<App></App> , document.getElementById('main'));