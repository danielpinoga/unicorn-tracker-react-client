import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShowAllUnicorns from './components/ShowAllUnicorns'
import OneUnicorn from './components/OneUnicorn'
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
              <Route exact path='/' component={ShowAllUnicorns} />
              <Route exact path='/unicorns' component={ShowAllUnicorns} />
              <Route exact path='/unicorns/:id' component={OneUnicorn} />
            </Switch>
          </PageBody>
          <Footer />
        </AppWrapper>
      </Router>
    )
  }
}

export default App
