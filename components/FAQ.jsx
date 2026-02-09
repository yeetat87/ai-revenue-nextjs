'use client'

import { useState } from 'react'
import { faqData } from '@/data/content'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className="sec sec-dark">
      <div className="sec-inner sr">
        <span className="tag center" style={{ display: 'block' }}>// Questions</span>
        <h2 className="center">Frequently Asked <span className="t-cyan">Questions</span></h2>
        <div className="faq-wrap">
          {faqData.map((item, i) => (
            <div className={`faq-item${openIdx === i ? ' open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => toggle(i)}>{item.q}</button>
              <div className="faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
