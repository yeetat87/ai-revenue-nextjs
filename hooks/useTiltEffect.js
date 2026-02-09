import { useEffect } from 'react'

export function useTiltEffect() {
  useEffect(() => {
    const cards = document.querySelectorAll('.prob-card, .walk-card, .testi-card, .price-card')

    const handleMove = (card, e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -4
      const rotateY = ((x - centerX) / centerX) * 4
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`
    }

    const handleLeave = (card) => {
      card.style.transform = ''
      card.style.transition = 'transform 0.4s ease'
      setTimeout(() => { card.style.transition = '' }, 400)
    }

    cards.forEach((card) => {
      const onMove = (e) => handleMove(card, e)
      const onLeave = () => handleLeave(card)
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      card._tiltCleanup = () => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      }
    })

    return () => cards.forEach((card) => card._tiltCleanup?.())
  }, [])
}
