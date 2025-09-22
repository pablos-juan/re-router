import { Router } from './Router'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SearchPage from './pages/Search'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
