# Brainsmith

A word game for 2 to 5 players. Two words in. Meet in the middle.

Everyone secretly picks a word. When the last person locks in, all the words are revealed at once.
Next round, everyone picks a word that connects the words just revealed. Keep going until everyone
says the same word: **Forged!** Words can never be reused.

(Formerly called Samesies. The repo and web address keep the old name so links people already saved still work.)

## How it's built

- Plain HTML/CSS/JS, installable on a phone with "Add to Home Screen"
- Firebase (anonymous sign-in + Firestore) holds games and keeps words hidden until the reveal
- Hosted on GitHub Pages straight from this repo

| File | What it is |
| --- | --- |
| `index.html`, `style.css` | The page and its look |
| `src/main.js` | Screens and game flow |
| `src/logic.js` | Word matching rules (case, spaces and simple plurals don't matter) |
| `dist/app.js` | Built bundle that the page loads (`npm run build`) |
| `firestore.rules` | Security rules; paste into Firebase console → Firestore → Rules |

## Working on it

```sh
npm install
npm test        # word-matching rules
npm run build   # rebuild dist/app.js after changing src/
```
