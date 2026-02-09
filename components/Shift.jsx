import { builderMindset, revenueMindset } from '@/data/content'

export default function Shift() {
  return (
    <section className="sec sec-alt">
      <div className="sec-inner sr">
        <span className="tag">// The Revenue Shift</span>
        <h2>What Separates AI Founders Who <span className="t-cyan">Earn</span> From Those Who <span className="t-magenta">Build</span></h2>
        <p>The founders pulling $10K to $50K per month with AI aren&apos;t smarter than you. They don&apos;t know more tools. They aren&apos;t more connected. They didn&apos;t get lucky. <span className="t-white">They just ask a completely different first question.</span></p>
        <p>Most AI founders wake up and think: <em>&quot;What should I automate today?&quot;</em> They open ChatGPT, browse new tools, build another workflow, and feel productive. But at the end of the month, their revenue hasn&apos;t moved. The dopamine of building masks the absence of earning.</p>
        <p>The founders who actually make money? They wake up and ask: <span className="t-white">&quot;What problem will someone pay me $5K to solve this week?&quot;</span> Then they use AI to deliver that solution faster and cheaper than anyone else on the planet. Same tools. Same technology. Completely different outcome.</p>
        <p>That&apos;s the shift. It&apos;s not a new framework or a fancy strategy. It&apos;s a fundamental rewiring of how you think about your AI skills. <span className="t-white">You stop being a builder. You start being a business.</span> And once you see it, you can&apos;t unsee it.</p>

        <div className="shift-compare">
          <div className="shift-col before sr sr-left">
            <h3>❌ Builder Mindset</h3>
            <ul className="shift-list">
              {builderMindset.map((item, i) => (
                <li key={i}><span>{item.label}</span> {item.text}</li>
              ))}
            </ul>
          </div>
          <div className="shift-arrow sr sr-pop">→</div>
          <div className="shift-col after sr sr-right">
            <h3>✅ Revenue Mindset</h3>
            <ul className="shift-list">
              {revenueMindset.map((item, i) => (
                <li key={i}><span>{item.label}</span> {item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
