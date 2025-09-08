import { useState } from 'react'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Página de inicio.</p>
      <a href='/about'>Ir a Sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Página sobre el about.</p>
      <a href='/'>Ir a la Home</a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
