import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import AllUnicorns from './components/AllUnicorns'
import OneUnicorn from './components/OneUnicorn'
import AllLocations from './components/AllLocations'
import OneLocation from './components/OneLocation'

import styled from 'styled-components'
import Header from './components/common/Header'
import SideBar from './components/common/SideBar'
import Footer from './components/common/Footer'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const PageBody = styled.div`
  background-color: grey;
  display: flex;
  flex-grow: 2;
  flex-direction: row;
  justify-content: left;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Header />

          <PageBody>
            <SideBar />

            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/unicorns' component={AllUnicorns} />
              <Route exact path='/unicorns/:id' component={OneUnicorn} />
              <Route exact path='/locations/' component={AllLocations} />
              <Route exact path='/locations/:id' component={OneLocation} />

            </Switch>
          </PageBody>
          <Footer />
        </AppWrapper>
      </Router>
    )
  }
}

export default App
