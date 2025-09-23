import { Router } from './Router'
import { Route } from './Route'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SearchPage from './pages/Search'

function App () {
  return (
    <main>
      <Router>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/search/:query' Component={SearchPage} />
      </Router>
    </main>
  )
}

export default App
