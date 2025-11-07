import React, { useState } from "react";
import "./LocationDemo.css";

const LocationDemo = () => {
  const [location, setLocation] = useState(null);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        },
        (err) => {
          alert("Location access denied! Please allow permission.");
        }
      );
    } else {
      alert("Geolocation is not supported in your browser.");
    }
  };

  return (
    <div className="location-page">
      <p className="location-btn1" >Click the button below to see your current location:</p>
      <button className="location-btn" onClick={handleGetLocation}>
         ▶  Location  ◀
      </button>

      {location && (
        <div className="map-container">
          <iframe
            title="map"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px", marginTop: "20px" }}
            src={`https://www.google.com/maps?q=${location.lat},${location.lon}&z=15&output=embed`}
            allowFullScreen
          ></iframe>
          <p>
            Latitude: {location.lat} | Longitude: {location.lon}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationDemo;
