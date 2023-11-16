import useGeolocation from "../../hooks/useGeolocation"

export default function GeolocationComponent() {

    const options = {
        enableHighAccuracy: true
    }
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
