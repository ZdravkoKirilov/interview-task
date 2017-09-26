import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectedArticle from '../components/SelectedArticle/index';
import * as actions from '../state/actions/actions';
import * as selectors from '../state/reducers/selectors';

export class SelectedArticlesContainer extends Component {
    static propTypes = {
        article: PropTypes.object
    };
    render() {
        const { article } = this.props;
        if (article) {
			return (<SelectedArticle {...article}/>)
        } else {
            return null;
        }
    }
    componentWillReceiveProps({match}) {
        const { article } = this.props;
        if (article && Number(match.params.id) !== article.id) {

        }
    }
    componentDidMount() {
        const { match } = this.props;
        if (match.params.id) {

        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        article: selectors.selectLoadedArticleById(state, ownProps.match.params.id)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticlesContainer);