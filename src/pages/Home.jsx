import { navigate } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Página de inicio.</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  )
}
