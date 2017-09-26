import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router';
import * as selectors from '../state/reducers/selectors';
import * as actions from '../state/actions/actions';
import ArticlesList from '../components/ArticlesList/index';

export class ArticlesListContainer extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
        currentPage: PropTypes.number,
        articlesPerLoad: PropTypes.number,
        isLoading: PropTypes.bool
    }
    render() {
        const { handleLoadMoreClick } = this;
        const { items, isLoading } = this.props;
        return <ArticlesList items={items} isLoading={isLoading} onLoadMore={handleLoadMoreClick}/>
    }
    componentDidMount() {
        const { currentPage, articlesPerLoad } = this.props;
        this.props.actions.toggleArticlesLoader(true);
        this.props.actions.loadArticles({
            offset: currentPage,
            limit: articlesPerLoad
        });
    }
    handleLoadMoreClick = () => {
        const { currentPage, articlesPerLoad } = this.props;
        this.props.actions.toggleArticlesLoader(true);
        this.props.actions.changeCurrentPage(currentPage + 1);
        this.props.actions.loadArticles({
            offset: (currentPage + 1) * articlesPerLoad,
            limit: articlesPerLoad
        });
    }
}

function mapStateToProps(state, ownProps) {
    return {
        items: selectors.selectLoadedArticles(state),
        currentPage: selectors.selectCurrentPage(state),
        articlesPerLoad: selectors.selectArticlesPerLoad(state),
        isLoading: selectors.selectArticlesLoadingState(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ArticlesListContainer);

