# Yuanhang Zhou · Personal Portfolio

Static GitHub Pages website at https://oniszczukthommy-wq.github.io/.

A terminal launch screen opens a desktop-style portfolio with About, Product, Tool, Notes, and Contact views. Includes four product cases, two workbench prototypes, ten article links, and personal contact channels. The layout and interaction are inspired by HiWhaleW’s portfolio; all copy, project illustrations, article artwork, portrait, and links are specific to Yuanhang Zhou.

## Preview

Run `python3 -m http.server 8766` from the repository root. Open http://localhost:8766. No build step or dependencies are required.

## Editing

- `index.html`: about and contact content, navigation and page shell.
- `assets/app.js`: project and article data, launch screen, navigation, keyboard and touch carousels.
- `assets/style.css`: desktop and mobile layout, transitions, reduced-motion support.
- `assets/cover-*.svg` and `assets/note-*.svg`: original conceptual illustrations and article artwork, not product screenshots.

Each view has a direct URL (`#about`, `#product`, `#tool`, `#notes`, `#contact`). Carousels support arrow buttons, neighboring-card selection, left/right keys, and touch swipes. Public showcase links are used where source repositories are private. Product status labels distinguish local prototypes, the live Shot Agent demo, and the mock vision workflow. Publishing main deploys via GitHub Pages.
