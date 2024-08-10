export function HasMovies({ photos }) {
    return (
        <ul className='films'>
            {
                photos.map(image => (
                    <li key={image.id}>
                        <img className='film' src={image.image} alt="Photo taked from API" />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMovies({ }) {
    return (
        <p>No se encontraron fotos para esta búsqueda</p>
    )
}

export function Movies({ responsePhotos }) {

    const hasPhotos = responsePhotos?.length > 0

    return (
        hasPhotos
            ? <HasMovies photos={responsePhotos} />
            : <NoMovies />
    )
}