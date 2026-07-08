# Francisca Mbanwusi — personal site

A static site built with **Eleventy** and edited through **Decap CMS**. You create,
edit, and delete posts and change images from an admin dashboard at `/admin`; every
save commits to your Git repo and Netlify rebuilds the site.

## What's here

- `src/` — pages and posts
  - `index.njk` (Home), `about.njk`, `academic.njk`, `professional.njk`, `insights.njk`, `contact.njk`
  - `posts/` — one Markdown file per article
  - `_data/site.js` — your name, role, **email, and LinkedIn URL** (edit LinkedIn here)
  - `_data/settings.json` — homepage portrait (also editable from the CMS)
  - `css/style.css`, `images/`
- `admin/` — the Decap CMS dashboard (`config.yml` defines the post fields)
- `netlify.toml` — build settings

## 1. Put it on GitHub

Create a repo and push these files to it (the `main` branch).

## 2. Connect to Netlify

New site → import from your GitHub repo. Netlify reads `netlify.toml`:
build command `npm run build`, publish directory `_site`. Deploy. The site is now live.

## 3. Turn on the CMS (authentication)

Netlify Identity and Git Gateway are **deprecated**, so this uses **DecapBridge**, the
current free replacement.

1. Go to https://decapbridge.com and create a free account, then **Create New Site**.
2. It gives you an `identity_url`, a `gateway_url`, and asks for your GitHub repo.
3. Open `admin/config.yml` and fill in the top `backend:` block — replace
   `YOUR_GITHUB_USERNAME/YOUR_REPO` and the two `...decapbridge.com...` URLs with the
   values it gave you. Commit.
4. In DecapBridge, invite yourself as a user and set a password.
5. Visit `https://YOUR-SITE/admin/`, log in, and you're in.

(Prefer not to use DecapBridge? You can instead use Decap's GitHub backend with your
own OAuth app — see https://decapcms.org/docs/backends-overview/ .)

## 4. Writing posts

In the dashboard, **Posts → New Post**. Each post supports:

- Title, Subtitle (optional)
- **Section** — Academic Engagement / Professional Practice / Insights (decides which
  page it shows up on)
- Publication date
- Estimated reading time (optional — auto-calculated if left blank)
- Tags (shown Medium-style, e.g. `Health Systems • Health Policy`)
- Cover image and Featured image (optional)
- Body (Markdown / rich text)
- **Published** toggle — turn off to keep it a draft (drafts are hidden from the live site)

Delete or edit any post from the same dashboard.

## 5. Changing the homepage image

Dashboard → **Site → Homepage → Homepage portrait**. Upload a photo or a looping GIF;
the layout adapts to either. (Or replace `src/images/portrait.svg` directly.)

## 6. Editing locally (optional)

```bash
npm install
npm run build      # one-off build into _site/
npm start          # live preview at http://localhost:8080
```

To use the CMS on your machine, add `local_backend: true` under `backend:` in
`admin/config.yml`, run `npx decap-server` in one terminal and `npm start` in another,
then open http://localhost:8080/admin/ .

---

### Things to update before launch
- `src/_data/site.js` → set your real **LinkedIn URL**
- Delete the three `example-*.md` files in `src/posts/` once you've added your own
- Upload your portrait (step 5)
