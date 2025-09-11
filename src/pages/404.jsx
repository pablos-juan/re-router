import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>No hay nada por aquí...</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro This is Fine quemándose vivo.' />
      </div>
      <Link to='/'>Volver a la Home</Link>
    </>
  )
}
