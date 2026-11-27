# Chehar CRM — Prototype

Dealer · Dukandar · Quotation · Courier-dispatch CRM prototype for **Chehar Detergent Pvt Ltd**, built by **Sangam InfoAnalytics**.

Single-file web app (`public/index.html`) with demo data. No backend, no login — pick a role on the start page.

## Roles (start page)
| Role | Opens |
|---|---|
| Owner / Admin | Head-office console, all modules |
| Sales Manager | Order inbox, quotations, deals |
| Dispatch Manager | Dispatch & courier (AWB, delivery date) |
| Dealer — Shree Ganesh Traders | Dealer portal + **My dukandars** + **Dukandar orders** |
| Dukandar — Patel Provision Store | Shop portal: order from dealer |
| Customer — Priya Mehta | Customer portal |

## Run locally
Open `public/index.html` in a browser — nothing to install.

## Deploy to Cloudflare (Workers + static assets)
```bash
npm install
npx wrangler login
npx wrangler deploy
```
Default URL: `https://chehar-crm-prototype.<your-subdomain>.workers.dev`

### Or Cloudflare Pages (Git-connected)
Pages → Create project → connect this repo → Build command: *(none)* → Build output directory: `public`.

## Version
v1.4 — 27 Nov 2026 — adds Dukandar layer (dealer-managed shop logins, shop orders), courier/AWB dispatch, white enterprise UI.

---
© Sangam InfoAnalytics · prototype for client evaluation only · all data is demo data.
