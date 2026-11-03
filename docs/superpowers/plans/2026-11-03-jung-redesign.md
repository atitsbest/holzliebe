# JUNG* Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the Gatsby site to the new JUNG* brand: Home, Über uns and Kontakt exactly as in the PDF, all other pages in the new look with their existing content.

**Architecture:** Same Gatsby 5 + styled-components site. New pages use a new, separate `JungLayout` (own header, footer and `createGlobalStyle`), so old and new pages coexist while the redesign ships page by page. A small set of shared components (`PageHero`, `DisplayTitle`, `Intro`, `Cards`, `Quote`, `Statement`, `TextLink`, `ImageSlider`, `Section`/`FullImage`/`ImagePair`/`Prose`) is used by every page. Removing old components, images, fonts and `typography.js` is deferred to a later cleanup (out of scope).

**Tech Stack:** Gatsby 5, React 19, styled-components 6, gatsby-plugin-image, react-slick, yet-another-react-lightbox, react-hamburger-menu.

**Spec:** `docs/superpowers/specs/2026-11-03-jung-redesign-design.md`

## Global Constraints

- Nav items, in order: Raumplanung, Qualitätstischlerei, Holzarchitektur, Impressionen, Über uns, Kontakt.
- Fonts: Figtree 300 (body), League Spartan 700 (display, stand-in for Riant Display Bold). Self-hosted woff2 in `src/fonts/`; never load fonts from a CDN at runtime.
- Colors: black `#000`, white `#fff`, grey `#6D727A`, lime `#D1D663`, green `#5F7F6E`, rose `#D0A194`.
- Email: shown as `kontakt@jung-räume.at`, linked as `mailto:kontakt@xn--jung-rume-02a.at`. Phone: `Tel. +43 7221 630 16`, `tel:+43722163016`.
- "Jetzt anfragen" links go to `/kontakt`; only the Kontakt page and the footer use `mailto:`.
- Copy for Home, Über uns and Kontakt is verbatim from the PDF (given in the tasks below).
- No test suite exists. The check for every task is `npm run build` exiting 0; page tasks add a visual check.
- **MR split (qoncept mr-size hook):** every task below is ONE MR on its own branch off `origin/master`, at most 400 changed lines and 20 files versus `origin/master` (Markdown under `docs/` and `package-lock.json` do not count). Commit with `QC_MR_SIZE_CONFIRMED=1` (tier 2 confirmed by the developer); each MR description gets a "Size" bullet. A task that depends on an earlier one starts only after that MR is merged into `master` (merging deploys the live site).
- **Live site stays coherent:** never change files the old pages use (`layout.js`, `header.js`, `Footer.js`, `section.js`, `ImageSlider.js`, `History.js`, `Team.js`, old `@font-face`s, old `Theme` keys, `gatsby-plugin-typography`). New code lives in new files.
- Commit messages: no AI attribution lines (user rule).
- `pathPrefix: '/2019'` stays; never hardcode absolute asset URLs, always import assets or use `Link`.

## File Map

| File | Status | Responsibility |
|---|---|---|
| `src/utils/theme.js` | modify (additive) | new colors, fonts, gutter, contact constants next to the old keys |
| `src/utils/style.js` | modify | add `displayFont` |
| `src/components/GlobalStyle.js` | new | reset + base typography (mounted only by `JungLayout`) |
| `src/components/fonts.css` | modify (additive) | add `@font-face` for Figtree and League Spartan |
| `src/components/JungLayout.js` | new | GlobalStyle, JungHeader, main, JungFooter |
| `src/components/JungHeader.js` | new | nav overlay, burger, small logo on subpages |
| `src/components/JungFooter.js` | new | address, legal links, Facebook |
| `src/components/Block.js` | new | `Section`, `FullImage`, `ImagePair`, `Prose` |
| `src/components/DisplayTitle.js` | new | display-font headline with optional `*` |
| `src/components/PageHero.js` | new | image or color hero |
| `src/components/TextLink.js` | new | "JETZT ANFRAGEN →" link, exports `Arrow` |
| `src/components/Intro.js` | new | headline + uppercase lead, optional image and link |
| `src/components/Cards.js` | new | 3-col image/title/text grid (services, team, points) |
| `src/components/Statement.js` | new | big centered line |
| `src/components/Quote.js` | new | portrait + quote |
| `src/components/GallerySlider.js` | new | slider over `jung/galerie` |
| `src/components/TeamCards.js` | new | team data → `Cards` |
| `src/components/HistoryIntro.js` | new | "Seit 5 Generationen" block |
| `src/components/Gallery.js` | modify | drop Typography import |
| `src/pages/*.js` | rewrite/modify | pages, one MR at a time |
| `src/images/jung/**` | new | new photos and logo |

## MR Order

| Task / MR | Branch | Depends on (merged) |
|---|---|---|
| 1 Foundation + layout | `feat/jung-foundation` | – |
| 2 Gallery photos | `feat/jung-assets-gallery` | – |
| 3 Team + page photos | `feat/jung-assets-photos` | – |
| 4 Components A | `feat/jung-components-a` | 1 |
| 5 Components B | `feat/jung-components-b` | 1, 2, 4 |
| 6 Home | `feat/jung-page-home` | 3, 5 |
| 7 Über uns + Kontakt | `feat/jung-page-about-kontakt` | 3, 5 |
| 8 Raumplanung | `feat/jung-page-raumplanung` | 5 |
| 9 Tischlerei + Impressionen | `feat/jung-page-tischlerei-impressionen` | 7, 8 |
| 10 Holzarchitektur + legal + 404 | `feat/jung-page-holzarchitektur-legal` | 8 |

---

### Task 1: Foundation and layout (MR `feat/jung-foundation`)

Branch base: `origin/master`; the controller prepares the branch with the docs (spec + plan) already committed; they do not count toward the size limit. Nothing on the live site changes: no page imports the new files yet.

**Files:**
- Create: `src/fonts/figtree-300.woff2`, `src/fonts/league-spartan-700.woff2`, `src/images/jung/logo-weiss.svg`, `src/components/GlobalStyle.js`, `src/components/JungLayout.js`, `src/components/JungHeader.js`, `src/components/JungFooter.js`
- Modify: `src/components/fonts.css`, `src/utils/theme.js`, `src/utils/style.js`, `gatsby-ssr.js`

**Interfaces:**
- Produces: `Theme.colors.{black,white,grey,lime,green,rose}`, `Theme.fonts.{display,body}`, `Theme.gutter`, `Theme.gap`, `Theme.maxWidth`, `Theme.contact.{email,emailHref,phone,phoneHref,facebook}`; `displayFont` from `src/utils/style.js`; default exports `GlobalStyle`, `JungLayout({ children, home })` (`home` hides the small header logo; every page using it must start with a `PageHero`).

- [ ] **Step 1: Download fonts**

```bash
curl -fsSL -o src/fonts/figtree-300.woff2 https://cdn.jsdelivr.net/npm/@fontsource/figtree@5/files/figtree-latin-300-normal.woff2
curl -fsSL -o src/fonts/league-spartan-700.woff2 https://cdn.jsdelivr.net/npm/@fontsource/league-spartan@5/files/league-spartan-latin-700-normal.woff2
file src/fonts/figtree-300.woff2 src/fonts/league-spartan-700.woff2
```
Expected: both report `Web Open Font Format (Version 2)`.

- [ ] **Step 2: Copy the logo**

```bash
mkdir -p src/images/jung
cp "$HOME/Downloads/Programmierer/JUNG_261013_LOGO_weiss.svg" src/images/jung/logo-weiss.svg
```

- [ ] **Step 3: Append to `src/components/fonts.css`**

Keep the existing Lora/Raleway rules (old pages use them) and append:

```css

@font-face {
  font-family: 'Figtree';
  src: url('../fonts/figtree-300.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

/* Stand-in for Riant Display Bold (Adobe Fonts) until the kit exists */
@font-face {
  font-family: 'League Spartan';
  src: url('../fonts/league-spartan-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

- [ ] **Step 4: Extend `src/utils/theme.js`**

The old keys (`colors.primary/secondary/text/bg/secondaryBg`, `fonts.primary/secondary`) stay because old pages use them. Result:

```js
const Theme = {
  colors: {
    // old pages (remove in cleanup)
    primary: '#000',
    secondary: '#d4dad4',
    text: '#333',
    bg: '#fff',
    secondaryBg: '#CAD3CE',
    // JUNG*
    black: '#000',
    white: '#fff',
    grey: '#6D727A',
    lime: '#D1D663',
    green: '#5F7F6E',
    rose: '#D0A194',
  },
  fonts: {
    // old pages (remove in cleanup)
    primary: 'Raleway',
    secondary: 'Lora',
    // JUNG*: swap to 'riant-display' once the Adobe Fonts kit exists
    display: "'League Spartan', 'Helvetica Neue', Arial, sans-serif",
    body: "'Figtree', 'Helvetica Neue', Arial, sans-serif",
  },
  gutter: 'max(16px, 7.8vw)',
  gap: 'max(16px, 3.3vw)',
  maxWidth: '1920px',
  contact: {
    email: 'kontakt@jung-räume.at',
    emailHref: 'mailto:kontakt@xn--jung-rume-02a.at',
    phone: 'Tel. +43 7221 630 16',
    phoneHref: 'tel:+43722163016',
    facebook:
      'https://www.facebook.com/Jungreithmayr-Architektur-Tischlerei-872429343120179/',
  },
}

export default Theme
```

- [ ] **Step 5: Add `displayFont` to `src/utils/style.js`**

Add at the top (below the existing `import { css } ...`) and keep the rest of the file for now:

```js
import Theme from './theme'

export const displayFont = css`
  font-family: ${Theme.fonts.display};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.92;
`
```

- [ ] **Step 6: Create `src/components/GlobalStyle.js`**

`gatsby-plugin-typography` stays active for the old pages and injects element styles on every page (html font-size 112.5%, heading fonts, margins). The `html:root` / `body ...` selectors out-rank those plain element selectors, and styled-components classes still out-rank these.

```js
import { createGlobalStyle } from 'styled-components'
import Theme from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html:root {
    -webkit-text-size-adjust: 100%;
    font-size: 100%;
    line-height: normal;
  }
  html body {
    margin: 0;
    background: ${Theme.colors.white};
    color: ${Theme.colors.black};
    font-family: ${Theme.fonts.body};
    font-weight: 300;
    font-size: clamp(1.0625rem, 1.5625vw, 1.875rem);
    line-height: 1.3;
  }
  body h1, body h2, body h3, body h4, body h5, body h6 {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-rendering: auto;
  }
  body h1, body h2, body h3, body h4, body h5, body h6,
  body p, body ul, body ol, body li, body blockquote,
  body figure, body address, body img {
    margin: 0;
  }
  body ul, body ol, body blockquote { padding: 0; }
  body img { max-width: 100%; }
  body a { color: inherit; }
`

export default GlobalStyle
```

- [ ] **Step 7: Remove the stale font preload**

Replace `gatsby-ssr.js` (it preloads a non-existent `Lobster-Regular.woff2`) with:

```js
// Gatsby SSR APIs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
```

- [ ] **Step 8: Create `src/components/JungLayout.js`**

```js
import React from 'react'
import Header from './JungHeader'
import Footer from './JungFooter'
import GlobalStyle from './GlobalStyle'
import './fonts.css'

const Layout = ({ children, home = false }) => (
  <>
    <GlobalStyle />
    <Header home={home} />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
```

- [ ] **Step 9: Create `src/components/JungHeader.js`**

```js
import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from 'react-hamburger-menu'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import logo from '../images/jung/logo-weiss.svg'

const links = [
  ['/raumplanung', 'Raumplanung'],
  ['/tischlerei', 'Qualitätstischlerei'],
  ['/holzarchitektur', 'Holzarchitektur'],
  ['/impressionen', 'Impressionen'],
  ['/about', 'Über uns'],
  ['/kontakt', 'Kontakt'],
]

const Header = ({ home }) => {
  const [open, setOpen] = useState(false)
  return (
    <Bar>
      {!home && (
        <Link to="/" aria-label="Startseite">
          <Logo src={logo} alt="JUNG*" />
        </Link>
      )}
      <Nav $open={open}>
        <ul>
          {links.map(([to, label]) => (
            <li key={to}>
              <Link to={to} activeClassName="active" partiallyActive>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
      <Burger>
        <Hamburger
          isOpen={open}
          menuClicked={() => setOpen(!open)}
          width={24}
          height={16}
          color="#fff"
        />
      </Burger>
    </Bar>
  )
}

const Bar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: max(20px, 5vw) ${Theme.gutter} 0;
  color: ${Theme.colors.white};
`

const Logo = styled.img`
  display: block;
  width: clamp(4.5rem, 7vw, 8rem);
`

const Nav = styled.nav`
  margin-left: auto;
  text-transform: uppercase;
  font-size: clamp(0.95rem, 1.375vw, 1.65rem);

  ul {
    display: flex;
    gap: 1.1em;
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    white-space: nowrap;
  }
  a.active,
  a:hover {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  ${media.tablet`
    display: ${p => (p.$open ? 'flex' : 'none')};
    position: fixed;
    inset: 0;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.95);
    font-size: 1.5rem;

    ul { flex-direction: column; align-items: center; gap: 1em; }
  `};
`

const Burger = styled.div`
  display: none;
  margin-left: auto;
  z-index: 11;
  cursor: pointer;

  ${media.tablet`display: block;`};
`

export default Header
```

- [ ] **Step 10: Create `src/components/JungFooter.js`**

```js
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Theme from '../utils/theme'
import { media } from '../utils/style'

const { contact } = Theme

const Footer = () => (
  <Wrapper>
    <div>
      <Name>
        Jungreithmayr
        <br />
        Interior Design &amp; Tischlerei
      </Name>
      <address>
        Tischlerstraße 6, A-4062 Thening
        <br />
        <a href={contact.phoneHref}>{contact.phone}</a>
        <br />
        <a href={contact.emailHref}>{contact.email}</a>
      </address>
    </div>
    <Links>
      <li>
        <Link to="/impressum">Impressum</Link>
      </li>
      <li>
        <Link to="/datenschutz">Datenschutz</Link>
      </li>
      <li>
        <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </li>
    </Links>
  </Wrapper>
)

const Wrapper = styled.footer`
  max-width: ${Theme.maxWidth};
  margin: 0 auto;
  padding: max(40px, 5vw) ${Theme.gutter} max(40px, 4vw);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  font-size: clamp(0.95rem, 1.375vw, 1.65rem);
  line-height: 1.25;

  address { font-style: normal; }
  a { text-decoration: none; }
  a:hover { text-decoration: underline; }

  ${media.mobile`flex-direction: column;`};
`

const Name = styled.p`
  text-transform: uppercase;
  margin-bottom: 0.6em;
`

const Links = styled.ul`
  list-style: none;
  padding: 0;
  text-align: right;
  text-transform: uppercase;

  ${media.mobile`text-align: left;`};
`

export default Footer
```

- [ ] **Step 11: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 12: Commit**

```bash
git add src/fonts/figtree-300.woff2 src/fonts/league-spartan-700.woff2 src/images/jung/logo-weiss.svg src/components/fonts.css src/components/GlobalStyle.js src/components/JungLayout.js src/components/JungHeader.js src/components/JungFooter.js src/utils/theme.js src/utils/style.js gatsby-ssr.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Add JUNG* foundation: fonts, tokens, global styles and new layout"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-foundation`.

---

### Task 2: Gallery photos (MR `feat/jung-assets-gallery`)

Branch base: `origin/master`. 15 binary files, 0 lines.

**Files:**
- Create: `src/images/jung/galerie/01.jpg` … `15.jpg`

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-assets-gallery origin/master
```

- [ ] **Step 2: Copy**

```bash
SRC="$HOME/Downloads/Programmierer"; mkdir -p src/images/jung/galerie
for i in $(seq 1 15); do cp "$SRC/JUNG-bildergalerie-$i.jpg" src/images/jung/galerie/$(printf %02d $i).jpg; done
ls src/images/jung/galerie | wc -l
```
Expected: `15`.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/images/jung/galerie
QC_MR_SIZE_CONFIRMED=1 git commit -m "Add JUNG* gallery photos"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-assets-gallery`.

---

### Task 3: Team and page photos (MR `feat/jung-assets-photos`)

Branch base: `origin/master`. 15 binary files, 0 lines.

**Files:**
- Create: `src/images/jung/{header,interior,tischlerei,architektur,joachim-zitat,historisch,kueche}.jpg`, `src/images/jung/team/01.jpg` … `08.jpg`

Team order: 01 Joachim, 02 Roland, 03 Johannes, 04 Markus S., 05 Markus E., 06 Bernhard, 07 Oliver, 08 Maximilian.

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-assets-photos origin/master
```

- [ ] **Step 2: Copy**

```bash
SRC="$HOME/Downloads/Programmierer"; DST=src/images/jung
mkdir -p $DST/team
cp "$SRC/JUNG-header.jpg" $DST/header.jpg
cp "$SRC/JUNG-interior.jpg" $DST/interior.jpg
cp "$SRC/JUNG-tischlerei.jpg" $DST/tischlerei.jpg
cp "$SRC/JUNG-architektur.jpg" $DST/architektur.jpg
cp "$SRC/JUNG-Joachim-zitat.jpg" $DST/joachim-zitat.jpg
cp "$SRC/JUNG-historisch.jpg" $DST/historisch.jpg
cp "$SRC/JUNG-7.jpg" $DST/kueche.jpg
cp "$SRC/JUNG-team-.jpg" $DST/team/01.jpg
for i in $(seq 2 8); do cp "$SRC/JUNG-team-$i.jpg" $DST/team/0$i.jpg; done
find $DST -name "*.jpg" -not -path "*/galerie/*" | wc -l
```
Expected: `15`.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/images/jung
QC_MR_SIZE_CONFIRMED=1 git commit -m "Add JUNG* team and page photos"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-assets-photos`.

---

### Task 4: Shared components A (MR `feat/jung-components-a`)

Branch base: `origin/master` after Task 1 is merged. New, unused files only.

**Files:**
- Create: `src/components/Block.js`, `src/components/DisplayTitle.js`, `src/components/PageHero.js`, `src/components/TextLink.js`, `src/components/Intro.js`

**Interfaces:**
- Consumes: `Theme`, `displayFont`, `media` (`media.tablet` = max-width 60rem, `media.mobile` = 48rem), `src/images/jung/logo-weiss.svg`.
- Produces:
  - `Section` (styled container with vertical spacing), `FullImage({ image })`, `ImagePair({ images: [a, b] })`, `Prose` from `Block.js`
  - `DisplayTitle({ as = 'h1', lines: string[], star?: boolean, className })`; when wrapping it with `styled()`, pass the tag as `forwardedAs`, never `as`
  - `PageHero({ image?, bg = 'black', color = 'white', title?: string[], logo?: boolean })` (`bg`/`color` are `Theme.colors` keys)
  - `TextLink({ to?, href?, children, className })`, named export `Arrow`
  - `Intro({ title?: string[], lead?: string, image?, link?: ReactNode })`

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-components-a origin/master
```

- [ ] **Step 2: Create `src/components/Block.js`**

```js
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'

export const Section = styled.section`
  max-width: ${Theme.maxWidth};
  margin: max(48px, 5vw) auto;
  padding: 0 ${Theme.gutter};
`

export const FullImage = ({ image }) => (
  <Section>
    <GatsbyImage image={getImage(image)} alt="" />
  </Section>
)

const Pair = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Theme.gap};

  ${media.mobile`grid-template-columns: 1fr;`};
`

export const ImagePair = ({ images }) => (
  <Pair>
    {images.map((image, i) => (
      <GatsbyImage key={i} image={getImage(image)} alt="" />
    ))}
  </Pair>
)

export const Prose = styled(Section)`
  max-width: calc(60rem + 2 * ${Theme.gutter});
  margin-left: 0;
  font-size: clamp(1rem, 1.15vw, 1.3rem);
  line-height: 1.5;

  h2, h3 { font-weight: 700; margin: 1.6em 0 0.4em; }
  p { margin-bottom: 1em; }
`
```

- [ ] **Step 3: Create `src/components/DisplayTitle.js`**

```js
import React from 'react'
import styled from 'styled-components'
import { displayFont } from '../utils/style'

const DisplayTitle = ({ as = 'h1', lines, star = false, className }) => (
  <Title as={as} className={className}>
    {lines.map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </React.Fragment>
    ))}
    {star && <Star aria-hidden="true">*</Star>}
  </Title>
)

const Title = styled.h1`
  ${displayFont};
`

const Star = styled.span`
  display: inline-block;
  font-size: 0.32em;
  vertical-align: top;
  margin-left: 0.35em;
  letter-spacing: 0;
  line-height: 1;
`

export default DisplayTitle
```

- [ ] **Step 4: Create `src/components/PageHero.js`**

```js
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import DisplayTitle from './DisplayTitle'
import logoWhite from '../images/jung/logo-weiss.svg'

const PageHero = ({ image, bg = 'black', color = 'white', title, logo }) => (
  <Hero style={{ background: Theme.colors[bg], color: Theme.colors[color] }}>
    {image && <GatsbyImage image={getImage(image)} alt="" className="bg" />}
    <Center>
      {logo ? (
        <h1>
          <Logo src={logoWhite} alt="JUNG*" />
        </h1>
      ) : (
        <Headline lines={title} star />
      )}
    </Center>
  </Hero>
)

const Hero = styled.div`
  position: relative;
  height: 56vw;
  min-height: 420px;
  max-height: 100svh;
  overflow: hidden;

  .bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`

const Center = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 ${Theme.gutter};
`

const Headline = styled(DisplayTitle)`
  font-size: clamp(2.5rem, 7.5vw, 9rem);
  hyphens: auto;
`

const Logo = styled.img`
  display: block;
  width: clamp(10rem, 24vw, 28rem);
`

export default PageHero
```

Note: `GatsbyImage` defaults to `object-fit: cover`, so the image fills the hero.

- [ ] **Step 5: Create `src/components/TextLink.js`**

```js
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { displayFont } from '../utils/style'

export const Arrow = () => (
  <svg viewBox="0 0 24 24" width="0.85em" height="0.85em" aria-hidden="true">
    <path
      d="M3 12h16M12 4l8 8-8 8"
      stroke="currentColor"
      strokeWidth="3.5"
      fill="none"
    />
  </svg>
)

const TextLink = ({ to, href, children, className }) => (
  <A as={to ? Link : 'a'} to={to} href={href} className={className}>
    {children} <Arrow />
  </A>
)

const A = styled.a`
  ${displayFont};
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  margin-top: 1.4em;
  font-size: clamp(1.125rem, 1.875vw, 2.25rem);
  text-decoration: none;

  &:hover { text-decoration: underline; }
`

export default TextLink
```

- [ ] **Step 6: Create `src/components/Intro.js`**

```js
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import { Section } from './Block'
import DisplayTitle from './DisplayTitle'

const Intro = ({ title, lead, image, link }) => (
  <Grid>
    {image && <GatsbyImage image={getImage(image)} alt="" />}
    <Text $withImage={Boolean(image)}>
      {title && <Headline forwardedAs="h2" lines={title} />}
      {lead && <Lead>{lead}</Lead>}
      {link}
    </Text>
  </Grid>
)

const Grid = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Theme.gap};
  align-items: start;

  ${media.mobile`grid-template-columns: 1fr;`};
`

const Text = styled.div`
  grid-column: ${p => (p.$withImage ? '2 / span 2' : '1 / span 2')};
  padding-top: ${p => (p.$withImage ? '0.5em' : 0)};

  ${media.mobile`grid-column: 1;`};
`

const Headline = styled(DisplayTitle)`
  font-size: clamp(2.25rem, 4.3vw, 5.2rem);
  margin-bottom: 0.35em;
`

const Lead = styled.p`
  text-transform: uppercase;
  font-size: clamp(1.125rem, 1.875vw, 2.25rem);
  line-height: 1.2;
  hyphens: auto;
  max-width: 34em;
`

export default Intro
```

- [ ] **Step 7: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 8: Commit**

```bash
git add src/components/Block.js src/components/DisplayTitle.js src/components/PageHero.js src/components/TextLink.js src/components/Intro.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Add JUNG* hero, title, link, intro and block components"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-components-a`.

---

### Task 5: Shared components B (MR `feat/jung-components-b`)

Branch base: `origin/master` after Tasks 1, 2 and 4 are merged. New, unused files only.

**Files:**
- Create: `src/components/Cards.js`, `src/components/Statement.js`, `src/components/Quote.js`, `src/components/GallerySlider.js`

**Interfaces:**
- Consumes: `Section` from `./Block`, `DisplayTitle`, `TextLink`/`Arrow` (Task 4), `Theme`, `media`, `src/components/slick.css` (existing, keep), images in `jung/galerie` (Task 2).
- Produces:
  - `Cards({ items: { image, title, text?, link? }[] })` (`link` is a path; renders "Jetzt anfragen")
  - `Statement({ lines: string[] })` (always with star)
  - `Quote({ image, text, author })`
  - `GallerySlider()` (no props; renders `jung/galerie/*`)

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-components-b origin/master
```

- [ ] **Step 2: Create `src/components/Cards.js`**

```js
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import { Section } from './Block'
import TextLink from './TextLink'

const Cards = ({ items }) => (
  <Grid>
    {items.map(({ image, title, text, link }) => (
      <Card key={title}>
        <GatsbyImage image={getImage(image)} alt={title} />
        <Title>{title}</Title>
        {text && <p>{text}</p>}
        {link && <TextLink to={link}>Jetzt anfragen</TextLink>}
      </Card>
    ))}
  </Grid>
)

const Grid = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${Theme.gap};
  row-gap: max(40px, 4vw);

  ${media.tablet`grid-template-columns: repeat(2, 1fr);`};
  ${media.mobile`grid-template-columns: 1fr;`};
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  hyphens: auto;
`

const Title = styled.h3`
  text-transform: uppercase;
  font-size: clamp(1.25rem, 2.08vw, 2.5rem);
  line-height: 1.1;
  margin-top: 1em;
  margin-bottom: 0.15em;
`

export default Cards
```

- [ ] **Step 3: Create `src/components/Statement.js`**

```js
import React from 'react'
import styled from 'styled-components'
import { Section } from './Block'
import DisplayTitle from './DisplayTitle'

const Statement = ({ lines }) => (
  <Wrapper>
    <Big forwardedAs="h2" lines={lines} star />
  </Wrapper>
)

const Wrapper = styled(Section)`
  text-align: center;
  margin-top: max(80px, 11vw);
  margin-bottom: max(80px, 11vw);
`

const Big = styled(DisplayTitle)`
  font-size: clamp(2.5rem, 7.5vw, 9rem);
`

export default Statement
```

- [ ] **Step 4: Create `src/components/Quote.js`**

```js
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Theme from '../utils/theme'
import { media } from '../utils/style'
import { Section } from './Block'

const Quote = ({ image, text, author }) => (
  <Grid>
    <GatsbyImage image={getImage(image)} alt={author} />
    <Block>
      <p>{text}</p>
      <footer>{author}</footer>
    </Block>
  </Grid>
)

const Grid = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Theme.gap};

  ${media.mobile`grid-template-columns: 1fr;`};
`

const Block = styled.blockquote`
  grid-column: 2 / span 2;
  padding-top: 2.2vw;
  max-width: 34em;

  p {
    text-transform: uppercase;
    font-size: clamp(1.125rem, 1.875vw, 2.25rem);
    line-height: 1.2;
    hyphens: auto;
  }
  footer {
    margin-top: 1.4em;
    font-size: clamp(0.95rem, 1.375vw, 1.65rem);
  }

  ${media.mobile`grid-column: 1;`};
`

export default Quote
```

- [ ] **Step 5: Create `src/components/GallerySlider.js`**

```js
import React from 'react'
import Slider from 'react-slick'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Section } from './Block'
import { Arrow } from './TextLink'
import './slick.css'

const SlideArrow = ({ onClick, dir }) => (
  <ArrowButton
    type="button"
    onClick={onClick}
    $dir={dir}
    aria-label={dir === 'next' ? 'Nächstes Bild' : 'Vorheriges Bild'}
  >
    <Arrow />
  </ArrowButton>
)

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlideArrow dir="next" />,
  prevArrow: <SlideArrow dir="prev" />,
}

const GallerySlider = () => {
  const { allFile } = useStaticQuery(graphql`
    query GallerySlider {
      allFile(
        filter: { relativeDirectory: { eq: "jung/galerie" } }
        sort: { name: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 1620)
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Slider {...settings}>
        {allFile.nodes.map((node, i) => (
          <GatsbyImage key={i} image={getImage(node)} alt="" />
        ))}
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled(Section)`
  position: relative;
`

const ArrowButton = styled.button`
  position: absolute;
  bottom: 2vw;
  ${p => (p.$dir === 'next' ? 'right: 2vw;' : 'left: 2vw; transform: scaleX(-1);')}
  z-index: 1;
  padding: 0.25em;
  border: 0;
  background: none;
  color: #fff;
  font-size: clamp(1.5rem, 2.6vw, 3rem);
  line-height: 0;
  cursor: pointer;
`

export default GallerySlider
```


- [ ] **Step 6: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 7: Commit**

```bash
git add src/components/Cards.js src/components/Statement.js src/components/Quote.js src/components/GallerySlider.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Add JUNG* cards, statement, quote and gallery slider components"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-components-b`.

---

### Task 6: Home page (MR `feat/jung-page-home`)

Branch base: `origin/master` after Tasks 3 and 5 are merged.

**Files:**
- Rewrite: `src/pages/index.js`

**Interfaces:**
- Consumes: `JungLayout({ home })`, `PageHero`, `Intro`, `Cards`, `Statement`, `Quote`, `GallerySlider` (imported as `ImageSlider`).

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-page-home origin/master
```

- [ ] **Step 2: Rewrite `src/pages/index.js`**

```js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import Statement from '../components/Statement'
import Quote from '../components/Quote'
import ImageSlider from '../components/GallerySlider'

const Index = ({ data }) => (
  <Layout home>
    <PageHero image={data.hero} logo />
    <Intro
      title={['Räume', 'perfektionieren']}
      lead="Die schönsten Momente passieren zu Hause. Beim Kaffee an dem Tisch, den du dir immer gewünscht hast. Im Sessel, der wie für dich gemacht ist. Besonders im Entwurf, perfekt in der Ausführung."
    />
    <Cards
      items={[
        {
          image: data.interior,
          title: 'Interior Design',
          text: 'Interior Design gestaltet nicht nur, wie ein Raum aussieht, sondern wie er sich anfühlt. Proportionen, Licht, hochwertige Materialien und maßgefertigte Möbel greifen ineinander, damit Atmosphäre entsteht.',
          link: '/kontakt',
        },
        {
          image: data.tischlerei,
          title: 'Tischlerei',
          text: 'Unsere Tischlerei baut, was wir entwerfen. Vom Einzelstück bis zur kompletten Einrichtung entstehen Möbel mit Liebe zum Detail: perfekt in der Passung, premium im Material, besonders in der Ausführung.',
          link: '/kontakt',
        },
        {
          image: data.architektur,
          title: 'Architektur',
          text: 'Holzarchitektur heißt, ein ganzes Haus aus Holz zu denken: von der ersten Skizze bis zum Einzug. Wir planen und bauen Häuser, die warm wirken, hochwertig verarbeitet sind und Charakter haben.',
          link: '/kontakt',
        },
      ]}
    />
    <Statement lines={['Freude', 'wohnt mit']} />
    <Quote
      image={data.joachim}
      text="Perfektes Design ist selten laut. Es zeigt sich im Detail: in der Kante, die sich gut anfühlt, im Holz, das mit den Jahren schöner wird, in der Proportion, die einfach stimmt."
      author="Joachim Jungreithmayr"
    />
    <ImageSlider />
  </Layout>
)

export default Index

export const query = graphql`
  query indexQuery {
    hero: file(relativePath: { eq: "jung/header.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1920)
      }
    }
    interior: file(relativePath: { eq: "jung/interior.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
    tischlerei: file(relativePath: { eq: "jung/tischlerei.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
    architektur: file(relativePath: { eq: "jung/architektur.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
    joachim: file(relativePath: { eq: "jung/joachim-zitat.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, aspectRatio: 1)
      }
    }
  }
`
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Visual check**

Run (background): `npm run develop`, open `http://localhost:8000` and check `/` at 1440px and 375px against the PDF renders: header readable over the hero, small logo on non-home pages, active nav link underlined, no horizontal scroll at 375px, hamburger opens/closes, links go to the right targets. Pages not in this MR still show the old design; that is expected. Fix deviations in this task's files before committing. Stop the dev server afterwards.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Rebuild home page from the JUNG* design"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-page-home`.

---

### Task 7: Über uns and Kontakt (MR `feat/jung-page-about-kontakt`)

Branch base: `origin/master` after Tasks 3 and 5 are merged.

**Files:**
- Create: `src/components/HistoryIntro.js`, `src/components/TeamCards.js`
- Rewrite: `src/pages/about.js`, `src/pages/kontakt.js`

**Interfaces:**
- Consumes: `PageHero`, `Intro`, `Cards`, `FullImage`, `Section`, `TextLink`, `GallerySlider`, `Theme.contact`.
- Produces: `HistoryIntro()` and `TeamCards()` (no props, own static queries named `HistoryIntro` / `TeamCards`; the old `History.js`/`Team.js` keep their query names `History`/`Team`). `HistoryIntro` is also used by `tischlerei.js` in Task 9.

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-page-about-kontakt origin/master
```

- [ ] **Step 2: Create `src/components/HistoryIntro.js`**

```js
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Intro from './Intro'
import TextLink from './TextLink'

const History = () => {
  const { image } = useStaticQuery(graphql`
    query HistoryIntro {
      image: file(relativePath: { eq: "jung/historisch.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
    }
  `)
  return (
    <Intro
      image={image}
      title={['Seit 5', 'Generationen']}
      lead="1890 gründete Johann Angermayr in Thening die Tischlerei, die heute in fünfter Generation am selben Standort weiterbesteht. Handwerkliches Geschick und Wertschätzung für den Werkstoff Holz und für die Kundschaft wurden über Adam, Walter und Wilfried weitergegeben. Mit jeder Generation kamen Wissen und Präzision dazu, deshalb entstehen heute Möbel, die schöner und besser sind als je zuvor."
      link={<TextLink to="/kontakt">Jetzt anfragen</TextLink>}
    />
  )
}

export default History
```

- [ ] **Step 3: Create `src/components/TeamCards.js`**

```js
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Cards from './Cards'

// file name in src/images/jung/team → person
const members = [
  ['01', 'Joachim Jungreithmayr', 'Geschäftsführer'],
  ['02', 'Roland Heitzendorfer', 'Technischer Assistent, Tischlermeister'],
  ['03', 'Johannes Stadler', 'Tischlermeister'],
  ['04', 'Markus Schmidthaler', 'Tischlergeselle'],
  ['05', 'Markus Eder', 'Tischlermeister'],
  ['06', 'Bernhard Ronacher', 'Tischlergeselle'],
  ['07', 'Oliver Wellinger', 'Tischlergeselle'],
  ['08', 'Maximilian Hametner', 'Lehrling'],
]

const Team = () => {
  const { allFile } = useStaticQuery(graphql`
    query TeamCards {
      allFile(filter: { relativeDirectory: { eq: "jung/team" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 800, aspectRatio: 1)
          }
        }
      }
    }
  `)
  const images = Object.fromEntries(allFile.nodes.map(n => [n.name, n]))
  return (
    <Cards
      items={members.map(([file, name, role]) => ({
        image: images[file],
        title: name,
        text: role,
      }))}
    />
  )
}

export default Team
```

- [ ] **Step 4: Rewrite `src/pages/about.js`**

```js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import History from '../components/HistoryIntro'
import Team from '../components/TeamCards'
import { FullImage } from '../components/Block'

const About = ({ data }) => (
  <Layout>
    <PageHero bg="grey" color="lime" title={['Brillant ist', 'selten laut']} />
    <History />
    <FullImage image={data.kueche} />
    <Team />
  </Layout>
)

export default About

export const query = graphql`
  query aboutQuery {
    kueche: file(relativePath: { eq: "jung/kueche.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1620)
      }
    }
  }
`
```

- [ ] **Step 5: Rewrite `src/pages/kontakt.js`**

```js
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import TextLink from '../components/TextLink'
import ImageSlider from '../components/GallerySlider'
import { Section } from '../components/Block'
import Theme from '../utils/theme'

const Kontakt = () => (
  <Layout>
    <PageHero
      bg="green"
      color="rose"
      title={['Schönes', 'braucht Platz', 'zum Bleiben']}
    />
    <Center>
      <Big href={Theme.contact.emailHref}>Jetzt anfragen</Big>
    </Center>
    <ImageSlider />
  </Layout>
)

const Center = styled(Section)`
  text-align: center;
`

const Big = styled(TextLink)`
  margin-top: 0;
  font-size: clamp(1.75rem, 3.4vw, 4rem);
`

export default Kontakt
```

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 7: Visual check**

Run (background): `npm run develop`, open `http://localhost:8000` and check `/about` and `/kontakt` at 1440px and 375px against the PDF renders: header readable over the hero, small logo on non-home pages, active nav link underlined, no horizontal scroll at 375px, hamburger opens/closes, links go to the right targets. Pages not in this MR still show the old design; that is expected. Fix deviations in this task's files before committing. Stop the dev server afterwards.

- [ ] **Step 8: Commit**

```bash
git add src/components/HistoryIntro.js src/components/TeamCards.js src/pages/about.js src/pages/kontakt.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Rebuild Über uns and Kontakt from the JUNG* design"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-page-about-kontakt`.

---

### Task 8: Raumplanung (MR `feat/jung-page-raumplanung`)

Branch base: `origin/master` after Task 5 is merged.

**Files:**
- Rewrite: `src/pages/raumplanung.js`

**Interfaces:**
- Consumes: `PageHero`, `Intro`, `Cards`, `TextLink`, `FullImage`.
- Produces: global GraphQL fragments `Square` and `Wide` on `File` (used by Tasks 9 and 10).

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-page-raumplanung origin/master
```

- [ ] **Step 2: Rewrite `src/pages/raumplanung.js`**

```js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import TextLink from '../components/TextLink'
import { FullImage } from '../components/Block'

const Raumplanung = ({ data }) => (
  <Layout>
    <PageHero bg="grey" color="lime" title={['Raumplanung']} />
    <Intro lead="Am Anfang ist der Raum. Er soll schön werden, er soll bestens funktionieren! Unsere Raumplanung ist mehr, als ein Möbel ins Eck zu stellen." />
    <Cards
      items={[
        { image: data.schlafen, title: 'Schlafen', text: 'Wozu Raumplanung in einem Raum, in dem man die Augen schließt? Weil für einen guten Schlaf eine besonders gute Atmosphäre hilfreich ist. Das kann man planen!' },
        { image: data.wohnen, title: 'Wohnen', text: 'Was auch immer im Trend liegt: Vergessen Sie es! Denn Wohnen ist dann gut, wenn es genau zu Ihnen passt. Das machen wir!' },
        { image: data.kochen, title: 'Kochen', text: 'Wir kochen nicht. Aber wir wissen, was es braucht, damit Sie es mit Freude tun können. Das ist Erfahrung!' },
        { image: data.buero, title: 'Büro', text: 'Der Erfolg Ihrer Arbeit liegt nicht am Design Ihres Schreibtischs. Aber wir können Design, Funktion und Umsetzung so perfekt kombinieren, dass die Menschen es glauben werden. Das ist Erfolg!' },
        { image: data.badezimmer, title: 'Badezimmer', text: 'Wer glaubt, dass sich Holz und Wasser nicht vertragen, vergisst, dass Holz in der Natur „erfunden“ wurde. Diese Qualität wissen wir richtig einzusetzen. Das wird Sie überraschen!' },
        { image: data.garderobe, title: 'Garderobe', text: 'Nur ein Stauraum für ein paar Mäntel? Manchmal ja. Aber manchmal der erste Eindruck von Ihrem Lebensraum. Wie das Vorwort zu einem guten Buch: Weglegen oder Weiterlesen?' },
        { image: data.freiraum, title: 'Freiraum', text: 'Viele Menschen gestalten den Raum im Freien mit Beton. Weil es so „praktisch“ ist. Wir gestalten auch mit Holz. Weil es so angenehm ist. Das macht frei!' },
        { image: data.sauna, title: 'Sauna', text: 'Eine Sauna aus Holz zu bauen ist nicht überraschend. Eine schöne Sauna aus Holz zu bauen wird Sie überraschen. Bereit für den Design-Aufguss?' },
        { image: data.accessoires, title: 'Accessoires', text: 'Ob Küchenfunktionen oder Verarbeitungsdetails. Wenn es keine gute Lösung gibt am Markt, dann erfinden wir eine. Das ist Liebe zum Detail!' },
      ]}
    />
    <FullImage image={data.plan} />
    <Intro
      lead="Ein guter Plan beginnt nicht am Papier. Auch nicht im Kopf. Sondern beim Zuhören. Nur so kann Ihr Wohntraum in Erfüllung gehen. Das ist nicht Traumdeutung, sondern Gespür, Leidenschaft und ganz viel Erfahrung."
      link={<TextLink to="/kontakt">Jetzt anfragen</TextLink>}
    />
    <FullImage image={data.abschluss} />
  </Layout>
)

export default Raumplanung

export const query = graphql`
  fragment Square on File {
    childImageSharp {
      gatsbyImageData(width: 800, aspectRatio: 1)
    }
  }
  fragment Wide on File {
    childImageSharp {
      gatsbyImageData(width: 1620)
    }
  }
  query raumplanungQuery {
    plan: file(relativePath: { eq: "raumplanung_plan.jpg" }) { ...Wide }
    abschluss: file(relativePath: { eq: "jh_jungreithmayr_126.jpg" }) { ...Wide }
    schlafen: file(relativePath: { eq: "jh_jungreithmayr_081.jpg" }) { ...Square }
    wohnen: file(relativePath: { eq: "jh_jungreithmayr_122.jpg" }) { ...Square }
    kochen: file(relativePath: { eq: "jh_jungreithmayr_085.jpg" }) { ...Square }
    buero: file(relativePath: { eq: "jh_jungreithmayr_079.jpg" }) { ...Square }
    badezimmer: file(relativePath: { eq: "jh_jungreithmayr_072.jpg" }) { ...Square }
    garderobe: file(relativePath: { eq: "raumplanung_garderobe.jpg" }) { ...Square }
    freiraum: file(relativePath: { eq: "jh_jungreithmayr_008.jpg" }) { ...Square }
    sauna: file(relativePath: { eq: "raumplanung_sauna.jpg" }) { ...Square }
    accessoires: file(relativePath: { eq: "jh_jungreithmayr_048.jpg" }) { ...Square }
  }
`
```

Gatsby fragments are global across the site, so `Square` and `Wide` defined here are usable in the page queries of Tasks 9 and 10. Do not define them twice: a duplicate fragment name is a build error.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Visual check**

Run (background): `npm run develop`, open `http://localhost:8000` and check `/raumplanung` at 1440px and 375px against the PDF renders: header readable over the hero, small logo on non-home pages, active nav link underlined, no horizontal scroll at 375px, hamburger opens/closes, links go to the right targets. Pages not in this MR still show the old design; that is expected. Fix deviations in this task's files before committing. Stop the dev server afterwards.

- [ ] **Step 5: Commit**

```bash
git add src/pages/raumplanung.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Restyle Raumplanung in the JUNG* design"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-page-raumplanung`.

---

### Task 9: Tischlerei and Impressionen (MR `feat/jung-page-tischlerei-impressionen`)

Branch base: `origin/master` after Tasks 7 and 8 are merged.

**Files:**
- Rewrite: `src/pages/tischlerei.js`, `src/pages/impressionen.js`
- Modify: `src/components/Gallery.js`

**Interfaces:**
- Consumes: `PageHero`, `Intro`, `Cards`, `Quote`, `FullImage`, `ImagePair`, `Section`, `HistoryIntro` (imported as `History`), fragments `Square`/`Wide` (Task 8), `Gallery({ photos, videos })`.

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-page-tischlerei-impressionen origin/master
```

- [ ] **Step 2: Rewrite `src/pages/tischlerei.js`**

```js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import Quote from '../components/Quote'
import History from '../components/HistoryIntro'
import { FullImage, ImagePair } from '../components/Block'

const Tischlerei = ({ data }) => (
  <Layout>
    <PageHero bg="green" color="rose" title={['Qualitäts-', 'tischlerei']} />
    <Intro lead="Welches Holz passt zu Ihnen? Welches Design zu Ihrem Raum? Welche Funktion zu Ihren Bedürfnissen? Qualitätstischlerei bedeutet, für Sie diese Fragen zu lösen." />
    <ImagePair images={[data.half1, data.half2]} />
    <Quote
      image={data.hobel}
      text="Die meisten Menschen erkennen die Qualität eines Möbels an seiner großartigen Ausstrahlung, obwohl sie die nicht benennen können. Deshalb haben unsere Tischlermeister nicht einfach handwerkliches Geschick. Sondern sie wissen, wie man die Ausstrahlung von Holz zur Entfaltung bringt. Mit Wissen, Können UND Spüren."
      author="Joachim Jungreithmayr, Geschäftsführer"
    />
    <FullImage image={data.wide} />
    <Intro title={['Darauf sind', 'wir stolz']} />
    <Cards
      items={[
        { image: data.p1, title: 'Maserungstreue', text: 'Sie macht aus einer Holzfront eine stolze Holzfront. Wir suchen Holzrohlinge persönlich aus und fügen sie zu einem schönen Bild zusammen. So „malen“ Tischler.' },
        { image: data.p2, title: 'Funktionsdetails', text: 'Wir planen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raffinierte Innovationen und architektonisches Gespür machen es möglich. Wenn es keine gute Lösung gibt am Markt, dann erfinden wir eine. Dennoch sind wir keine „Erfinder“. Das österreichische Wort dafür ist „Tüftler“. Bei Lösungen im Detail sind wir „Holz-Tüftler“' },
        { image: data.p3, title: 'Pure Qualität', text: 'Pures Wasser ist kristallklar. Purer Fruchtsaft intensiv und unverfälscht. Pures Design geradlinig und dem Auge wohltuend, oft überraschend einfach. Pure Qualität ist alles zusammen: klar, intensiv, unverfälscht und wohltuend.' },
        { image: data.p4, title: 'Koordination', text: 'Das Zusammenspiel von allen nötigen Gewerken, wie Schlosser, Glaserer, Fliesenleger, Elektriker, auch Künstler und Baumeister und vieles mehr gehört geplant und organisiert. Auch das ist Qualität.' },
      ]}
    />
    <History />
  </Layout>
)

export default Tischlerei

export const query = graphql`
  query tischlereiQuery {
    wide: file(relativePath: { eq: "jh_jungreithmayr_138.jpg" }) { ...Wide }
    half1: file(relativePath: { eq: "jh_jungreithmayr_146.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half2: file(relativePath: { eq: "jh_jungreithmayr_161.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    hobel: file(relativePath: { eq: "hobel.jpg" }) { ...Square }
    p1: file(relativePath: { eq: "stolz.jpg" }) { ...Square }
    p2: file(relativePath: { eq: "stolz2.jpg" }) { ...Square }
    p3: file(relativePath: { eq: "stolz3.jpg" }) { ...Square }
    p4: file(relativePath: { eq: "stolz4.jpg" }) { ...Square }
  }
`
```

The 4-item Cards grid leaves one card alone in row two; that matches the team grid's behaviour in the PDF.

- [ ] **Step 3: Rewrite `src/pages/impressionen.js`**

```js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Gallery from '../components/Gallery'
import { Section } from '../components/Block'

const Impressionen = ({ data }) => (
  <Layout>
    <PageHero bg="rose" color="green" title={['Impressionen']} />
    <Section>
      <Gallery
        photos={data.allImages.edges.sort(
          (a, b) => a.node.modifiedTime < b.node.modifiedTime
        )}
        videos={{
          'IMG_20181009_151421.jpg': 'https://youtu.be/vSA1n667zoo',
        }}
      />
    </Section>
  </Layout>
)

export default Impressionen

export const query = graphql`
  query impressionenQuery {
    allImages: allFile(
      filter: { absolutePath: { regex: "/impressionen/.*/" } }
    ) {
      edges {
        node {
          modifiedTime
          childImageSharp {
            gatsbyImageData(width: 1280)
          }
        }
      }
    }
  }
`
```

The existing sort comparator (returns a boolean) is kept as-is; it is out of scope.

- [ ] **Step 4: Drop Typography from `src/components/Gallery.js`**

Remove the line `import Typography from '../utils/typography'` and in `Frame` replace

```js
  padding: 0 0.2rem ${Typography.rhythm(0.25)} 0.2rem;
```

with

```js
  padding: 0 0.2rem 0.4rem 0.2rem;
```

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 6: Visual check**

Run (background): `npm run develop`, open `http://localhost:8000` and check `/tischlerei` and `/impressionen` (lightbox opens) at 1440px and 375px against the PDF renders: header readable over the hero, small logo on non-home pages, active nav link underlined, no horizontal scroll at 375px, hamburger opens/closes, links go to the right targets. Pages not in this MR still show the old design; that is expected. Fix deviations in this task's files before committing. Stop the dev server afterwards.

- [ ] **Step 7: Commit**

```bash
git add src/pages/tischlerei.js src/pages/impressionen.js src/components/Gallery.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Restyle Tischlerei and Impressionen in the JUNG* design"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-page-tischlerei-impressionen`.

---

### Task 10: Holzarchitektur, Impressum, Datenschutz, 404 (MR `feat/jung-page-holzarchitektur-legal`)

Branch base: `origin/master` after Task 8 is merged.

**Files:**
- Rewrite: `src/pages/holzarchitektur.js`, `src/pages/impressum.js`, `src/pages/404.js`
- Modify: `src/pages/datenschutz.js` (wrapper only)

**Interfaces:**
- Consumes: `PageHero`, `Intro`, `Cards`, `TextLink`, `FullImage`, `ImagePair`, `Prose`, `Section`, fragments `Square`/`Wide` (Task 8).

- [ ] **Step 1: Branch**

```bash
git fetch -q origin
git switch -c feat/jung-page-holzarchitektur-legal origin/master
```

- [ ] **Step 2: Rewrite `src/pages/holzarchitektur.js`**

```js
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import TextLink from '../components/TextLink'
import { FullImage, ImagePair } from '../components/Block'

const Holzarchitektur = ({ data }) => (
  <Layout>
    <PageHero title={['Holzarchitektur']} />
    <Intro lead="Wir planen elegante Massivholzhäuser mit unnachahmlicher Wohnatmosphäre. Raffinierte Innovationen und architektonisches Gespür machen es möglich." />
    <ImagePair images={[data.half1, data.half2]} />
    <FullImage image={data.wide} />
    <Intro
      title={['Besichtigen']}
      lead="Fotos sind gut. Die Qualität von Holzarchitektur kann man aber nur im Raum erspüren. Deshalb laden wir Sie herzlich zu einem persönlichen Besuch zu uns nach Thening ein. Warnung: Das wird Sie begeistern!"
      link={<TextLink to="/kontakt">Termin vereinbaren</TextLink>}
    />
    <ImagePair images={[data.half3, data.half4]} />
    <Intro title={['Massiv', 'Holz', 'Architektur']} />
    <Cards
      items={[
        { image: data.p1, title: 'Pures Holz', text: 'Eine Wand aus Holz: Höchste Stabilität, perfekte Dämmwerte, elegante Konstruktion. Unsere Planungen reizen die enormen Werkstoffvorteile aus und ermöglichen eine unvergleichliche konstruktive Befreitheit: Keine Kältebrücken, dadurch schlankes Architekturdesign, extrem hohe Belastbarkeit, hohe Spannweiten und Auskragungen möglich.' },
        { image: data.p2, title: 'Wohlfühlatmosphäre', text: '„Ich habe mir nicht gedacht, dass so viel Holz so schön ist“, ist der häufigste Satz, den wir von BesucherInnen hören. Bei elegantem Design ist die Atmosphäre im Holzhaus freundlich, beruhigend, wohltuend und nachweislich gesund. Dennoch kann jede Wand gemalt oder verkleidet werden. Ganz nach Geschmack.' },
        { image: data.p3, title: 'Leichte Bearbeitbarkeit', text: 'Alle Leitungen können unaufwändig eingefräst werden, sie sind nachträglich einfach veränder- und erweiterbar, Bohren und Schrauben ohne Mauerdübel vereinfacht alle Montagen.' },
        { image: data.p4, title: 'Silber und Gold', text: 'Die Holzwände können auch außenseitig ganz pur und unbehandelt bleiben. Denn die Natur sorgt mit dem silbrigen Verwitterungsprozess an der Oberfläche für eine natürliche Schutzschicht, sodass das Regenwasser nie tiefer in die Wand eindringen kann. So sorgt der natürliche Werkstoff selbst für eine perfekte Lösung.' },
      ]}
    />
  </Layout>
)

export default Holzarchitektur

export const query = graphql`
  query architekturQuery {
    wide: file(relativePath: { eq: "jh_jungreithmayr_008.jpg" }) { ...Wide }
    half1: file(relativePath: { eq: "jh_jungreithmayr_007.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half2: file(relativePath: { eq: "jh_jungreithmayr_005.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half3: file(relativePath: { eq: "bauen_001.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    half4: file(relativePath: { eq: "bauen_003.jpg" }) {
      childImageSharp { gatsbyImageData(width: 800, aspectRatio: 1.5) }
    }
    p1: file(relativePath: { eq: "jh_jungreithmayr_115.jpg" }) { ...Square }
    p2: file(relativePath: { eq: "jh_jungreithmayr_077.jpg" }) { ...Square }
    p3: file(relativePath: { eq: "jh_jungreithmayr_072.jpg" }) { ...Square }
    p4: file(relativePath: { eq: "jh_jungreithmayr_082.jpg" }) { ...Square }
  }
`
```

The old "Terminvereinbarung … unter 07221 63016" line is dropped because the link and the footer phone cover it.

- [ ] **Step 3: Rewrite `src/pages/impressum.js`**

```js
import React from 'react'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import { Prose } from '../components/Block'

const Impressum = () => (
  <Layout>
    <PageHero title={['Impressum']} />
    <Prose>
      <p>
        Jungreithmayr Tischlerei GmbH
        <br />
        <br />
        Tischlerstraße 6<br />A - 4062 Kirchberg-Thening
        <br />
        <br />
        Tel.:0043 7221 63 0 16
        <br />
        Fax.:0043 7221 63 0 61
        <br />
        <br />
        tischler@thening.at
        <br />
        <br />
        ATU 81099534
      </p>
    </Prose>
  </Layout>
)

export default Impressum
```

The Impressum keeps `tischler@thening.at` because it is the legal record; changing it is the client's call.

- [ ] **Step 4: Wrap `src/pages/datenschutz.js`**

Change only the wrapper: add imports, replace the opening `<div style={{ padding: '16px' }}>` + `<h1>Datenschutzerklärung</h1>` and the matching closing `</div>`.

```js
import React from 'react'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import { Prose } from '../components/Block'

const Datenschutz = () => (
  <Layout>
    <PageHero title={['Datenschutz']} />
    <Prose>
      {/* existing <p>/<h3> content unchanged */}
    </Prose>
  </Layout>
)
```

Do this with two exact edits, not by retyping the 950-line body:
- `    <div style={{ padding: '16px' }}>\n      <h1>Datenschutzerklärung</h1>` → `    <PageHero title={['Datenschutz']} />\n    <Prose>`
- the last `    </div>\n  </Layout>` → `    </Prose>\n  </Layout>`

- [ ] **Step 5: Rewrite `src/pages/404.js`**

```js
import React from 'react'
import Layout from '../components/JungLayout'
import PageHero from '../components/PageHero'
import TextLink from '../components/TextLink'
import { Section } from '../components/Block'

const NotFoundPage = () => (
  <Layout>
    <PageHero title={['Seite nicht', 'gefunden']} />
    <Section>
      <TextLink to="/">Zur Startseite</TextLink>
    </Section>
  </Layout>
)

export default NotFoundPage
```

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 7: Visual check**

Run (background): `npm run develop`, open `http://localhost:8000` and check `/holzarchitektur`, `/impressum`, `/datenschutz`, `/does-not-exist` at 1440px and 375px against the PDF renders: header readable over the hero, small logo on non-home pages, active nav link underlined, no horizontal scroll at 375px, hamburger opens/closes, links go to the right targets. Pages not in this MR still show the old design; that is expected. Fix deviations in this task's files before committing. Stop the dev server afterwards.

- [ ] **Step 8: Commit**

```bash
git add src/pages/holzarchitektur.js src/pages/impressum.js src/pages/datenschutz.js src/pages/404.js
QC_MR_SIZE_CONFIRMED=1 git commit -m "Restyle Holzarchitektur, legal pages and 404 in the JUNG* design"
```
Tier 2 per the MR plan (confirmed by the developer). Do not push; the controller pushes `feat/jung-page-holzarchitektur-legal`.

---

## Deferred (out of scope): cleanup

After all 10 MRs are merged: delete the old components (`layout.js`, `header.js`, `Footer.js`, `section.js`, `ImageSlider.js`, `History.js`, `Team.js`, `hero.js`, `image.js`, `sectiontopics.js`, `CallToContact.js`, `CallToAction.js`, `HeroText.js`, `Wisdom.js`, `Zitat.js`, `Mitarbeiter.js`, `Article.js`, `BackgroundImage.js`, `LabeledImage.js`, `Grid.js`, `BulletPoint.js`, `topicheader.js`, `FacebookVideo.js`, `VideoGallery.js`, `slick-theme.css`, `icons/`), unreferenced images, Raleway/Lora fonts, old `Theme` keys and `@font-face`s, `typography.js` and its packages/plugin; rename `JungLayout`/`JungHeader`/`JungFooter` if wanted. About 9 MRs under the size limit, or one with management approval.
