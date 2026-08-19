# Opdracht voor Claude — nieuwe nentjes.nl veilig overzetten

## Doel

Vervang uitsluitend de huidige homepage/hoofdsite van `www.nentjes.nl` door de nieuwe website **De Werkplaats van Morgen**, zonder bestaande subdomeinen, applicaties, directoryroutes, redirects, formulieren of e-mail/DNS te verstoren.

De gevalideerde nieuwe bron staat in de map `nentjes-v2`. De site is een Vinext/React-project en bouwt met:

```bash
npm install
npm test
```

Gebruik jouw bestaande verbindingen met GitHub en Cloudflare. Voer geen onomkeerbare wijziging uit zonder eerst de feitelijke huidige inrichting vast te leggen.

## Eerst inventariseren — nog niets wijzigen

1. Bepaal welk GitHub-repository, welke branch en welk Cloudflare Pages- of Workers-project momenteel `www.nentjes.nl` bedienen.
2. Exporteer of noteer alle DNS-records voor `nentjes.nl`, inclusief CNAME-, A-, MX-, TXT- en wildcardrecords.
3. Inventariseer alle expliciete en wildcard-subdomeinen onder `*.nentjes.nl`, waaronder in ieder geval `demo-delocatiemanager.nentjes.nl`.
4. Inventariseer alle bestaande routes achter `www.nentjes.nl/...`, redirects, Functions/Workers-routes en statische mappen.
5. Controleer of bepaalde applicaties dezelfde Cloudflare-worker, Pages-build, KV, D1, R2, environment variables, secrets of service bindings delen.
6. Leg de huidige productiecommit, buildconfiguratie en een werkend rollbackpunt vast.

Lever eerst een compact inventarisatierapport op met: huidige bron, hostingproject, domeinkoppelingen, risicoroutes en voorgestelde migratiestrategie.

## Veilige migratiestrategie

1. Importeer of kopieer de inhoud van `nentjes-v2` naar de juiste GitHub-repository of een veilige nieuwe branch.
2. Laat alle bestaande subdomeinen en achterliggende applicaties ongemoeid.
3. Beperk de vervanging tot de hoofdroutes die aantoonbaar bij de oude publieke website horen.
4. Publiceer eerst op een afzonderlijke preview-URL of preview-branch.
5. Controleer daar Nederlands/Engels, navigatie, mobiel gedrag, afbeeldingen, externe projectlinks en het contactformulier.
6. Maak een routematrix: iedere bestaande belangrijke URL krijgt `behouden`, `vervangen`, `redirect` of `nader onderzoeken`.
7. Koppel `www.nentjes.nl` pas na expliciete goedkeuring van Roel aan de nieuwe build.
8. Houd een directe rollback naar de huidige productiecommit gereed.

## Functionele eisen nieuwe site

- Hoofdrichting: **De Werkplaats van Morgen**.
- Kernidentiteit: manager / maker / onderzoeker.
- Hoofdroutes in het aanbod: presentatie en workshop; AI- of robotverkenning; architectuur en roadmap; programma- en projectleiding.
- Methode: Zien → Modelleren → Standaardiseren → Automatiseren → Leren.
- Correcte 2Route-link: `https://2route.nl/nl/`.
- Correcte demonstratielink De Locatiemanager: `https://demo-delocatiemanager.nentjes.nl/`.
- De Sité/Access-claim over een “meergebruikersapp” mag nergens als Roels eigen werk worden gebruikt.
- Contactformulier en rechtstreeks contact moeten blijven werken.
- Bestaande subdomeinen, directoryapplicaties, DNS voor e-mail en andere diensten mogen niet stilzwijgend worden aangepast.

## Acceptatiecriteria

- `npm test` slaagt op de exact te publiceren commit.
- Geen bestaande geïnventariseerde subsite of applicatie is onbereikbaar geworden.
- Er zijn geen wildcard-DNS- of Worker-routes verruimd of overschreven.
- Alle gewijzigde hoofdroutes geven een correcte `200` of bewuste redirect.
- Het contactformulier is end-to-end getest zonder echte ongewenste berichten te versturen.
- De productiecommit, preview-URL, routematrix en rollbackinstructie zijn vastgelegd.
- Pas na goedkeuring wordt de hoofddomeinkoppeling omgezet.
