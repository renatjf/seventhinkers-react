import React from 'react';
import reactDOM from 'react-dom';
import Meta from './components/Meta';

class App {
	static main () {
		reactDOM.render (
			<Meta/>,
			document.getElementById('meta')
			);
	}
}

App.main();
