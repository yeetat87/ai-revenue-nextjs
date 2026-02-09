import { painCards } from '@/data/content'

export default function Problem({ onCheckout }) {
  return (
    <section className="sec sec-dark" style={{ paddingTop: 48, paddingBottom: 32 }}>
      <div className="sec-inner sr">
        <span className="tag">// The Problem</span>
        <h2>The Problem Isn&apos;t AI.<br />It&apos;s How You&apos;re <span className="t-cyan">Monetizing</span> It.</h2>
        <p>Let&apos;s be brutally honest about what&apos;s happening right now.</p>
        <p>It&apos;s 2026. AI tools are free. Tutorials are everywhere. You can spin up an automation in an afternoon that would&apos;ve taken a dev team six months just two years ago. <span className="t-white">You are not lacking skill. You are not lacking knowledge. You are not behind.</span></p>
        <p>And yet, your bank account doesn&apos;t reflect any of that.</p>
        <p>You&apos;ve watched people with <em>half</em> your technical ability close $5K, $10K, even $20K deals. They&apos;re not smarter. They&apos;re not better at AI. They just figured out something you haven&apos;t: <span className="t-white">the money was never in the automation. It was in the system around it.</span></p>
        <p>Here&apos;s what nobody tells you: <span className="t-white">87% of AI projects fail to generate revenue.</span> Not because the tech doesn&apos;t work. It&apos;s because the founder never built the bridge between &quot;impressive demo&quot; and &quot;signed contract.&quot; They built the engine but forgot the car.</p>
        <p>So what do most founders do? They build <em>more</em>. More automations. More workflows. More tools. Another certification. Another tutorial. And nothing changes. Because <span className="t-white">the gap was never technical. It was strategic.</span> You don&apos;t need another tool. You need a system that turns the tools you already have into money.</p>
        <p>AI is just the engine. <span className="t-white">Systems</span> generate revenue. Without an offer, a pipeline, and a delivery model, you have the most impressive engine in the world sitting on a garage floor. Gathering dust. While someone less talented drives past you in a beat-up car <em>that actually runs.</em></p>
        <p><span className="t-white">That ends here.</span></p>
        <div className="prob-grid" style={{ marginTop: 40 }}>
          {painCards.map((c, i) => (
            <div className={`prob-card sr sr-pop sr-d${i + 1}`} key={i}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="center" style={{ marginTop: 32 }}>
          <button className="btn btn-magenta" onClick={onCheckout}>👉 See If This System Is Right For You</button>
        </div>
      </div>
    </section>
  )
}
