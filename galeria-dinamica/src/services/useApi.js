const API_KEY = '14089985-60f84f6b8a00540e35bff9dc1'

export async function useApi({ search }) {
    const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}`)
    const json = await response.json()

    const photos = json.hits

    return photos?.map(photo => ({
        id: photo.id,
        image: photo.webformatURL
    }))
}