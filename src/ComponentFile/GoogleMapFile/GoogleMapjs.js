// import React from 'react';

// const GoogleMapjs = () => {
//     return (
//         <div>
//             {/* api key = AIzaSyBk7s85fQP6bb8HzmZw9n8nsBdsXFXps-E */}
//             <h2>this is google map section</h2>
//         </div>
//     );
// };

// export default GoogleMapjs;

import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMapjs() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCcQsPUwLs6D1hjMcDKJS8bPeR9n8yrMYo"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapjs)