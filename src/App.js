import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ContentWrapper from './components/index';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="container">
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

// Approach 1
// comments are stored flat in redux state // loadComments populates it
// store-connected HOCS for articleDetails component + commentComponent // they get subcomments in selectors by passing article/comment id

// Approach 2
// comments are stored flat in redux state // loadComments populates it
// SelectedArticle passes subtrees to each direct child, and the child to the next child as props

// TODO: adding a comment must update commentsCount / repliesCount
