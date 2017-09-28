import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectedArticle from '../components/SelectedArticle/index';
import * as actions from '../state/actions/actions';
import * as selectors from '../state/reducers/selectors';

export class SelectedArticlesContainer extends Component {
	static propTypes = {
		article: PropTypes.object,
		comments: PropTypes.arrayOf(PropTypes.object),
		repliesById: PropTypes.object,
		repliesAsChildList: PropTypes.object
	};

	render() {
		const { article, comments, repliesById, repliesAsChildList } = this.props;
		const { handleRepliesLoading, handleCommentSubmit } = this;
		if (article) {
			return (<SelectedArticle
				{...article}
				comments={comments}
				onCommentSubmit={handleCommentSubmit}
				repliesById={repliesById}
				repliesAsChildList={repliesAsChildList}
				onLoadReplies={handleRepliesLoading} />)
		} else {
			return null;
		}
	}

	componentWillReceiveProps({ match }) {
		const { article } = this.props;
		if (article && Number(match.params.id) !== article.id) {
			this.props.actions.loadComments({ query: { articleId: Number(match.params.id) } });
		}
	}

	componentDidMount() {
		const { match } = this.props;
		if (Number(match.params.id) !== -1) {
			this.props.actions.loadComments({ query: { articleId: Number(match.params.id) } });
		}
	}
	handleCommentSubmit = (text, relations) => {
		this.props.actions.addComment({
			...relations,
			text
		});
	};
	handleRepliesLoading = (payload) => {
		this.props.actions.loadReplies(payload);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		article: selectors.selectLoadedArticleById(state, ownProps.match.params.id),
		comments: selectors.selectComments(
			selectors.selectCommentsById(state),
			selectors.selectCommentsAsChildList(state),
			ownProps.match.params.id),
		repliesById: selectors.selectRepliesById(state),
		repliesAsChildList: selectors.selectRepliesAsChildList(state)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticlesContainer);