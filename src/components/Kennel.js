import React, { Component } from 'react'
import AnimalCard from './animal/AnimalCard'
import './Kennel.css'
import LocationCard from './location/LocationCard'
import OwnerCard from './owner/OwnerCard'
import EmployeeCard from './employee/EmployeeCard'
import NavBar from './nav/NavBar'

class Kennel extends Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default Kennel;