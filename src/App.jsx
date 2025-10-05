import { Router } from './Router'
import { Route } from './Route'
import { lazy, Suspense } from 'react'

import HomePage from './pages/Home'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazySearchPage = lazy(() => import('./pages/Search.jsx'))

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Route path='/' Component={HomePage} />
          <Route path='{/:lang}/about' Component={LazyAboutPage} />
          <Route path='/search{/:query}' Component={LazySearchPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
