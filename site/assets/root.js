import React from 'react';
import ReactDOM from 'react-dom';
import Meta from './components/Meta';

class App {
	static main () {    
		ReactDOM.render (    
      <Meta/>,
      document.body      
			);    
	}
}
App.main();
