import { useSearch } from './hooks/useSeach'
import { Movies } from './hooks/useMovies'
import { useApiPhotos } from './hooks/useApiPhotos'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'
import './App.css'

function App() {

  // Custom hook para verificar el inputSearch
  const { search, setSearch, error } = useSearch()
  const { photos, loading, getPhotos } = useApiPhotos()
  
  const debouncedGetPhotos = useCallback(
    debounce((search) => {
      getPhotos({ search })
    }, 300), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getPhotos({ search })
  }

  // Para ir actualizando el texto
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetPhotos(newSearch)
  }

  return (
    <div className='page'>
      <main>
        <h1>Galería de imágenes</h1>
        <form name='form' className='formulario' onSubmit={handleSubmit}>
          <div className='search'>
            <input type="text" onChange={handleChange} value={search} placeholder='Search photos...' name='inputSearch' />
            <button>Buscar</button>
          </div>
          <div className='error'>
            {
              error && <p>{error}</p>
            }
          </div>
        </form>

        <div>
          {
            loading
              ? <p>Cargando...</p>
              : <Movies responsePhotos={photos} />
          }
        </div>
      </main >
    </div >
  )
}

export default App
