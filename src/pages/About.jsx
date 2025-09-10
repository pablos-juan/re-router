import { navigate } from '../Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Página sobre el about.</p>
      <button onClick={() => navigate('/')}>Ir a la Home</button>
    </>
  )
}
