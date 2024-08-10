import { useEffect, useRef } from "react";
import { useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    const startsWithNumber = /^\d/;

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    // Comprobaciones
    if (search === '') {
      setError('No puede estar vacío')
      return
    }

    if (startsWithNumber.test(search)) {
      setError('No puede empezar por números');
      return
    }

    if (search.length < 3) {
      setError('Tiene que tener mínimo 3 caracteres')
      return
    }

    setError(null)
  }, [search])
  return { search, setSearch, error }
}