import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        name: "",
        location: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to that data; put it into state
        LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
                name: location.name,
                location: location.location,
                loadingStatus: false
            });
        });
    }

    handleDelete = () => {
        //invoke the delete function in LocationManger and re-direct to the location list.
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./room-24px (1).svg')} alt="Location" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Location: {this.state.location}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
          </div>
        </div>
      );
    }
}

export default LocationDetail;