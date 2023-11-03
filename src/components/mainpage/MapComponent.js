import React, {useEffect, useMemo, useState} from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import {GeolocateControl, Map, Marker, NavigationControl, Popup, ScaleControl} from "react-map-gl"
import pin from "./pin.png"
import {useApi} from "../../hooks/useApi";

const MapComponent = () => {

    const {REACT_APP_MAP_API_KEY, REACT_APP_MAP_STYLE} = process.env

    const [viewPort, setViewPort] = useState({
        // coordinates of center of Poland
        latitude: 52.088787,
        longitude: 19.4002665,
        zoom: 6
    })

    const [popUpInfo, setPopUpInfo] = useState(null)
    const [places, setPlaces] = useState([])
    const {get} = useApi()

    useEffect(() => {
        get("api/v1/locations", null)
            .then((resp) => {
                const newPlaces = resp.map((item) =>     ({
                    latitude: item.latitude,
                    longitude: item.longitude,
                    restaurants: [{
                        name: item.restaurants[0].name,
                        description: item.restaurants[0].description,
                        website: item.restaurants[0].website
                    }]
                }))
                setPlaces(newPlaces)
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            })
    }, []);

    const pins = useMemo(() => places.map((place, index) => (
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
        )), [places]
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
                            {popUpInfo.restaurants[0].name}
                        </div>
                    </Popup>
                )}

            </Map>
        </div>
    )
}
// todo clear magic numbers
export default MapComponent
