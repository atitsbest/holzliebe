# JUNG* Website Redesign: Design Spec

Date: 2026-11-03
Source design: `~/Downloads/Programmierer/JUNG_261103_Webseite_Ansicht.pdf` (Home, Über uns, Kontakt), InDesign/IDML in `JUNG_261103_Webseite Ordner/`.
Assets: `~/Downloads/Programmierer/` (`JUNG_261013_LOGO.svg`, `JUNG_261013_LOGO_weiss.svg`, `JUNG-*.jpg`).

## Goal

Restyle the existing Gatsby 5 site to the new JUNG* brand. Home, Über uns and Kontakt follow the PDF exactly. All other pages get the new look with their existing content.

## Decisions

| Topic | Decision |
|---|---|
| Approach | Restyle in place. Keep Gatsby, styled-components, gatsby-plugin-image, react-slick, lightbox. |
| Delivery | PoC: one feature branch `feat/jung-redesign`, one PR into `master` (size approved by sme). New pages use a separate `JungLayout`, so old and new pages coexist until every page is switched. |
| typography.js | Stays active for old pages during the rollout; new pages override it with their own global style. Removal is part of the deferred cleanup. |
| Navigation | Current items kept, plus Kontakt: Raumplanung, Qualitätstischlerei, Holzarchitektur, Impressionen, Über uns, Kontakt. The PDF's reduced nav is not used. |
| Fonts | Placeholders until the Adobe Fonts kit exists: Figtree 300 (body) and League Spartan 700 (display, standing in for Riant Display Bold). Self-hosted woff2 in `src/fonts/`, so nothing loads from a CDN (GDPR). |
| Contact | "Jetzt anfragen" on cards and sections links to `/kontakt`. On the Kontakt page and in the footer it is `mailto:kontakt@jung-räume.at`. |
| Top bar | Black phone/Facebook bar removed. Facebook link moves to the footer. |
| Home / Über uns content | Exactly as in the PDF. Old sections (video, Wisdom, History, image grid, CallToContact) are dropped. |
| Other pages | Raumplanung, Tischlerei, Holzarchitektur, Impressionen: existing content in the new look. Impressum, Datenschutz: plain text in the new typography. |

## Foundation

**Tokens** (`src/utils/theme.js`):
- Colors: `black #000`, `white #fff`, `grey #6D727A`, `lime #D1D663`, `green #5F7F6E`, `rose #D0A194`. These were sampled from the PDF render; verify them against the IDML CMYK swatches (C67 M56 Y44, C20 Y100, C74 M40 Y66, C10 M41 Y37) when implementing.
- Fonts: `display` (League Spartan 700, later Riant Display) and `body` (Figtree 300).
- Sizes scale with the 1920px artboard: side gutter `max(16px, 7.8vw)`, display hero type ~7.5vw, section headlines ~4.3vw, lead ~1.875vw, body ~1.5625vw (each clamped).

**Global CSS:** body Figtree 300, about 20px, black on white. Display headings are uppercase with tight letter-spacing. The trailing `*` is a small raised asterisk. Raleway/Lora font files are deleted.

**Header:** absolutely positioned over the hero. Links are white, uppercase Figtree, with the active link underlined. Below ~900px it becomes a hamburger (`react-hamburger-menu`) with a full-screen overlay. Every page except Home shows a small white JUNG* logo top-left that links to `/`. On Home the large logo sits centered in the hero.

**Footer:** left side has "JUNGREITHMAYR / INTERIOR DESIGN & TISCHLEREI", then "Tischlerstraße 6, A-4062 Thening", phone as a `tel:` link and email as a `mailto:` link. Right side has Impressum, Datenschutz and Facebook.

## Components (`src/components/`, one file each)

- `PageHero`: full-bleed image (gatsby-plugin-image) or color block. Content is a centered display headline with asterisk, or the logo. Props: `image` or `bg`, `color`, `title`, `logo`. Height ~100vh on Home, ~75vh elsewhere.
- `Intro`: display headline plus uppercase Figtree lead text in a ~7/12 column, with optional image on the left (Über uns) and optional `TextLink`.
- `Cards`: 3 columns, each with a square image, title, text and a `TextLink` to `/kontakt`. One column on mobile.
- `Statement`: large centered display line ("FREUDE WOHNT MIT*").
- `Quote`: square b/w portrait, uppercase quote, author.
- Team: rendered with `Cards` (square photo, uppercase name, role). Data from the PDF (8 people).
- `ImageSlider`: restyled with white arrow icons over the image and no dots.
- `TextLink`: "JETZT ANFRAGEN →" in the display font.

## Pages

- **Home:** PageHero (`JUNG-header.jpg`, white logo), Intro "Räume perfektionieren", Cards (Interior Design / Tischlerei / Architektur with `JUNG-interior.jpg`, `JUNG-tischlerei.jpg`, `JUNG-architektur.jpg`), Statement, Quote (`JUNG-Joachim-zitat.jpg`), ImageSlider (`JUNG-bildergalerie-*.jpg`), Footer.
- **Über uns:** PageHero grey/lime "Brillant ist selten laut*", Intro with image "Seit 5 Generationen" (`JUNG-historisch.jpg`) and TextLink, full-width image (`JUNG-7.jpg`), TeamGrid (`JUNG-team-*.jpg`).
- **Kontakt:** PageHero green/rose "Schönes braucht Platz zum Bleiben*", centered `mailto:` TextLink, ImageSlider.
- **Raumplanung / Qualitätstischlerei / Holzarchitektur / Impressionen:** color PageHero with the page title (pairs rotate: grey/lime, green/rose, black/white, rose/green), then the existing text and images in the new components. Impressionen keeps its lightbox gallery.
- **Impressum / Datenschutz:** black PageHero with the title, then plain text.

Texts for Home, Über uns and Kontakt are copied verbatim from the PDF/IDML stories. New photos go into `src/images/jung/`.

## Cleanup (deferred)

Not part of this rollout. After all MRs are merged, delete components, images, fonts, old theme keys and `typography.js` that nothing imports anymore (about 9 MRs under the size limit, or one with management approval).

## Verification

- `npm run build` succeeds with no new warnings about missing images or GraphQL errors.
- Visual check of every page at 1440px and 375px against the PDF in the browser: no horizontal scroll, the hamburger works, active nav state is correct, links go to the right targets.

## Out of scope

Adobe Fonts kit integration (later: swap `@font-face` and the font token), new content for the subpages, CMS, changes to deploy and `pathPrefix`.
