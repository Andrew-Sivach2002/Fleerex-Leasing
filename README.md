# Fleetrex Leasing LLC — Website

Official marketing website for **Fleetrex Leasing LLC**, a semi tractor leasing company based in Charlotte, North Carolina.

It's a one-page site built with plain HTML and CSS plus a few lines of JavaScript for the mobile menu. There's no framework and no build step.

## File structure

```
index.html                       The whole website (all sections)
css/styles.css                   All styling (colors, fonts, layout)
js/main.js                       Mobile menu + footer year
images/
  favicon.svg                    Browser tab icon
  hero-truck-placeholder.svg     Big image at the top of the page
  truck-01-placeholder.svg       Image in the "Our equipment" card
.nojekyll                        Tells GitHub Pages to serve files as-is
.gitignore                       Files git should ignore
```

Repository: https://github.com/Andrew-Sivach2002/Fleetrex-Leasing
Live site: https://andrew-sivach2002.github.io/Fleetrex-Leasing/

## Open the site on your computer

1. Download or clone this repository.
2. Double-click `index.html`. It opens in your web browser.

That's all you need. After editing a file, save it and refresh the browser.

## Common edits

All text is in `index.html`. Each section starts with a comment like `<!-- 4. OUR EQUIPMENT -->`, which makes it easy to find.

### Replace the placeholder photos

1. Put your photo in the `images/` folder. Use a simple lowercase name with no spaces, e.g. `truck-01.jpg`.
   - Use landscape photos. About **1600 px wide** is plenty.
   - Keep each file under about **300 KB** so the page loads fast. A free tool like https://squoosh.app can compress it.
2. In `index.html`, find the matching `<img src="images/...-placeholder.svg" ...>` line and change it:
   ```html
   <img src="images/truck-01.jpg" alt="White 2020 Freightliner Cascadia semi tractor" width="1600" height="1000" loading="lazy">
   ```
   - The `alt` text describes the photo for screen readers and search engines.
   - `width` and `height` should match the photo's real size in pixels.
3. Delete the old placeholder file if you no longer need it.

### Decorative stock photos and animated trucks

- The photo band below "How it works" shows three decorative illustrations: `images/scene-sunrise.svg`, `scene-night.svg` and `scene-day.svg`. `scene-night.svg` is also the faint background of the Contact section (set in `css/styles.css`). They are **not our fleet**, so they have no captions.
- To use real stock photos instead: add them to `images/` (each under **400 KB**), then replace the three `scene-....svg` names in `index.html`, and the one in `css/styles.css`.
- The small blue trucks (under "How it works" and above the footer) are a drawing inside `index.html` (look for `<symbol id="truck">`). They are decoration only. Visitors who turn on "reduce motion" on their device see them parked instead of moving.

### Fill in truck specifications

In the "Our equipment" section, replace each `To be announced` with the real value (Make / model, Year, Engine, Transmission). To add another truck later, copy the whole `<article class="truck-card"> ... </article>` block and paste it right below.

### Change the email or phone number

Search `index.html` for `andrewsuvach@gmail.com` and `9802440336` / `(980) 244-0336` and replace every match. The email appears in the contact section and in the note under the form.

### Change colors

The colors are defined at the top of `css/styles.css` (`--bg`, `--blue`, `--green`, etc.). Change them in that one place.

## Connecting the contact form

GitHub Pages can't send email by itself, so the form uses **[Formspree](https://formspree.io)**, a free service that forwards form submissions to your email inbox. The free plan covers a small number of submissions per month.

1. Go to https://formspree.io and sign up with your business email.
2. Click **New form**, name it "Fleetrex website", and choose the email address where messages should go.
3. Formspree shows a form endpoint like `https://formspree.io/f/abcdwxyz`. The last part (`abcdwxyz`) is your **form ID**.
4. In `index.html`, find this line:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and replace `YOUR_FORM_ID` with your ID.
5. Publish the change (see below), then send yourself a test message from the live site. The first time, Formspree asks you to confirm the form by email.

**Until you do this, the form will not work.** Visitors can still use the email and phone links, which work right away.

**Prefer no third-party service?** You can make the form open the visitor's email app instead by changing the form tag to:
```html
<form class="contact-form" action="mailto:andrewsuvach@gmail.com" method="POST" enctype="text/plain">
```
This is less reliable, because it depends on the visitor having an email app set up.

## Publishing with GitHub Pages

Short version:

1. Merge your changes into the `main` branch.
2. On GitHub, open the repository's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Wait 1–2 minutes, then refresh the page. GitHub shows the address of your live site: **https://andrew-sivach2002.github.io/Fleetrex-Leasing/**

Every time you push a change to `main`, the site updates automatically within a minute or two.

**Still seeing an old version?** Your browser may be using a cached copy. Do a hard refresh (**Ctrl+Shift+R** on Windows, **Cmd+Shift+R** on Mac; on a phone, close the tab and reopen it) or open the site in a private window. When you change `css/styles.css` or `js/main.js`, also bump the `?v=` number on their lines in `index.html` (e.g. `?v=4` → `?v=5`) so visitors get the new files right away.

### Using your own domain (optional)

If you buy a domain such as `fleetrexleasing.com`, enter it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
