import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationDetail from './location/LocationDetail'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/*updated route: `/animals`*/}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} />
        }} />
      
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          {/* Pass the animalId to the AnimalDetailComponent*/}
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />

        {/*
        This is a new route to handle a URL with the following pattern:
        http://localhost:3000/animals/1

        It will not handle the following URL because the `(\d+)`
        matches only numbers after the final slash in the URL
        http://localhost:3000/animals/jack
        */}

        {/* Our shiny new route.*/}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />


       
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
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