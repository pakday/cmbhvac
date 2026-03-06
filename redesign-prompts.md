# Website Redesign — Master Prompts

**Hybrid Workflow: Opus 4.6 (Phase 1) → Sonnet 4.6 (Phase 2)**

---

## ━━━ PHASE 1 — OPUS 4.6 ━━━

### Use for: Home page + Global Style Reference Card

### Run this once. Save the output Style Card forever.

---

```
You are a senior UI/UX designer and frontend developer specializing
in modern, clean, conversion-focused websites.

═══════════════════════════════════════════
TASK
═══════════════════════════════════════════
Redesign the provided webpage using its existing content.
This is Phase 1 of a multi-page project. Your output will become
the design system used for ALL remaining pages — so decisions must
be deliberate, consistent, and scalable.

═══════════════════════════════════════════
INPUT
═══════════════════════════════════════════
I am providing: [cleaned HTML file / live URL: ___]
This is the: HOME PAGE

Content rules:
- Extract and preserve ALL client content (headings, body, CTAs,
  lists, links, testimonials, stats, team info, etc.)
- You may skip obvious filler, broken placeholders, or exact duplicates
- Do NOT rewrite client copy — keep their words
- If image src paths exist, keep them. If missing, use:
  https://images.unsplash.com (search by relevant keyword)

═══════════════════════════════════════════
DESIGN SYSTEM — Apply Globally
═══════════════════════════════════════════

COLORS
──────
Primary:        #133F60  (dark navy — headings, navbar, footer, trust)
Secondary:      #DB5425  (warm orange-red — CTAs, highlights, accents)
Primary Light:  #1A5280  (hover state for primary)
Secondary Light:#E8632E  (hover state for secondary)
Background:     #FFFFFF  (default page background)
Surface:        #F7F9FB  (alternate section backgrounds)
Border:         #E2E8F0  (dividers, card borders)
Text Primary:   #1A1A2E  (headings)
Text Body:      #4A4A68  (body copy)
Text Muted:     #8892A4  (captions, labels, meta)

TYPOGRAPHY
──────────
Font Stack:     'Plus Jakarta Sans', 'Inter', sans-serif
                (import from Google Fonts)

Scale:
  - Display/Hero H1:  text-4xl md:text-6xl  font-bold    leading-tight
  - Section H2:       text-3xl md:text-4xl  font-bold    leading-snug
  - Card H3:          text-xl md:text-2xl   font-semibold
  - Body Large:       text-lg               font-normal  leading-relaxed
  - Body Default:     text-base             font-normal  leading-relaxed (1.75)
  - Label/Eyebrow:    text-sm               font-semibold uppercase tracking-widest
  - Caption/Meta:     text-sm               text-muted

SPACING & LAYOUT
────────────────
Max content width:  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Section padding:    py-16 md:py-24
Between sections:   space-y-16 md:space-y-24
Card gap:           gap-6 md:gap-8
Card padding:       p-6 md:p-8
Border radius:      rounded-2xl (cards), rounded-full (buttons/pills),
                    rounded-xl (inputs, smaller components)
Shadows:            shadow-sm (default), shadow-md (hover/elevated),
                    shadow-xl (modals, hero cards)

ANIMATIONS — Minimal & Purposeful Only
───────────────────────────────────────
Scroll reveal:      Sections fade in from below on scroll
                    (opacity-0 → opacity-100, translateY 20px → 0)
                    Use IntersectionObserver, trigger once only
Hover — buttons:    scale-[1.02] + shadow-md, duration-200
Hover — cards:      translateY(-4px) + shadow-md, duration-200
Hover — links:      color shift + underline, duration-150
NO parallax. NO looping animations. NO heavy JS libraries.
Tailwind classes:   transition-all duration-200 ease-in-out

BUTTONS
───────
Primary CTA:
  bg-[#DB5425] text-white font-semibold rounded-full px-7 py-3
  hover:bg-[#E8632E] hover:scale-[1.02] transition-all duration-200
  shadow-sm hover:shadow-md

Secondary CTA (Outline):
  border-2 border-[#133F60] text-[#133F60] font-semibold rounded-full
  px-7 py-3 hover:bg-[#133F60] hover:text-white transition-all duration-200

Ghost/Text Link:
  text-[#DB5425] font-semibold hover:underline underline-offset-4

ICONS
─────
Use Lucide Icons (CDN) or Heroicons — free, open source
Icon size: w-5 h-5 (inline), w-8 h-8 (feature icons),
           w-12 h-12 (large section icons with bg circle)
Icon accent bg: bg-[#133F60]/10 rounded-xl p-3 (for feature sections)

IMAGES
──────
Hero:          aspect-video or 16:9, object-cover, rounded-2xl
Cards:         aspect-[4/3], object-cover
Team/Avatar:   aspect-square, rounded-full
Placeholder:   https://images.unsplash.com/photo-[ID]?w=800&q=80
               (choose contextually relevant image)

═══════════════════════════════════════════
PAGE STRUCTURE RULES
═══════════════════════════════════════════

Every page must follow:
[Navbar] → [Hero] → [Main Sections] → [CTA Banner] → [Footer]

NAVBAR (sticky, backdrop-blur)
  Left:   Logo (text or img)
  Center: Nav links (hidden on mobile)
  Right:  Primary CTA button
  Mobile: Hamburger → full-screen or slide-down menu

HERO SECTION
  Layout:  Two-column (text left, image/visual right) OR centered
  Content: Eyebrow label → H1 → subheading → CTA buttons (primary + secondary)
  Style:   bg-[#133F60] text-white OR white bg with colored accents

SECTION ANATOMY (every section)
  Eyebrow:   Small label in secondary color, uppercase, centered
  Heading:   H2, bold, centered or left-aligned
  Subtext:   One paragraph body copy, text-muted, max-w-2xl
  Content:   Cards / grid / list below
  Optional CTA: ghost link or button at bottom of section

CTA BANNER (before footer)
  Full-width, bg-[#DB5425] or bg-[#133F60], text-white
  Centered heading + subtext + white outlined button

FOOTER
  4-column grid: Logo+tagline | Quick Links | Services | Contact+Social
  Bottom bar: copyright + legal links
  bg-[#0D2E47] text-white (darkened primary)

═══════════════════════════════════════════
TECH STACK
═══════════════════════════════════════════
- Tailwind CSS via CDN (latest)
- Plus Jakarta Sans via Google Fonts
- Lucide Icons via CDN
- Vanilla HTML — no frameworks
- Minimal custom CSS only where Tailwind cannot handle it
- No jQuery, no Bootstrap, no external UI libraries
- Keep WordPress/Elementor conversion in mind:
  → Avoid deep nesting (max 4 levels)
  → Each section should be clearly separable
  → Prefer flex/grid over absolute positioning

═══════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════

Deliver in this exact order:

1. COMPLETE HTML FILE
   Full page with all Tailwind classes, fonts, icons,
   Animations: CSS only. Use Tailwind's transition utilities for
hover effects. Skip scroll reveal — it will be handled in Elementor.

2. COMPONENT INVENTORY
   List every reusable component you created:
   (e.g., Navbar, Footer, FeatureCard, TestimonialCard, CTABanner)
   One sentence description of each.

3. ★ GLOBAL STYLE REFERENCE CARD ★
   (I will paste this into every future Sonnet session)
   Format as a code block containing:
   - Full color palette with hex values and usage
   - Typography: font names, sizes, weights used
   - Spacing tokens used
   - Shadow/border-radius values
   - Button class strings (copy-paste ready)
   - Animation approach (2-3 sentences)
   - Navbar + Footer structure summary
   - Any custom CSS added

═══════════════════════════════════════════
QUALITY CHECKLIST — Verify before output
═══════════════════════════════════════════
[ ] All original client content preserved — no lorem ipsum
[ ] Mobile responsive: sm / md / lg breakpoints covered
[ ] H1 → H2 → H3 hierarchy correct (one H1 per page)
[ ] CTA appears minimum once per page
[ ] Color contrast meets WCAG AA (white on #133F60 ✓, white on #DB5425 ✓)
[ ] Animations are subtle — nothing distracts from content
[ ] No inline styles except where Tailwind CDN can't handle it
[ ] Images have alt text
[ ] Consistent visual rhythm top to bottom

═══════════════════════════════════════════
BEGIN
═══════════════════════════════════════════
[Paste your cleaned Home page HTML below this line]
```

---

---

## ━━━ PHASE 2 — SONNET 4.6 ━━━

### Use for: Every remaining page (repeat per session, 3–4 pages at a time)

---

```
You are a frontend developer building pages for an ongoing
website redesign project. The design system is already established.

═══════════════════════════════════════════
CONTEXT
═══════════════════════════════════════════
This is a continuation project. The Home page and design system
were completed in a previous session. Your job is to build
additional pages that exactly match the established design —
no new design decisions needed.

══════════════════════════════════════════
GLOBAL STYLE REFERENCE CARD
(Copy-paste your saved card from Phase 1 here)
══════════════════════════════════════════
[PASTE STYLE REFERENCE CARD HERE]

═══════════════════════════════════════════
REUSABLE COMPONENTS
(Use these exactly — do not redesign them)
═══════════════════════════════════════════
- Navbar:  [paste navbar HTML from Home page]
- Footer:  [paste footer HTML from Home page]
- CTABanner: [paste CTA banner HTML from Home page]

═══════════════════════════════════════════
TASK — Pages to build this session
═══════════════════════════════════════════
Build the following page(s) using the content I will provide:

Page 1: [Page Name]
Page 2: [Page Name]  (if applicable)
Page 3: [Page Name]  (if applicable)

Content rules:
- Preserve ALL client content — do not skip or rewrite
- Match layout pattern of similar pages already built
- Use same section anatomy: Eyebrow → H2 → Body → Content → CTA
- Images: use existing src if present, else Unsplash placeholder

Page type layout guide:
  Service/Feature page → Hero + 3-col features + detail rows + CTA
  About page           → Hero + story + team grid + values + CTA
  Contact page         → Hero + 2-col (form left, info right) + map
  Blog/List page       → Hero + filter bar + card grid + pagination
  Single Post/Detail   → Hero + content + sidebar + related + CTA

═══════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════
For EACH page:
1. Complete HTML file (ready to save as pagename.html)
2. Note any NEW component created (so I can reuse it later)

Do NOT re-output the style card — I already have it.
Do NOT re-explain design decisions already made.
Just build clean, consistent pages.

═══════════════════════════════════════════
BEGIN
═══════════════════════════════════════════
Page 1 — [Page Name]
[Paste cleaned HTML content below]
```

---

## Quick Reference: Session Workflow

| Step | Model      | What to do                                            |
| ---- | ---------- | ----------------------------------------------------- |
| 1    | Opus 4.6   | Run Phase 1 prompt + Home page HTML → Save Style Card |
| 2    | Sonnet 4.6 | Run Phase 2 prompt + Style Card + 3-4 page HTMLs      |
| 3    | Sonnet 4.6 | Repeat Step 2 until all pages done                    |
| 4    | Either     | Bug fixes, tweaks, responsiveness checks              |

**Golden rule:** Always paste the Style Reference Card at the top of every Sonnet session. That card is your design memory.
