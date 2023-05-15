/*
import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const GoogleMaps = () => {
    useEffect(() => {
        const loadGoogleMaps = async () => {
            const loader = new Loader({
                apiKey: 'YOUR_API_KEY',
                version: 'weekly',
                // ...additionalOptions
            });

            try {
                if (!window.google || !window.google.maps) {
                    await loader.load();
                }

                const { google } = window;
                const map = new google.maps.Map(document.getElementById('maps'), {
                    center: { lat: 12.9716, lng: 77.5946 },
                    zoom: 12,
                });

                // Initialize Places service
                const service = new window.google.maps.places.PlacesService(map);

                // Use Places service to search for medical clinics and hospitals
                service.nearbySearch(
                    {
                        location: { lat: 0, lng: 0 }, // Update with user's current location
                        radius: 5000, // Specify the radius in meters (e.g., 5000 = 5km)
                        type: ['hospital', 'clinic'], // Specify the types of places to search
                    },
                    (results, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                            // Process the search results
                            for (let i = 0; i < results.length; i++) {
                                createMarker(results[i]);
                            }
                        }
                    }
                );

                const createMarker = (place) => {
                    const marker = new window.google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                    });

                    const infowindow = new window.google.maps.InfoWindow({
                        content: place.name,
                    });

                    marker.addListener('click', () => {
                        infowindow.open(map, marker);
                    });
                };
            } catch (error) {
                console.error('Error loading Google Maps:', error);
            }
        };

        // Load the Google Maps script
        if (window.google && window.google.maps) {
            loadGoogleMaps();
        } else {
            // Load the Google Maps API asynchronously
            window.initMap = loadGoogleMaps;
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }, []);

    return <div id="maps" style={{ height: '100vh' }}></div>;
};

export default GoogleMaps;
*/
