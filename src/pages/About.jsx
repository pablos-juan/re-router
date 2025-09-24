import { Link } from '../Link'

console.log('Cargando About...')

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Página sobre el about.</p>
      <Link to='/'>Ir a la Home</Link>
    </>
  )
}
