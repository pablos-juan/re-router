import { EVENTS } from './consts'

export function navigate (href) {
  // cambia la URL pero no refresca la página
  window.history.pushState({}, '', href)
  // evento para avisar que URL cambio
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    // comprobar si es el botón primario, que es el click izquierdo en la mayoría de los casos
    const isMainEvent = event.button === 0
    // comprobar si el evento es modificado, al presionar una tecla ctrl, atl, etc.
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    // cuando es el botón primario, cuando el target no pide abrirse en un nueva pestaña (_blank) y cuando el evento no está siendo modificado
    // la navegación SPA solo debería ocurrir cuando estas condiciones se cumplen
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
