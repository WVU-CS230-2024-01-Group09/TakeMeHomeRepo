import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MyApp = () => (
  <Wrapper apiKey={"AIzaSyBnqgu12a6mp8IJM1_8WzKD1tFszpvULHY"}>
    <Map />
  </Wrapper>
);

const Map = () => {
  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    if (map) {
    }
  }, [map]);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Status>
        {({ status }) => (
          <div>
            {status === Status.LOADING && <div>Loading...</div>}
            {status === Status.FAILURE && <div>Error...</div>}
            {status === Status.SUCCESS && (
              <div
                ref={(ref) => {
                  if (ref) {
                    setMap(
                      new window.google.maps.Map(ref, {
                        center: { lat: 39.635058, lng: -79.954278 },
                        zoom: 8,
                      })
                    );
                  }
                }}
              />
            )}
          </div>
        )}
      </Status>
    </div>
  );
};

export default MyApp;

// import React, { Component } from "react";
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// import { Wrapper } from "@googlemaps/react-wrapper";

// /*class GoogleMap extends Component {
//     render() {
//     return (
//     <div className="Map">
//         <Map google={this.props.google}
//         zoom={10}
//         initialCenter={{
//         lat: 39.635058,
//         lng: -79.954278
//         }}/>
//     </div>
//     );
//     }
//    } 
   
//    export default GoogleApiWrapper({
//     apiKey:("AIzaSyBnqgu12a6mp8IJM1_8WzKD1tFszpvULHY")
//    })(GoogleMap); */

//    let map;

// // async function initMap() {
// //   const { Map } = await google.maps.importLibrary("maps");

// //   map = new Map(document.getElementById("map"), {
// //     center: { lat: 39.635058, lng: -79.954278 },
// //     zoom: 8,
// //   });
// // }

// const MyApp = () => (
//   <Wrapper apiKey={"AIzaSyBnqgu12a6mp8IJM1_8WzKD1tFszpvULHY"}>
//     <map />
//   </Wrapper>
// );

// // initMap(); 