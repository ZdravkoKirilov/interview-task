import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ContentWrapper from './components/index';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="container-fluid">
					<Switch>
						<Route path="/articles/:id" component={ContentWrapper} />
						<Route exact path="/articles" component={ContentWrapper} />
						<Route component={() => <Redirect to="/articles" />} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;