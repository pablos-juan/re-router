import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  const { query } = routeParams

  useEffect(() => {
    document.title = query
      ? `Has buscado ${query}`
      : 'Search page'
  }, [])

  return (
    <>
      <h1>Rutas dinámicas</h1>
      {query && (
        <p>
          <b>
            Parámetro tomado de la URL: <kbd>{query}</kbd>
          </b>
        </p>
      )}
      <p>
        Ahora los parámetros de las rutas dinámicas son opcionales. Antes, si no se agregaba un término de búsqueda en la URL la página no mostraba nada.
        Con este cambio la página sigue funcionando aunque no se proporcione un parámetro.
      </p>
    </>
  )
}
