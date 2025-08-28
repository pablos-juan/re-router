import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'About',
    description: 'Hola en español'
  },
  en: {
    title: 'About, pero en español',
    description: 'Hi in english'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function WhyPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>Ir a Home</Link>
    </>
  )
}
