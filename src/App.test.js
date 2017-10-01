import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './state/createStore';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SelectedArticle from './containers/SelectedArticle';
import ArticlesList from './containers/ArticlesList';
import ArticleListItem from './components/ArticlesList/ArticleListItem';

configure({adapter: new Adapter()});
let store, elem;

beforeEach(() => {
    store = createStore();
});

it('should render left panel', () => {
    elem = mount(<Provider store={store}><App /></Provider>);
    expect(elem.find(ArticlesList).exists()).toBe(true);
});
it('should render right panel', () => {
    elem = mount(<Provider store={store}><App /></Provider>);
    expect(elem.find(SelectedArticle).exists()).toBe(true);
});
