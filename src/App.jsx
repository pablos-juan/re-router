import { Router } from './Router'

import HomePage from './pages/Home'
import AboutPage from './pages/About'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
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
