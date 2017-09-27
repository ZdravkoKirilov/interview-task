import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectedArticle from '../components/SelectedArticle/index';
import * as actions from '../state/actions/actions';
import * as selectors from '../state/reducers/selectors';

export class SelectedArticlesContainer extends Component {
	static propTypes = {
		article: PropTypes.object,
		comments: PropTypes.arrayOf(PropTypes.object)
	};

	render() {
		const {article, comments} = this.props;
		const {handleRepliesLoading} = this;
		console.log(comments);
		if (article) {
			return (<SelectedArticle {...article} comments={comments || []} onLoadReplies={handleRepliesLoading}/>)
		} else {
			return null;
		}
	}

	componentWillReceiveProps({match}) {
		const {article} = this.props;
		if (article && Number(match.params.id) !== article.id) {
			this.props.actions.loadComments({ query: { articleId: Number(match.params.id) }});
		}
	}

	componentDidMount() {
		const {match} = this.props;
		if (Number(match.params.id) !== -1) {
			this.props.actions.loadComments({ query: { articleId: Number(match.params.id) }});
		}
	}

	handleRepliesLoading = (payload) => {
		this.props.actions.loadComments(payload);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		article: selectors.selectLoadedArticleById(state, ownProps.match.params.id),
		comments: selectors.selectCommentsAsTree(state, ownProps.match.params.id)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticlesContainer);