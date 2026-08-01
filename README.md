# Youssef Rezgui — Portfolio (React + Tailwind)

## Kifeh tkhaddem el project fi PC mte3ek

1. Install Node.js (LTS version) ken ma3andekch: https://nodejs.org
2. Fi terminal, ftah el folder mte3 el project w kteb:
   npm install
   npm run dev
3. Ftah el link li y3tik (http://localhost:5173) fi browser.

## Haja lezmek t3amelha

### 1) CV
Zid el fichier PDF mte3 el CV mte3ek fi folder public/assets/ w sammih "cv.pdf" (b7ath bel esm bel dhabt).
El button "Download CV" fi el section About bch ye5dem automatiquement mn ba3d.

### 2) Contact form (bech el messages yeslou lel email mte3ek)
1. Ro7 l formspree.io w a3mel compte majjeni.
2. Créer "New Form", ya3tik link kifha https://formspree.io/f/xxxxxxxx
3. Fi fichier src/components/Contact.jsx, bedel:
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   b link el 7a9i9i mte3ek.

### 3) Projects
El section Projects fiha "Coming Soon" tawa. Ken 3malt project jdid, 7el
src/components/Projects.jsx, temma template mcommenté fi 9me el fichier —
copy el template, badel el image/title/link, w hottou fi <div className="flex justify-center">.

### 4) Certificates
Fi src/components/Certificates.jsx, bedel title w issuer la kol certificat
bel esm el 7a9i9i.

## Build lel production (deployment)

npm run build

Hetha ya3mellek folder dist/ fih el site kombil, jeheez l upload 3la
Netlify, Vercel, ou GitHub Pages.

## Structure

src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Certificates.jsx
    Experience.jsx
    Contact.jsx
    Footer.jsx
    ImageModal.jsx
  App.jsx
  main.jsx
  index.css
public/
  assets/        <- kol el images/video/CV
