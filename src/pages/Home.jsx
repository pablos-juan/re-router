import { Link } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Página de inicio.</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}
