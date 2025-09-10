import { EVENTS } from './consts'

export function navigate (href) {
  // cambia la URL pero no refresca la página
  window.history.pushState({}, '', href)
  // evento para avisar que URL cambio
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}
