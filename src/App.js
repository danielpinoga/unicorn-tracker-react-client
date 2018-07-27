import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShowAllUnicorns from './components/ShowAllUnicorns'
import OneUnicorn from './components/OneUnicorn';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Unicorn Manager</h1>
          <Switch>
            <Route exact path='/' component={ShowAllUnicorns} />
            <Route exact path='/unicorns' component={ShowAllUnicorns} />
            <Route exact path='/unicorns/:id' component={OneUnicorn} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
