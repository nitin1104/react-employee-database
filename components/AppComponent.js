import React from 'react';
import ReactDOM from 'react-dom';

import cover from './cover.css';
import overrides from './overrides.css'

import Defaults from './defaultComponents';

class App extends React.Component{
	render () {
		return (
			<div className='site-wrapper-inner'>
				<div className='cover-container'>
					<Defaults/>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App></App> , document.getElementById('site-wrapper'));

export default App;