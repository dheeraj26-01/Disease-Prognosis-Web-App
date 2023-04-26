// import React, { useEffect, useState } from "react";

// function GoogleMap() {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     if (!window.google) {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.AIzaSyA9xvF5Bwoje9eQolevrzG28Fqegbd_Yik}&libraries=places`;
//       script.onload = initMap;
//       document.head.appendChild(script);
//     } else {
//       initMap();
//     }
//   }, []);

//   function initMap() {
//     const google = window.google;

//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 37.7749, lng: -122.4194 },
//       zoom: 13,
//     });

//     const infoWindow = new google.maps.InfoWindow();
//     const service = new google.maps.places.PlacesService(map);

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const location = new google.maps.LatLng(latitude, longitude);

//           const request = {
//             location,
//             radius: 5000,
//             type: ["hospital"],
//           };

//           service.nearbySearch(request, (results, status) => {
//             if (status === google.maps.places.PlacesServiceStatus.OK) {
//               for (let i = 0; i < results.length; i++) {
//                 createMarker(results[i]);
//               }
//             }
//           });

//           map.setCenter(location);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       handleLocationError(false, infoWindow, map.getCenter());
//     }

//     function createMarker(place) {
//       const marker = new google.maps.Marker({
//         map,
//         position: place.geometry.location,
//       });

//       google.maps.event.addListener(marker, "click", () => {
//         infoWindow.setContent(place.name);
//         infoWindow.open(map, marker);
//       });
//     }

//     function handleLocationError(browserHasGeolocation, infoWindow, location) {
//       infoWindow.setPosition(location);
//       infoWindow.setContent(
//         browserHasGeolocation
//           ? "Error: The Geolocation service failed."
//           : "Error: Your browser doesn't support geolocation."
//       );
//       infoWindow.open(map);
//     }

//     setMap(map);
//   }

//   return <div id="map" style={{ height: "500px" }}></div>;
// }

// export default GoogleMap;