# MIGRATIE — nentjes.nl → v2 "De Werkplaats van Morgen"

Status: **preview-fase**. `www.nentjes.nl` is NIET gewijzigd.

## Bron
- Repo: `nentjes/website`, branch **`nentjes-v2-preview`** (orphan, alleen v2-bron).
- Preview-commit: `51ed6c1`.
- Stack: vinext (Next.js op Vite) → Cloudflare **Worker** + statische assets. Geen D1/KV/R2 nodig voor de homepage.
- Validatie op deze commit: `npm install` ✓ · `npm run lint` ✓ · `npm test` (build + gerenderde-HTML-test) ✓.
- Correcte links aanwezig & getest: `https://demo-delocatiemanager.nentjes.nl/` en `https://2route.nl/nl/`.
- De "meergebruikersapp"-claim komt nergens voor.

## Preview publiceren (Cloudflare Workers Builds — dashboard)
Account-niveau: **Workers & Pages → Create → Workers → Import a repository**.
| Instelling | Waarde |
|---|---|
| Repository | `nentjes/website` |
| Branch | `nentjes-v2-preview` |
| Root directory | `/` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy --config dist/server/wrangler.json` |
| Node-versie (env var, indien nodig) | `NODE_VERSION = 22` |

Deploy maakt Worker **`nentjes-v2`** → preview op `https://nentjes-v2.<subdomein>.workers.dev`.
**Geen custom domain / route naar www koppelen** tot goedkeuring.

## Routematrix (na goedkeuring, Fase 3)
| Route / dienst | Status |
|---|---|
| `www.nentjes.nl` hoofdsite | **vervangen** door v2 |
| `www.nentjes.nl/admin` | **vervallen** (goedgekeurd) |
| `www.nentjes.nl/boekhouding` | **vervallen** (goedgekeurd) — ⚠️ data staat in browser-localStorage; exporteer vóór flip |
| `www.nentjes.nl/pharos-pictogram` | **vervallen** (goedgekeurd) |
| `www.nentjes.nl/presentatie` | **vervallen** (goedgekeurd) |
| `www.nentjes.nl/workshop` | **vervallen** (goedgekeurd) |
| `demo-delocatiemanager.nentjes.nl` | **behouden** (apart subdomein) |
| `2route.nl` (Worker `2route`) | **behouden** (ander domein) |
| Workers: `mapsinfo`, `kindertekening-service`, `dlm-email-worker`, `website`, `website1`, e.a. | **behouden** |
| D1: `administratie-*`, `kindertekening-service`, `kampvuur-crm-*` · KV: `moneybird-queue`, `CACHE` | **behouden** |
| MX / TXT / DNS e-mail | **ongemoeid** |

## Huidige inrichting (Fase 1 — DNS vastgelegd 2026-08-19)
- Zone `nentjes.nl`: free, DNS Setup **Full**. 16/200 records.
- **`www.nentjes.nl` = Worker `website1`** (Proxied) ← de huidige live site.
- **Apex `nentjes.nl` heeft GEEN web-record** (A/AAAA/CNAME) → site draait alleen op `www`.
- Preview v2: Worker **`nentjes-v2`**, branch `nentjes-v2-preview`, actieve versie `707a6802` (commit `e8d7032`) → `https://nentjes-v2.roelnentjes.workers.dev/`.
- Subdomeinen (aparte Pages-projecten, **behouden**):
  - `administratie` → administratie-1zo.pages.dev
  - `delocatiemanager` → delocatiemanager.pages.dev
  - `demo-delocatiemanager` → kampvuur-crm-demo.pages.dev
  - `hetkampvuur` → nentjes.pages.dev
  - `moneybird` → moneybird-kampvuur.pages.dev
  - `roelbot` → roelbot.pages.dev
- **E-mail (NIET aanraken):**
  - MX `nentjes.nl` → chocobo.mxrouting.net (10), chocobo-relay.mxrouting.net (20)
  - MX `delocatiemanager.nentjes.nl` → route1/2/3.mx.cloudflare.net
  - TXT SPF `nentjes.nl` (`v=spf1 …`), TXT DKIM `x._domainkey`, TXT DMARC `_dmarc`, TXT `_da-verify… domain-verified`

## Fase 3 — www omzetten (pas na goedkeuring van de preview)
De flip = `www.nentjes.nl` herbinden van Worker `website1` naar Worker `nentjes-v2`.
1. **Ontkoppel** `www.nentjes.nl` als Custom Domain bij Worker **`website1`** (Settings → Domains & Routes → Remove).
2. **Koppel** `www.nentjes.nl` als Custom Domain bij Worker **`nentjes-v2`** (Domains → Add → Custom Domain). Cloudflare zet cert + DNS-record automatisch.
3. **Raak niets anders aan**: alle MX/TXT (e-mail) en de 6 subdomein-CNAMEs blijven staan.
4. Controleer na ~1–2 min: `https://www.nentjes.nl/` (hard refresh), NL/EN, links, social-preview + alle subdomeinen + e-mail.

## Rollback
- Worker `website1` (huidige site) en `main` + branch `archief-oude-website` blijven ongemoeid.
- Terugdraaien = Custom Domain `www.nentjes.nl` weer **verwijderen** bij `nentjes-v2` en **opnieuw toevoegen** bij `website1`. `www` valt dan terug op de huidige, ongewijzigde site.

## Beperkingen van deze uitvoering
Claude's Cloudflare-verbinding is alleen-lezen voor Workers en heeft geen DNS-, Pages- of deploy-tools. Preview-deploy en de uiteindelijke www-flip gebeuren daarom via het Cloudflare-dashboard door Roel.
