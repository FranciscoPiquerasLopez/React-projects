import { useCallback, useState } from 'react'
import { useApi } from '../services/useApi'

export function useApiPhotos() {

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  // Usecallback para memoizar la función retornada y hace por debajo el useMemo
  const getPhotos = useCallback(
    async ({ search }) => {
      try {
        setLoading(true)
        const responseApi = await useApi({ search })
        setPhotos(responseApi)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }, [])

  return { photos, loading, getPhotos }
}