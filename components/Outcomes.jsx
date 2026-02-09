import { outcomes } from '@/data/content'

export default function Outcomes() {
  return (
    <section className="sec sec-alt">
      <div className="sec-inner sr">
        <span className="tag center" style={{ display: 'block' }}>// What You Walk Away With</span>
        <h2 className="center">Not Just Knowledge.<br /><span className="t-cyan">Actual Assets You Own.</span></h2>
        <p className="center" style={{ maxWidth: 640, margin: '0 auto 12px' }}>By the time you finish, you won&apos;t just understand what to do — <span className="t-white">you&apos;ll have the offer, the pipeline, and the delivery system built.</span></p>
        <div className="walk-grid">
          {outcomes.map((o, i) => (
            <div className={`walk-card sr sr-pop sr-d${i + 1}`} key={i}>
              <div className="walk-num"><span>{o.num}</span></div>
              <div className="walk-icon">{o.icon}</div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
