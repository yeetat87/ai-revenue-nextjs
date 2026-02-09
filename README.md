# The AI Revenue System - Next.js Landing Page

Next.js 14 (App Router) + React 18 + Three.js

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel: `npx vercel` (zero config)

## Project Structure

```
app/
├── layout.js            # Root layout (metadata, fonts)
└── page.js              # Main page (client component)
components/
├── Hero.jsx             # Hero section with 3D canvas
├── HeroCanvas.jsx       # Three.js particle animation (dynamic import, SSR safe)
├── Problem.jsx          # Pain points + cards
├── Video.jsx            # Explainer video embed
├── Shift.jsx            # Builder vs Revenue mindset comparison
├── Trainer.jsx          # About the trainer
├── Testimonials.jsx     # Social proof cards
├── Outcomes.jsx         # What you get cards
├── WhoIsFor.jsx         # For/Not-for grid
├── Guarantee.jsx        # Money-back guarantee
├── Pricing.jsx          # Price card + Stripe
├── FAQ.jsx              # 16 accordion FAQs
├── FinalCTA.jsx         # Final CTA + email capture
├── Footer.jsx           # Footer links
├── Ticker.jsx           # Scrolling ticker bar
├── StickyHeader.jsx     # Fixed header on scroll
├── AvatarStack.jsx      # Avatar social proof
├── CheckoutModal.jsx    # Stripe checkout modal
└── ScrollToTop.jsx      # Scroll-to-top + mobile CTA
hooks/
├── useScrollReveal.js   # Intersection Observer animations
└── useTiltEffect.js     # 3D tilt on hover
data/
└── content.js           # All copy/data in one place
styles/
└── global.css           # Complete CSS (responsive + animations)
public/
└── (place explainer-video.mp4 here)
```

## Stripe Integration

Replace `YOUR_PAYMENT_LINK_HERE` in `components/CheckoutModal.jsx`

## Mobile Optimized

- Responsive: desktop → tablet → phone
- Mobile sticky CTA bar
- Touch-friendly 48px minimum tap targets
- Safe area insets for notched phones
- Reduced motion accessibility
- Three.js dynamically imported (no SSR issues)
# ai-revenue-nextjs
