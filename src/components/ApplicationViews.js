import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
        }} />

        {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

        It will not handle the following URL because the `(\d+)`
        matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
        */}
        <Route path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews