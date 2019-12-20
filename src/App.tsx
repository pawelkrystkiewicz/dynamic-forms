import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './assets/form-shared-styles.css';
import Navigation from './components/Navigation/Navigation.View';
import routes from './routes';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<p>Dynamic forms example</p>
					<Navigation />
				</header>
				<Switch>
					{routes.map((element) => <Route exact path={element!.path} children={element!.component} />)}
					<Redirect from="/" to="/login" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
