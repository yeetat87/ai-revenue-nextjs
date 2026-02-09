import { forYou, notForYou } from '@/data/content'

export default function WhoIsFor() {
  return (
    <section className="sec sec-dark">
      <div className="sec-inner sr">
        <span className="tag">// Is This For You?</span>
        <h2>This System Works <span className="t-cyan">Only If</span> You Do</h2>
        <p>Let&apos;s save each other some time.</p>
        <p>This system produces results. But only for a specific kind of person. Not because the content is exclusive or complicated. Because <span className="t-white">the founders who win are the ones who actually do the work.</span></p>
        <p>If you&apos;re the kind of person who buys courses and never opens them, this isn&apos;t for you. If you&apos;re looking for a magic button that prints money while you sleep, this isn&apos;t for you either.</p>
        <p>But if you&apos;re someone who has real AI skills, knows you&apos;re capable of more, and just needs the right system to connect what you can build to what people will pay for? <span className="t-white">This was built specifically for you.</span></p>
        <p>Read below. Be honest about which side you fall on.</p>
        <div className="for-grid">
          <div className="for-box yes sr sr-left sr-d1">
            <h3>✅ Built for you if...</h3>
            <ul className="for-list">
              {forYou.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="for-box no sr sr-right sr-d2">
            <h3>❌ Please don&apos;t join if...</h3>
            <ul className="for-list">
              {notForYou.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
