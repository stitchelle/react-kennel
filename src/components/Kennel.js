import React, { Component } from 'react'
// import AnimalCard from './animal/AnimalCard'
import './Kennel.css'
// import LocationCard from './location/LocationCard'
// import OwnerCard from './owner/OwnerCard'
// import EmployeeCard from './employee/EmployeeCard'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

class Kennel extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Kennel;