import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ArticlesList from './containers/ArticlesList';
import SelectedArticle from './containers/SelectedArticle';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="container">
					<ArticlesList />
					<Switch>
						<Route path="/articles" component={SelectedArticle} />
						<Route component={() => <Redirect to="/articles" />} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
