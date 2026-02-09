import AvatarStack from './AvatarStack'
import { pricingIncludes } from '@/data/content'

export default function Pricing({ onCheckout }) {
  return (
    <section className="sec sec-dark">
      <div className="sec-inner sr">
        <span className="tag center" style={{ display: 'block' }}>// Get Started</span>
        <h2 className="center">Get The <span className="t-cyan">AI Revenue System</span></h2>
        <p className="center" style={{ maxWidth: 580, margin: '0 auto 8px' }}>What founders spend 6–12 months figuring out through trial and error. Compressed into a system you can work through in weeks.</p>
        <div className="price-card sr sr-zoom">
          <div className="price-tag-label">One-Time Payment · Lifetime Access</div>
          <div style={{ textAlign: 'left', margin: '24px 0', padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)', position: 'relative' }}>
            <p style={{ fontSize: 14, marginBottom: 10, fontWeight: 600, color: 'var(--white)' }}>Everything included:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {pricingIncludes.map((item, i) => (
                <li key={i} style={{ fontSize: 13, padding: '5px 0 5px 22px', position: 'relative', color: 'var(--text)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--green)', fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="price-new-big" style={{ margin: '16px 0 8px' }}>USD $49</div>
          <div className="price-note">One-time payment · No subscription · Instant access</div>
          <button className="stripe-btn-big" onClick={onCheckout}>
            Get The AI Revenue System<br />USD $49
          </button>
          <AvatarStack />
          <div className="stripe-secure">
            <span>🔒 256-bit SSL</span>
            <span>💳 Stripe Secure</span>
            <span>💰 30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
