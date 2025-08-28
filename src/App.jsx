import { lazy, Suspense } from 'react'

import { Router } from './Router'
import { Route } from './Route'

const LazyWhyPage = lazy(() => import('./pages/Why'))
const LazyHomePage = lazy(() => import('./pages/Home'))
const LazySearchPage = lazy(() => import('./pages/Search'))

const appRoutes = [
  {
    path: '/:lang/why',
    Component: LazyWhyPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<pre>Cargando...</pre>}>
        <Router routes={appRoutes}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/why' Component={LazyWhyPage} />
          <Route path='/search/:query' Component={LazySearchPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
