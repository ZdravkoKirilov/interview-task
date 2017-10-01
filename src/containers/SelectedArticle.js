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
		repliesAsChildList: PropTypes.object,
		isLoadingComments: PropTypes.bool
	};

	render() {
		const { article, comments, isLoadingComments, repliesById, repliesAsChildList } = this.props;
		const { handleRepliesLoading, handleCommentSubmit, handleReplySubmit } = this;
		if (article) {
			return (
				<SelectedArticle
					{...article}
					comments={comments}
					onCommentSubmit={handleCommentSubmit}
					repliesById={repliesById}
					repliesAsChildList={repliesAsChildList}
					onLoadReplies={handleRepliesLoading}
					onReplySubmit={handleReplySubmit}
					isLoadingComments={isLoadingComments}
				/>)
		} else {
			return null;
		}
	}

	componentWillReceiveProps({ match }) {
		const article = this.props.article || {};
		if (Number(match.params.id) !== article.id && Number(match.params.id) > -1) {
			!this.props.isLoadingComments && this.props.actions.showCommentsLoader();
			this.props.actions.loadComments({ query: { articleId: Number(match.params.id) } });
		}
	}
	componentDidMount() {
		const { match } = this.props;
		if (Number(match.params.id) > -1) {
			!this.props.isLoadingComments && this.props.actions.showCommentsLoader();
			this.props.actions.loadComments({ query: { articleId: Number(match.params.id) } });
		}
	}
	handleCommentSubmit = (text, relations) => {
		this.props.actions.showCommentsLoader();
		this.props.actions.addComment({
			...relations,
			text
		});
	};
	handleRepliesLoading = (payload) => {
		this.props.actions.loadReplies(payload);
	}
	handleReplySubmit = (text, relations) => {
		this.props.actions.addReply({
			...relations,
			text
		});
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
		repliesAsChildList: selectors.selectRepliesAsChildList(state),
		isLoadingComments: selectors.selectCommentsLoadingState(state)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticlesContainer);