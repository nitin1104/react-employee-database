import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import HeaderComponent from '../components/HeaderComponent/header.js';
import ContentComponent from '../components/ContentComponent/content.js';
import FooterComponent from '../components/FooterComponent/footer.js';


var App = React.createClass({
	render : function(){
		return <div>
					<HeaderComponent/>
					<ContentComponent/>
					<FooterComponent/>
				</div>
	}
	
});

ReactDOM.render(<App></App> , document.getElementById('main'));