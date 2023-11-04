import useGeolocation from "../../hooks/useGeolocation"

export default function GeolocationComponent() {

    const options = {
        enableHighAccuracy: true
    }
    // todo get higher accuracy or use different hook
    const {
        loading,
        error,
        data: { latitude, longitude },
    } = useGeolocation(options)

    console.log(latitude, longitude);

    return (
        <>
            <div>Loading: {loading.toString()}</div>
            <div>Error: {error?.message}</div>
            <div>
                {latitude} x {longitude}
            </div>
        </>
    )
}
