import { Link } from '../Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Router</h1>
      <p>
        Enrutador inspirado en <strong>React Router</strong>.
        Este proyecto es una aproximación sencilla a algunas de las técnicas utilizadas por los enrutadores más populares para hacer posibles las <strong>Single Page Applications (SPA)</strong>. <br />
        <small />
      </p>

      <p>
        Esta fue la estructura que seguí:
      </p>

      <ul>
        <li>Instalar el linter</li>
        <li>Crear una forma de hacer <strong>MPAs</strong></li>
        <li>Crear una forma de hacer <strong>SPAs</strong></li>
        <li>Navegar entre páginas con el botón de atrás</li>
        <li><Link>Crear <strong>componente Link</strong> para hacerlo declarativo</Link></li>
        <li><Link>Crear <strong>componente Router</strong> para hacerlo más declarativo</Link></li>
        <li>Soportar ruta por defecto (404)</li>
        <li><Link>Soportar rutas con parámetros</Link></li>
        <li><Link>Crear <strong>componente Route</strong> para hacerlo declarativo</Link></li>
        <li><Link>Lazy loading de las rutas</Link></li>
      </ul>

      <small>
        <p>
          La idea de este proyecto surgió a partir de un live de <a target='_blank' href='https://www.youtube.com/@midulive' rel='noreferrer'>@midudev</a>.

          Esta web fué creada por <a href='https://www.linkedin.com/in/pablo-casta%C3%B1o-sanchez-32697b277/'>@Pablo</a>, encuentre el <a href='https://github.com/pablos-juan'>código fuente de este sitio en GitHub</a>.
        </p>
      </small>
    </>
  )
}
