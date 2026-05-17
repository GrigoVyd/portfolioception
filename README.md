# Grigorii Vydrevich — Portfolio

Personal portfolio site for Grigorii Vydrevich, Physicist and Machine Learning Engineer.

**Live site:** https://grigovyd.github.io/portfolioception

## Stack

- React 18 · Parcel 2 · plain CSS
- Deployed automatically to GitHub Pages on every push to `main`

## Developing locally

```bash
npm install
npm start        # dev server at http://localhost:1234
```

## Adding new entries

All CV items live in one file: [`src/data/portfolioData.js`](src/data/portfolioData.js)

Append an object to the `items` array:

```js
{
  id:          'unique-slug',
  type:        'experience' | 'education' | 'project' | 'award' | 'event',
  date:        '2026',
  title:       'Entry title',
  subtitle:    'Organisation · Location',
  description: 'One-paragraph summary.',
  tags:        ['quantum', 'ml', 'photonics', ...],   // see TAGS in the same file
  goals:       ['research', 'ml-engineer', ...],       // controls CV download filter
  highlight:   true,                                   // shows gold star & border
  url:         '',                                     // optional link on title
}
```

Available tag keys: `quantum` · `ml` · `robotics` · `physics` · `photonics` · `software` · `hardware` · `competition`

Available goal keys: `research` · `ml-engineer` · `robotics-engineer` · `quantum-engineer` · `photonics-rd`

## Deploying

Push to `main` — GitHub Actions builds and deploys automatically.

> **First-time setup:** go to **Settings → Pages → Source** and set it to **GitHub Actions**.
