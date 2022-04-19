import { useEffect } from 'react';

import { Container } from './styles';

export function IconMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    const toggleMenu = document.getElementById('toggle-menu')
    isOpen
      ? toggleMenu.classList.add('open')
      : toggleMenu.classList.remove('open')
  }, [isOpen])

  return (
    <Container id="toggle-menu" onClick={() => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  )
}
