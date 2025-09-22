import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <>
      <h1>Rutas dinámicas!</h1>
      <p>
        Parámetros tomados de la URL: <kbd>{routeParams.query}</kbd>
      </p>
    </>
  )
}
