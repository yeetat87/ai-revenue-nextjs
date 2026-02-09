export default function Ticker({ items }) {
  const content = items || [
    'THE AI REVENUE SYSTEM', '◆', 'TURN AI SKILLS INTO $10K/MONTH', '◆',
    'INSTANT ACCESS · SELF-PACED', '◆', '100% MONEY-BACK GUARANTEE', '◆'
  ]
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {[...content, ...content].map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
