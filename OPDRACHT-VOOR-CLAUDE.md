# Kopieerbare opdracht voor Claude

Claude, zet **versie 2 van de nieuwe website van Roel Nentjes — De Werkplaats van Morgen** veilig online via de bestaande GitHub- en Cloudflare-omgeving.

## Bron die gepubliceerd moet worden

De volledige gevalideerde bron staat lokaal in:

`/Users/1roel/Mijn Drive/Presentatie/nentjes-v2`

Gebruik deze map als inhoudelijke en visuele waarheid. Neem geen teksten, styling of componenten over van de oude homepage wanneer die hiermee conflicteren.

De site is een Vinext/React-applicatie voor Cloudflare. Controleer de bron met:

```bash
npm install
npm run lint
npm test
```

Publiceer alleen de exact geteste commit. Corrigeer eventuele echte build- of hostingproblemen, maar verander niet zelfstandig de merkstijl, teksten, navigatie of propositie.

## Doel

Vervang de oude publieke hoofdsite van `www.nentjes.nl` door deze nieuwe versie, met als merkbasis:

- **De Werkplaats van Morgen**;
- Roel als **manager / maker / onderzoeker**;
- presentaties en workshops;
- AI- en robotverkenningen;
- architectuur en roadmaps;
- programma- en projectleiding;
- bewijs door echte projecten en zelfgebouwde toepassingen.

De nieuwe homepage moet Nederlands en Engels blijven ondersteunen. De juiste projectlink voor 2Route is `https://2route.nl/nl/`. De juiste openbare demonstratielink voor De Locatiemanager is `https://demo-delocatiemanager.nentjes.nl/`.

## Kritische veiligheidsvoorwaarde

Onder `nentjes.nl` bestaan meerdere zelfstandige toepassingen:

- subdomeinen zoals `xxx.nentjes.nl`, waaronder `demo-delocatiemanager.nentjes.nl`;
- applicaties en pagina's in mappen zoals `www.nentjes.nl/xxx/`;
- mogelijk Workers-routes, Pages-projecten, redirects, Functions, DNS-records, environment variables, KV-, D1- of R2-koppelingen;
- e-mailafhankelijke MX- en TXT-records.

Deze mogen niet verdwijnen, verhuizen of anders gaan routeren doordat de homepage wordt vervangen. Wijzig geen wildcard-DNS-record, wildcard-Worker-route, e-mailrecord, subdomeinkoppeling of gedeelde servicebinding zonder aantoonbare noodzaak en expliciete toestemming van Roel.

## Fase 1 — inventariseren, nog niets wijzigen

1. Bepaal welk GitHub-repository, welke branch en welk Cloudflare Pages- of Workers-project momenteel `www.nentjes.nl` bedienen.
2. Leg de actuele productiecommit en buildconfiguratie vast.
3. Inventariseer alle DNS-records voor `nentjes.nl`, inclusief wildcards, MX en TXT.
4. Inventariseer alle Cloudflare custom domains, routes, redirects en bindings die aan het hoofddomein of subdomeinen hangen.
5. Inventariseer bestaande belangrijke routes achter `www.nentjes.nl/`.
6. Noteer welke onderdelen dezelfde repository, worker of Cloudflare-resources delen.
7. Maak vóór iedere wijziging een bruikbaar rollbackpunt.

Geef Roel eerst een kort rapport met:

- huidige GitHub-bron en productiebranch;
- huidige Cloudflare-inrichting;
- gevonden subdomeinen en belangrijke directoryroutes;
- risico's of conflicten;
- voorgestelde migratie- en rollbackmethode.

## Fase 2 — preview publiceren

1. Plaats de nieuwe bron in de juiste GitHub-repository of in een veilige nieuwe branch.
2. Behoud bestaande bestanden en routeafhandeling die nodig zijn voor subdomeinen en directoryapplicaties.
3. Publiceer eerst een afzonderlijke Cloudflare-preview zonder `www.nentjes.nl` om te zetten.
4. Controleer op de preview:
   - homepage en alle secties;
   - Nederlands/Engels;
   - desktop en mobiel;
   - navigatie en interactieve methode;
   - afbeeldingen;
   - 2Route, De Locatiemanager, Kindertekening en Autestme;
   - contactformulier en rechtstreekse contactlinks;
   - titel, beschrijving en social-preview-afbeelding.
5. Maak een routematrix waarin iedere bestaande belangrijke route de status `behouden`, `vervangen`, `redirect` of `nader onderzoeken` krijgt.
6. Laat Roel de preview beoordelen voordat de hoofddomeinkoppeling verandert.

## Fase 3 — gecontroleerd naar productie

Na goedkeuring van Roel:

1. Publiceer de exact goedgekeurde en geteste commit.
2. Vervang uitsluitend de hoofdpagina's die bij de oude publieke website horen.
3. Laat bestaande subdomeinen, directoryapplicaties, API-routes en e-mail-DNS ongemoeid.
4. Controleer direct na publicatie de homepage, belangrijke oude routes en alle geïnventariseerde subsites.
5. Draai bij een ernstige fout onmiddellijk terug naar het vastgelegde rollbackpunt.

## Inhoudelijke grenzen

- Gebruik nergens de Sité/Access-claim over een “meergebruikersapp” als persoonlijk werk van Roel; het gevonden brondocument noemt een andere auteur.
- Maak van de site geen generieke AI-consultancysite en geen corporate architectuurbureau.
- Bewaar de gekozen werkplaatsstijl: antraciet, werkbankgeel, gedempt cyaan, tastbare kaarten, technische labels en echte projectbeelden.
- Strategie en architectuur zijn gereedschap in de werkplaats, niet de afstandelijke uitstraling van het merk.
- Verander geen contactgegevens of formulierbestemming zonder toestemming.

## Definitie van klaar

- De gevalideerde build staat op GitHub en Cloudflare.
- Roel heeft eerst een werkende preview gezien en goedgekeurd.
- `www.nentjes.nl` toont daarna versie 2: De Werkplaats van Morgen.
- Alle geïnventariseerde subdomeinen en directoryapplicaties werken nog.
- De routematrix, productiecommit, Cloudflare-deployment en rollbackinstructie zijn vastgelegd.
- Claude rapporteert exact wat is gewijzigd en welke onderdelen bewust ongemoeid zijn gelaten.
