# Saru Charitable Trust — by Flute of the Soul · End-to-end plan

> Status: Site built — Home, About, Work (+4 programs), Lessons, Drives, Moments, Volunteer, Transparency, Contact, 404. Blog, Give/UPI and form backends removed from scope by request; forms open the email app (mailto).

## 1. Concept
**Thesis:** *"A handful shared becomes a smile."* Sudama brought Krishna a handful of poha and it was received like a treasure. Share a small part of what you have today and it becomes a child's happiness.

**Three jobs:** showcase our work · share our thoughts and lessons · help volunteers find drives.

**Vibe:** Flute of the Soul's warmth and calm, turned playful, colourful and illustration-rich, rooted in Krishna and Indian culture. No Mac shell.

## 2. Theme — "Rangoli Sky"

### Colour (bright colours for shapes only; text always ink → WCAG AA)
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#fffaf0` | Cream ground |
| `--shyam` | `#2b4c9b` | Krishna blue — headings, footer, night theme |
| `--peacock` | `#0f7a6e` | Primary buttons (from Flute of the Soul) |
| `--marigold` | `#ff9f1c` | Joy — Give, highlights |
| `--mango` | `#ffd23f` | Sunshine — stars, badges |
| `--lotus` | `#ff6f91` | Love — Khushi program |
| `--parrot` | `#3bb273` | Growth — Vidya program |
| `--sky` | `#5ec8f2` | Wonder — Saath program |
| `--kumkum` | `#e63946` | Tiny accents |
| `--gold` | `#c08a2e` | Flute line, line-art borders |
| `--ink` / `--ink-soft` | `#1d1b2f` / `#4a4760` | Text |

Each program and blog category owns one colour.

### Type
- **Baloo 2** — headings (has Gujarati/Devanagari siblings).
- **Nunito** — body.
- **Marcellus** — shlokas and quotes only (the thread back to Flute of the Soul).

### Shape language
- Sticker cards: 3px ink outline, 6px solid offset shadow, 24px radius, slight tilt that straightens on hover.
- Wavy SVG section edges, pastel section washes (~12%).
- Crayon underlines, doodle stars and arrows, rangoli-dot dividers, faint confetti texture.
- Candy buttons that press down 3px.

### Carried over
Gold **Flute line** (draws on scroll), feather mark, ambient glow, reduced-motion-safe reveals.

### Night theme "Shyam Raat"
Deep Krishna blue, moon, twinkling stars, softened art.

## 3. Illustrations — original, in every section
- Hand-authored **SVG** → exported by `scripts/build-art.mjs` (sharp) to **PNG + WebP @1x/@2x**. SVG on the web; PNG for WhatsApp, Instagram and print.
- **Style:** 2D storybook outline + soft 3D shading ("mix").
- Honest limit: code-drawn art is sticker-like, not painterly. For richer 3D, write an AI prompt pack in the same style and run it through the same pipeline.

**Cast:**
- **Little Kanha** — child with a peacock feather and flute; drawn respectfully.
- **Gauri & Nandu** — cow and calf.
- **Mor** — peacock.
- **Mitthu** — parrot.
- **The kids** — four diverse children; never real faces.

**Inventory (~55):**
- Home: hero scene, Saru diya hands, 4 counter icons, 4 program scenes, 8 lesson cards, flute, van, kindness hero, Sudama bundle.
- About: timeline, Sudama story panel, trustee avatars.
- Volunteer: 6 role icons.
- Give: 4 amount illustrations.
- Blog: 6 category headers.
- States: empty, 404, success.
- Festival variants: Janmashtami, Diwali, Uttarayan, Navratri, Holi.

## 4. Stack
- **Astro** (static, components, content collections), plain CSS design tokens, minimal JS.
- **Vercel** hosting; forms via `api/*` + Resend (from the reference) + Turnstile.
- **Razorpay** (INR), with a UPI QR fallback.
- **Pagefind** for search; **sharp** for images.
- Later: Decap CMS, Gujarati/Hindi.

## 5. Sitemap (one illustration per section)
| Route | Sections |
|---|---|
| `/` | Toran · Hero · What Saru means · Impact counters · Programs · Lessons wall · Featured post · Gita line · Upcoming drives · Volunteer band · Moments strip · Give band · Footer |
| `/about` | Origin · Sudama story · Vision/mission · Timeline · Trustees · Registration (12A, 80G, CSR-1) |
| `/work`, `/work/[program]` | Khushi, Vidya, Saath, Anna — what, how often, story, needs, CTA |
| `/lessons` | Value cards with story + activity, downloadable PNG |
| `/drives` | Upcoming/past, filters, "Join" pre-fills the volunteer form |
| `/volunteer` | Why · Roles · Steps · Code of conduct · 3-step form → celebration |
| `/moments` | Consent-safe gallery + lightbox |
| `/give` | Handful picker · UPI · Bank · 80G · In-kind |
| `/transparency` | Reports, fund-use bar chart, certificates |
| `/contact`, `/policies/*`, `/404` | Contact form · Policies · "Kanha wandered into the forest" |

## 6. Blog — "Vichaar · Notes from the field"
- **Categories:** Field Stories · Vichaar · Vidya Notes · Utsav Diaries · Volunteer Voices · Trust Updates. `/stories` redirects to Field Stories.
- **Routes:** `/blog`, `/blog/[slug]`, `category/`, `tag/`, `series/`, `author/`, `archive`, `page/[n]`, `rss.xml`.
- **Blog index:** illustrated header · search · chips · featured post · sticker card grid (3/2/1 columns) · series shelf · quote · Volunteer Voices · newsletter · pagination.
- **Post page:** Flute-line progress bar · cover (illustration fallback) · byline · Listen (Web Speech) · drop cap · TOC · MDX blocks (`Shloka`, `PullQuote`, `Gallery`, `Callout`, `ImpactNote`, `Lesson`, `Video`, `BeforeAfter`) · Light-a-diya reaction (no comments) · WhatsApp-first share · program Give box · author card · prev/next · related posts.
- **Frontmatter:** title, subtitle, date, category, tags, series, author, lang, cover, `coverAlt`, **`consent`**, program, featured, draft. The build fails if consent or alt text is missing.

## 7. Components
- **Shell:** BaseLayout, Header, MobileBottomNav, Footer, ThemeToggle, Toran.
- **Signature:** FeatherMark, FluteLine, WaveDivider, RangoliDivider, Doodle, Illustration.
- **Content:** Hero, SectionHead, StickerCard, ImpactCounter, ProgramCard, LessonCard, DriveCard, Timeline, TrusteeCard, MomentGrid, Lightbox, FAQ, Quote, Shloka.
- **Blog:** BlogHero, SearchBar, CategoryChips, FeaturedPost, PostCard, SeriesShelf, VoicesStrip, Pagination, ReadingProgress, ListenButton, TOC, DiyaReaction, ShareBar, ProgramGiveBox, AuthorCard, PrevNext, RelatedPosts.
- **Action:** Button, DonateWidget, UpiCard, VolunteerForm, ContactForm, Newsletter, Confetti.

## 8. Folder structure
```
saru-trust/
├─ art/src/                 SVG sources
├─ scripts/build-art.mjs    SVG → PNG/WebP
├─ src/styles/ layouts/ components/ content/ pages/
├─ api/                     contact · volunteer · donate-order · razorpay-webhook · diya
└─ public/art/              exported art
```

## 9. Responsive
| Width | Layout |
|---|---|
| 360–479 | One column, art above text, bottom nav, 2×2 donate grid |
| 480–767 | Two-column cards |
| 768–1023 | Top nav, art beside text |
| 1024+ | Full layout, three-column grids, weaving Flute line |

`clamp()` fluid type; safe-area insets; 44px tap targets; no horizontal scroll.

## 10. Motion
- One-time feather intro.
- Gently floating art.
- Counters count up when seen.
- Confetti on success.
- Festival auto-switch by date.

All of it stops under `prefers-reduced-motion`.

## 11. Non-negotiables
- **Child safety:** Juvenile Justice Act s.74 — no identifiable children without consent, changed names, EXIF stripped; illustrations stand in for real children.
- **Accessibility:** WCAG 2.2 AA.
- **Performance:** Lighthouse ≥ 95, < 30KB JS.
- **Honesty:** only real numbers; placeholders clearly marked.

## 12. Phases (~6 weeks)
| Week | Work |
|---|---|
| 0 | Style sample |
| 1 | Setup, tokens, shell, Flute line, art pipeline |
| 2 | Characters + 20 illustrations, Home, About |
| 3 | Work, Lessons, Drives, Moments + 20 illustrations |
| 4 | Blog complete + 3 starter posts |
| 5 | Forms, Give (Razorpay/UPI), Transparency, Policies, festivals |
| 6 | QA, accessibility, performance, SEO, launch |

## 13. Open questions (defaults in use)
1. Illustration style — **default: mix of 2D and soft 3D**
2. Kanha mascot — **default: respectful child character + symbols**
3. AI prompt pack — **default: yes**
4. "Saru" = સારું ("good"); domain — **default: subdomain of fluteofthesoul.dev**
5. 12A/80G/FCRA — **default: 80G yes, no FCRA**
6. Donations — **default: UPI QR first**
7. Photo consent — **default: illustrations**
8. Languages — **default: English, Gujarati later**
9. Blog writers / newsletter — **default: trustees / Resend**
10. Content — **default: marked placeholders**
11. Cities — **default: Ahmedabad**
