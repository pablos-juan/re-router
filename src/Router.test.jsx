import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Router } from './Router.jsx'
import { getCurrentPath } from './utils.js'
import { Route } from './Route.jsx'
import { Link } from './Link.jsx'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

const HomePage = (ik) => (
  <>
    <h1>Home</h1>
    {ik && <Link to='/about'>About</Link>}
  </>
)
const AboutPage = () => <h1>About</h1>

describe('Router', () => {
  // limpiar la pantalla
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should work', () => {
    render(<Router />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/')
    render(
      <Router>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    )
    console.log(screen.debug())
    expect(screen.getByText('Home')).toBeTruthy()
  })

  it('should navigate using Links', () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route path='/' Component={() => HomePage(true)} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    )

    // click en el link
    screen.getByText('About').click()
    // comprobar que la ruta y el contenido de la página cambió
    expect(screen.getAllByText('About')).toBeTruthy()
  })
})
