import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';

import Movie from './components/movie/movie';

export default(
<Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="movie" component={Movie} />
</Route>
);