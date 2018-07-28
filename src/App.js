import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import HomePage from './components/HomePage'
import OneLocation from './components/OneLocation'
import ShowAllItems from './components/ShowAllItems'
import ShowOneItem from './components/ShowOneItem'

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
  getAllLocations = async () => {
    const response = await axios.get('/locations')
    return response.data
  }

  getOneLocation = async (locationId) => {
    const response = await axios.get(`/locations/${locationId}`)
    return response.data
  }

  getAllUnicorns = async () => {
    const response = await axios.get('/unicorns')
    return response.data
  }

  getOneUnicorn = async (unicornId) => {
    const response = await axios.get(`/unicorns/${unicornId}`)
    return response.data
  }

  render() {
    const AllUnicornsComponent = (props) => (
      <ShowAllItems
        itemType='unicorn'
        getAllItems={this.getAllUnicorns}
        {...props} />
    )

    const AllLocationsComponent = (props) => (
      <ShowAllItems
        itemType='location'
        getAllItems={this.getAllLocations}
        {...props} />
    )

    const OneUnicornComponent = (props) => (
      <ShowOneItem
        itemType='unicorn'
        getOneItem={this.getOneUnicorn}
        {...props} />
    )

    const OneLocationComponent = (props) => (
      <ShowOneItem
        itemType='unicorn'
        getOneItem={this.getOneLocation}
        {...props} />
    )


    return (
      <Router>
        <AppWrapper>
          <Header />

          <PageBody>
            <SideBar />

            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/unicorns' component={AllUnicornsComponent} />
              <Route exact path='/unicorns/:id' component={OneUnicornComponent} />
              <Route exact path='/locations/' component={AllLocationsComponent} />
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
