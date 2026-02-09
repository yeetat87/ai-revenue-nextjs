export default function AvatarStack({ label }) {
  return (
    <div className="price-avatars">
      <div className="avatar-stack">
        {['L', 'M', 'S', 'J', 'A'].map((l, i) => (
          <span className="avatar-circle" key={i}>{l}</span>
        ))}
      </div>
      <span className="avatar-label">{label || 'Founders across 12+ countries use this system'}</span>
    </div>
  )
}
