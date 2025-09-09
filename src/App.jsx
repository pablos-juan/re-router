import { useEffect, useState } from 'react'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  // cambia la URL pero no refresca la página
  window.history.pushState({}, '', href)
  // evento para avisar que URL cambio
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Página de inicio.</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Página sobre el about.</p>
      <button onClick={() => navigate('/')}>Ir a la Home</button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
