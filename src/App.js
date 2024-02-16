import React from 'react'
import "./App.css"
import Header from './components/common/header/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div>

          <Switch>
            {/* <Route path="/" component={Homepages} /> */}
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App