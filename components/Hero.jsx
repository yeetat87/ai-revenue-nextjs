import HeroCanvas from './HeroCanvas'
import AvatarStack from './AvatarStack'

export default function Hero({ onCheckout }) {
  return (
    <section className="hero">
      <HeroCanvas />
      <div className="hero-inner">
        <div className="hero-pill"><span className="live-dot" /> From an ex-Apple &amp; TikTok leader turned AI solopreneur</div>
        <h1>Turn Your AI Skills Into a <span className="t-cyan">$10K/Month</span> Service Business</h1>
        <p className="hero-sub">You don&apos;t need an audience, a sales team, or another tool nobody uses. <span className="t-white">You need the system that took founders from &quot;impressive demos&quot; to $3K–$10K clients in weeks, not months.</span></p>
        <button className="btn btn-cyan hero-cta-pop" onClick={onCheckout}>Get The AI Revenue System<br />USD $49</button>
        <span className="cta-note">🔥 Limited Time USD $49 · 30-Day Money-Back Guarantee · Instant Access</span>
        <div className="hero-social-proof">
          <AvatarStack />
        </div>
        <div className="hero-trust">
          <div className="hero-trust-item">🔒 100% Money-Back Guarantee</div>
          <div className="hero-trust-item">⚡ Instant Access</div>
          <div className="hero-trust-item">👥 Private Community Included</div>
        </div>
      </div>
    </section>
  )
}
