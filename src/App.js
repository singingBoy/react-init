import React, { lazy, Suspense, Fragment, Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Error from './pages/error/Error';
import history from './utils/history';
import {Header, Loading} from './components'

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const Work = lazy(() => import('./pages/work/Work'));
const Awesome = lazy(() => import('./pages/awesome/Awesome'));

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
        <Router>
          <Fragment>
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
          </Fragment>
        </Router>
    );
  }
}