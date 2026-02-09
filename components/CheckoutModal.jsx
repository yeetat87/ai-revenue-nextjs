'use client'

import { useState } from 'react'

const STRIPE_LINK = 'https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE'

export default function CheckoutModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handlePay = (e) => {
    e.preventDefault()
    if (!name || !email) {
      alert('Please enter your name and email.')
      return
    }
    const url = STRIPE_LINK + '?prefilled_email=' + encodeURIComponent(email)
    window.open(url, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3>Get Instant Access 🚀</h3>
        <p>The AI Revenue System · Lifetime Access</p>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className="stripe-btn" onClick={handlePay} style={{ marginTop: 8 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
          Pay USD $49 with Stripe →
        </button>
        <div className="stripe-secure" style={{ marginTop: 12 }}>
          <span>🔒 Secure</span>
          <span>💰 Guarantee</span>
          <span>⚡ Instant Access</span>
        </div>
      </div>
    </div>
  )
}
