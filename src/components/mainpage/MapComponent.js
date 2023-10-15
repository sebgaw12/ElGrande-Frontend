import React, {useState} from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import {Map} from "react-map-gl"

const MapComponent = () => {

    const {REACT_APP_MAP_API_KEY, REACT_APP_MAP_STYLE} = process.env

    const [viewPort, setViewPort] = useState({
        // coordinates of Warsaw
        latitude: 52.237049,
        longitude: 21.017532,
        zoom: 10
    })

    return (
        <div style={{width:"100vw", height:"90vh"}}>
            <Map
                {...viewPort}
                mapboxAccessToken={REACT_APP_MAP_API_KEY}
                width="100%"
                height="100%"
                transitionDuration="200"
                mapStyle={REACT_APP_MAP_STYLE}
            />
        </div>
    )
}

export default MapComponent
