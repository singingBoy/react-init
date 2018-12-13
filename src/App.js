import React, { lazy, Suspense, Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Theme from './components/theme/theme';
import Error from './pages/error/Error';
import {Header, Loading, Notify} from './components'
import history from './utils/history';
import reducers from './redux';

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const Work = lazy(() => import('./pages/work/Work'));
const Awesome = lazy(() => import('./pages/awesome/Awesome'));

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default class App extends Component{
  componentWillMount() {
    this.unListener = history.listen((params) => {
      console.log(params);
    })
  }
  componentWillUnmount() {
    this.unListener();
  }
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Theme>
                    <Header />
                    <Error>
                        <Suspense fallback={<Loading/>}>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/blog" component={Blog}/>
                                <Route path="/work" component={Work}/>
                                <Route path="/awesome" component={Awesome}/>
                            </Switch>
                        </Suspense>
                    </Error>
                    <Notify />
                </Theme>
            </Router>
        </Provider>
    );
  }
}
