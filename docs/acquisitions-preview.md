# Acquisition page preview

The seller-facing page is published at <https://justalever.com/acquisitions/>. It has its own layout and stylesheet and does not change the personal site's homepage or navigation. The existing public email and local portrait are reused.

From the project root:

```sh
hugo server --bind 127.0.0.1 --port 1313 --baseURL http://127.0.0.1:1313/ --watch=false --disableLiveReload --destination /tmp/justalever-acquisitions-preview
```

Open <http://127.0.0.1:1313/acquisitions/>. Watching and live reload are disabled to keep resource use low; restart the preview after edits.

## Edit and check

- Copy: `content/acquisitions/index.md`
- Page layout: `layouts/_default/acquisitions.html`
- Isolated styles: `assets/css/acquisitions.css`

```sh
corepack yarn build
git diff --check
```

The production build includes the page with its canonical URL. It stays out of the site's page lists. It uses local assets and system fonts, with no JavaScript, contact service, or analytics. All contact links open an email draft to `hey@justalever.com`.

## Deployment

Pushing to `main` runs the existing GitHub Actions `Deploy` workflow, which builds Hugo and publishes through Wrangler to the site's existing Cloudflare Worker. The page needs no new route configuration. No acquisition subdomain has been selected; any future hostname or DNS change is separate from this page.
