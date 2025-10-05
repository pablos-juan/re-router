import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Página sobre nosotros en español.',
    button: 'Ir a la Home'
  },
  en: {
    title: 'About us',
    description: 'About page in english.',
    button: 'Go to home page'
  }
}

function useI18n (lang) {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const { title, description, button } = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to='/'>{button}</Link>
    </>
  )
}
