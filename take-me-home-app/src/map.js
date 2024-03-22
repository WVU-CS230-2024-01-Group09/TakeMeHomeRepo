import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Map extends Component {
    render() {
    return (
    <div className="Map">
        <Map google={this.props.google}
        zoom={10}
        initialCenter={{
        lat: 39.635058,
        lng: -79.954278
        }}/>
    </div>
    );
    }
   }
   
   export default GoogleApiWrapper({
    apiKey:("AIzaSyBnqgu12a6mp8IJM1_8WzKD1tFszpvULHY")
   })(Map);