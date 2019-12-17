import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/View';
import routes from './routes';


function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<p>Dynamic forms example</p>
					<Navigation />
				</header>
				<Switch>{routes.map((route) => <Route path={route.path} children={route.component} />)}</Switch>
			</div>
		</Router>
	);
}

export default App;
