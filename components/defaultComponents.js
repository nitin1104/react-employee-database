import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComponent from './HeaderComponent/header';
import ContentComponent from './ContentComponent/content';
import FooterComponent from './FooterComponent/footer';

export default class Defaults extends React.Component{
	render () {
		return (
			<div>
				<HeaderComponent/>
				<ContentComponent/>
				<FooterComponent/>
			</div>
		)
	}
}