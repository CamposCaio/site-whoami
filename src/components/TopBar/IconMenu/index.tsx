import { useEffect } from 'react'

import { Container } from './styles'

export function IconMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    const toggleMenu = document.querySelector('#large-top-bar .toggle-menu')
    isOpen
      ? toggleMenu.classList.add('open')
      : toggleMenu.classList.remove('open')
  }, [isOpen])

  return (
    <Container className="toggle-menu" onClick={() => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  )
}
