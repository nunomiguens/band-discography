import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/main.page/main.component';
import SongsPage from './pages/songs.page/songs.component';
import ExpPage from './components/exp';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/songs-preview/' component={SongsPage} />
        <Route exact path='/songs-preview/exp-page' component={ExpPage} />
      </Switch>
    </div>
  );
}

export default App;
