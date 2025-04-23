
function ShowCoordinates({coordinates}) {
    return (
        <div>

            LatitudeMin: {coordinates.LatitudeMin}, 
            LatitudeMax: {coordinates.LatitudeMax}, 
            LongitudeMin: {coordinates.LongitudeMin}, 
            LongitudeMax: {coordinates.LongitudeMax}

        </div>
    )
}

export default ShowCoordinates