import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import * as Config from './contants/Config';
import Menu from './components/Menu/Menu';
import routes from './routes';
import './../css/app.css';
import appReducers from './reducers/reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

class App extends Component{
    render() {
        return (
            <Fragment>
                    <Router>
                        {/* Menu */}
                        <Menu />
                        {/* Content Page */}
                        <div className="container">
                            { this.showContentMenu(routes) }
                        </div>
                    </Router>
            </Fragment>
        )
    }
    showContentMenu = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return (
                    <Route key={ index } path={ route.path } exact={ route.exact } component={ route.main } />
                )
            })
        }
        return <Switch>{ result }</Switch>
    }
}

export default App;

const store = createStore(
    appReducers,
    window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk))
)
if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>
        , 
        
    document.getElementById('app'));
}
