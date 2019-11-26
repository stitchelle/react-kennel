import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
      locationName: "",
      location: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.locationName,
        location: this.state.location
      };

      LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/locatoins"))
    }

    componentDidMount() {
      LocationManager.get(this.props.match.params.locationId)
      .then(location => {
          this.setState({
            locationName: location.name,
            location: location.location,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input type="text" required className="form-control" onChange={this.handleFieldChange} id="locationName" value={this.state.locationName}/>
              <label htmlFor="locationName">Location Name</label>

              <input type="text" required className="form-control" onChange={this.handleFieldChange} id="location" value={this.state.location}/>
              <label htmlFor="location">Location</label>
            </div>
            <div className="alignRight">
              <button type="button" disabled={this.state.loadingStatus} onClick={this.updateExistingLocation}className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default LocationEditForm