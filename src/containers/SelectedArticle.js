import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectedArticle from '../components/SelectedArticle/index';
import * as actions from '../state/actions/actions';

export class SelectedArticlesContainer extends Component {
    render() {
        return (
            <SelectedArticle />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticlesContainer);