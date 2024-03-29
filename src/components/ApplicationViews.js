import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'

import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'

import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'


import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'


import AnimalEditForm from './animal/AnimalEditForm'
import LocationEditForm from './location/LocationEditForm'

import EmployeeEditForm from './employee/EmployeeEditForm'

import EmployeeWithAnimals from './employee/EmployeeWithAnimals'




class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/*updated route: `/animals`*/}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/animals/:animalId(\d+)" render={(props) => {
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
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />



        <Route exact path="/locations" render={(props) => {
          if (this.props.user) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />

        <Route exact path="/employees" render={(props) => {
            return <EmployeeList {...props} />
          }
        } />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route
          path="/employees/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />

        <Route exact path="/owners" render={(props) => {
            return <OwnerList {...props} />
          }
        } />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews