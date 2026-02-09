export default function Video() {
  return (
    <section className="sec sec-dark">
      <div className="sec-inner center sr">
        <span className="tag">// Watch This First</span>
        <h2>Most AI Founders Are Building Impressive Demos <span className="t-cyan">Nobody Pays For</span></h2>
        <p style={{ maxWidth: 620, margin: '0 auto 12px' }}>In 4 minutes, discover why the most skilled AI builders are often the worst at making money and the counterintuitive system that flips this entirely.</p>
        <div className="vid-wrap sr sr-zoom" style={{ background: 'none', cursor: 'default', aspectRatio: 'auto', height: 'auto' }}>
          <video controls playsInline preload="metadata" style={{ width: '100%', maxWidth: 720, borderRadius: 16, border: '1px solid rgba(0,255,255,.15)', boxShadow: '0 0 40px rgba(0,255,255,.08)', display: 'block', margin: '0 auto' }}>
            <source src="/explainer-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
