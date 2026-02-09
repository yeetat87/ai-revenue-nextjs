import { testimonials } from '@/data/content'

export default function Testimonials() {
  return (
    <section className="sec sec-dark">
      <div className="sec-inner sr">
        <span className="tag">// From Builders to Earners</span>
        <h2>They Were Stuck Too. <span className="t-cyan">Then This Happened.</span></h2>
        <p>These aren&apos;t influencers. They&apos;re not people with huge audiences or venture backing. They&apos;re founders just like you — technically skilled, deeply passionate about AI, and completely stuck on how to turn that into income.</p>
        <p>Some had been building automations for months with nothing to show for it. Others had tried selling AI services but couldn&apos;t close. A few had given up entirely and gone back to freelancing or their day jobs.</p>
        <p><span className="t-white">Then they found a system that bridged the gap between what they could build and what clients would pay for.</span> Here&apos;s what happened next.</p>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className={`testi-card sr sr-pop sr-d${i + 1}`} key={i}>
              <div className="testi-stars">★★★★★</div>
              <blockquote>&quot;{t.quote}&quot;</blockquote>
              <div className="testi-author">{t.author}</div>
              <div className="testi-role">{t.role}</div>
            </div>
          ))}
        </div>
        <p className="center" style={{ fontSize: 12, color: 'var(--text-dimmer)', marginTop: 10 }}><em>*Results vary. These founders committed to following the system and taking action.</em></p>
      </div>
    </section>
  )
}
