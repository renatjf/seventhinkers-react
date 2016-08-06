import React from 'react';
import reactDOM from 'react-dom';
import Greeting from './components/Greeting';

class App {
	static main () {
		reactDOM.render (
			<Greeting/>,
			document.getElementById('app')
			);
	}
}

App.main();
