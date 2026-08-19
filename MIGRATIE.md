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

## Huidige inrichting (Fase 1, voor zover vastgesteld)
- Zone `nentjes.nl`: free, DNS Setup **Full**.
- **Geen Worker aan de zone gekoppeld** ("No Workers connected") → `www` wordt vermoedelijk door een **Pages-project of origin** bediend (nog te bevestigen).
- DNS-records (A/CNAME/MX/TXT/wildcards): **nog niet geïnventariseerd** — buiten bereik van de beschikbare tools; via dashboard vast te leggen.

## Fase 3 — www omzetten (pas na goedkeuring van de preview)
1. Publiceer exact de goedgekeurde, geteste commit.
2. Koppel `www.nentjes.nl` (en/of `nentjes.nl`) aan de `nentjes-v2` Worker via **Custom Domain** of Worker-route.
3. Laat alle andere subdomeinen, workers, D1/KV en e-mail-DNS ongemoeid.
4. Controleer direct na de flip: homepage NL/EN, mobiel, links, social-preview + alle behouden subdomeinen.

## Rollback
- Vorige publieke site blijft in de git-historie (`main`) en de bestaande Pages/origin-inrichting blijft staan.
- Terugdraaien = de in stap 2 toegevoegde Custom Domain / Worker-route voor `www` weer **verwijderen**, zodat `www` terugvalt op de huidige (ongewijzigde) origin/Pages.

## Beperkingen van deze uitvoering
Claude's Cloudflare-verbinding is alleen-lezen voor Workers en heeft geen DNS-, Pages- of deploy-tools. Preview-deploy en de uiteindelijke www-flip gebeuren daarom via het Cloudflare-dashboard door Roel.
