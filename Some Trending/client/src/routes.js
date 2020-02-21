import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Home from './components/Home';

import Movie from './components/movie/movie';

export default(
<Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="test1" component={Test1} />
    <Route path="test2" component={Test2} />
    <Route path="movie" component={Movie} />
</Route>
);