import React from 'react'
import "./App.css"
import Header from './components/common/header/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepages from './components/common/home/homepage';
import Culture from './components/culture/culture';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Homepages} />
            <Route exact path="/culture" component={Culture} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App