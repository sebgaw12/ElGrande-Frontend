import React, {useMemo, useState} from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import {GeolocateControl, Map, Marker, NavigationControl, Popup, ScaleControl} from "react-map-gl"
import pin from "./pin.png"
import useGeolocation from "./useGeolocation";

const MapComponent = () => {

    const {REACT_APP_MAP_API_KEY, REACT_APP_MAP_STYLE} = process.env
    const {
        loading,
        error,
        data: {latitude, longitude}
    } = useGeolocation({enableHighAccuracy: true})

    console.log(latitude, longitude);

    const [viewPort, setViewPort] = useState({
        // coordinates of Warsaw
        latitude: latitude,
        longitude: longitude,
        zoom: 10
    })

    const [popUpInfo, setPopUpInfo] = useState(null)

    const places = [{
        latitude: 52.248871,
        longitude: 21.013103,
        info: "new information"
    }, {
        latitude: 52.231923,
        longitude: 21.006726,
        info: "new information2"
    }, {
        latitude: 52.239145,
        longitude: 21.046087,
        info: "new information3"
    }, {
        latitude: 52.214225,
        longitude: 21.035417,
        info: "new information4"
    }, {
        latitude: 52.249947,
        longitude: 21.013049,
        info: "new information5"
    }]

    const pins = useMemo(
        () => places.map((place, index) => (
            <Marker
                key={`marker-${index}`}
                longitude={place.longitude}
                latitude={place.latitude}
                anchor="bottom"
                onClick={e => {
                    e.originalEvent.stopPropagation()
                    setPopUpInfo(place)
                }}>
                <img src={pin} alt="pin"/>
            </Marker>
        )), []
    )

    return (
        <div style={{width: "100vw", height: "90vh"}}>
            <Map
                {...viewPort}
                onMove={event => setViewPort(event.viewState)}
                mapboxAccessToken={REACT_APP_MAP_API_KEY}
                width="100%"
                height="100%"
                transitionDuration="200"
                mapStyle={REACT_APP_MAP_STYLE}
            >
                <ScaleControl position="bottom-right" />
                <GeolocateControl position="bottom-right" />
                <NavigationControl position="bottom-right" />

                {pins}

                {popUpInfo && (
                    <Popup
                        anchor="top"
                        longitude={popUpInfo.longitude}
                        latitude={popUpInfo.latitude}
                        onClose={() => setPopUpInfo(null)}>
                        <div>
                            {popUpInfo.info}
                        </div>
                    </Popup>
                )}

            </Map>
        </div>
    )
}

export default MapComponent
