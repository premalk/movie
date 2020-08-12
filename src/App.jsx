import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Movies from './Movies.jsx';

const App = () => (
  <BrowserRouter>
      <Link to='/' />
      <Route component={Movies} />
  </BrowserRouter>
);
export default App;
