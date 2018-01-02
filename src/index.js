import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import App from '../src/app';
import {counter} from '../redux/index.redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from '../redux/reducers';
import Auth from './auth';
import Dashboard from './dashboard';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store=createStore(reducers,compose(
    applyMiddleware(thunk)
));

console.log(store.getState());

    ReactDom.render(
        <Provider store={store}>
            <Router>
            {/* Switch只渲染命中的第一个route */}
             <Switch>
                <Route path="/login" exact component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>

                <Redirect to="/dashboard" />   {/* 全部没命中 调到dashboard */}
              </Switch>
            </Router>

        </Provider>,

        document.getElementById('mainContainer')
    );





