'use client'

import { useState, useEffect } from 'react'

export default function StickyHeader({ onCheckout }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky-hdr${show ? ' show' : ''}`}>
      <div className="sticky-logo">AI <span>Revenue</span></div>
      <button className="sticky-btn" onClick={onCheckout}>Get The System | USD $49 →</button>
    </div>
  )
}
