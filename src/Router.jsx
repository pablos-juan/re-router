import { EVENTS } from './consts'
import { useState, useEffect } from 'react'
import { match } from 'path-to-regexp'
import Page404 from './pages/404'

export function Router ({ routes = [] }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParamas = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // recibe un patrón de ruta y retorna una función
    const matcherUrl = match(path, { decode: decodeURIComponent })
    // esta función toma un ruta real y si coincide con el patrón retorna un objeto con los parámetros extraídos, si noy coincidencia retorna false
    const matched = matcherUrl(currentPath)

    if (!matched) return false

    routeParamas = matched.params
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParamas} />
    : <Page404 />
}
