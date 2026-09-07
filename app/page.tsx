"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ModelPage = "metro" | "togaf" | "architecture" | "people";
type PeopleLayer = "paper" | "people";

const content = {
  nl: {
    nav: [
      ["Aanbod", "#aanbod"], ["Methode", "#methode"], ["Projecten", "#projecten"],
      ["Ervaring", "#ervaring"], ["Over Roel", "#over"],
    ],
    meet: "Kennismaken",
    heroLabel: "Roel maakt morgen werkend",
    heroA: "De werkplaats",
    heroEm: "van",
    heroB: "",
    heroStrong: "morgen.",
    heroLead: "Ik onderzoek, teken, bouw en lever. Van een presentatie die iets losmaakt tot een roadmap, AI-verkenning of digitaal product dat werkelijk gebruikt wordt.",
    explore: "Vraag een verkenning aan",
    book: "Boek een presentatie",
    principle: "Van wat er draait naar wat er werkt.",
    role: "manager / maker / onderzoeker",
    proof: [
      ["Ervaring", "Van COBOL tot AI"], ["Perspectief", "Boardroom tot werkvloer"],
      ["Aanpak", "IST · SOLL · uitvoerbare route"], ["Praktijk", "ICT-leider én maker"],
    ],
    offerLabel: "Leg het op de werkbank",
    offerTitle: "Begin met een vraag. Eindig met iets dat werkt.",
    offerIntro: "Soms begint verandering met een zaal die ineens begrijpt wat AI betekent. Soms met een eerlijk onderzoek naar wat er werkelijk draait. Ik kan bij beide beginnen — en doorpakken tot realisatie.",
    offers: [
      { n: "01", title: "Presentatie & workshop", text: "Een actueel verhaal over AI, agents, robots of digitale zorg — begrijpelijk, eigenzinnig en met demonstraties. Desgewenst gevolgd door een workshop waarin deelnemers zelf ontdekken wat mogelijk is.", tags: "KEYNOTE · LIVE DEMO · WORKSHOP", cta: "Bespreek een presentatie" },
      { n: "02", title: "AI- of robotverkenning", text: "Waar kan technologie werkelijk waarde toevoegen? Ik onderzoek processen, mensen, data, veiligheid, volwassenheid en businesscase — inclusief wat je nog níét moet automatiseren.", tags: "ONDERZOEK · KANSENKAART · ADVIES", cta: "Vraag een verkenning aan" },
      { n: "03", title: "Architectuur & roadmap", text: "Van huidige werkelijkheid naar een gedragen toekomstbeeld. We modelleren de samenhang en vertalen die naar keuzes, afhankelijkheden, projecten en een bestuurbare route.", tags: "IST · SOLL · ENTERPRISE ARCHITECTUUR", cta: "Maak de route zichtbaar" },
      { n: "04", title: "Programma- & projectleiding", text: "Een plan is pas waardevol wanneer het landt. Ik leid digitale projecten van besluit tot oplevering, met duidelijk eigenaarschap, eerlijke voortgang en aandacht voor de mensen die het werk doen.", tags: "REGIE · LEVERANCIERS · REALISATIE", cta: "Bespreek je programma" },
    ],
    path: ["Presentatie", "Workshop", "Verkenning", "Roadmap", "Realisatie"],
    methodLabel: "Op de werkbank",
    methodTitle: "Automatiseer niet wat op papier staat. Begin bij wat er echt gebeurt.",
    methodIntro: "De werkelijkheid verandert sneller dan de inkt droogt. Daarom is de route geen dik rapport, maar een gezamenlijke leerbeweging.",
    methodSteps: [
      { title: "Zien", sub: "De werkelijkheid", text: "Een organisatie heeft niet één werkelijkheid. Er bestaan financiële, juridische, operationele, relationele en informele werkelijkheden naast elkaar. Daarom begin ik met kijken, luisteren en mensen zichtbaar maken: wie doet wat, wie weet wat en wat draait er werkelijk?" },
      { title: "Modelleren", sub: "Samen begrijpen", text: "Een model is niet de waarheid, maar een gedeelde kaart. We verbinden doelen, processen, data, applicaties, infrastructuur, leveranciers en gedrag zodat keuzes bespreekbaar worden." },
      { title: "Standaardiseren", sub: "De basis op orde", text: "Eén betekenis, één betrouwbare bron, duidelijke verantwoordelijkheden, beveiligingshygiëne en zo min mogelijk uitzonderingen. Pas dan kan technologie betrouwbaar versnellen." },
      { title: "Automatiseren", sub: "Passend bij volwassenheid", text: "We kiezen AI, software of robotica die past bij wat de organisatie kan dragen. Tegelijk verhogen we die volwassenheid, zodat de volgende stap wél mogelijk wordt." },
      { title: "Leren", sub: "Blijven verbeteren", text: "Besluiten en gesprekken worden terugvindbaar. We meten, vragen door, erkennen fouten en passen aan. Niet om gelijk te krijgen, maar om elke volgende stap beter te maken." },
    ],
    modelExplainer: {
      open: "Waarom een goede kaart minder waar en toch beter is",
      close: "Sluiten",
      label: "Waarom modelleren werkt",
      pages: [{ id: "metro", label: "De metrokaart" }, { id: "togaf", label: "IST → SOLL met TOGAF" }, { id: "architecture", label: "Voorbeeldroadmap" }],
      metroTitle: "De kaart is niet de werkelijkheid. Dat is precies waarom hij werkt.",
      geographicLabel: "De geografische kaart",
      geographicNote: "Waar de lijnen werkelijk lopen.",
      schematicLabel: "Het schematische model",
      schematicNote: "Hoe reizigers hun route begrijpen.",
      history: "De eerste kaarten van de Londense metro probeerden keurig te laten zien waar de lijnen werkelijk lagen. Harry Beck liet in 1931 de geografie grotendeels los en tekende het netwerk als een elektrisch schema. Minder waarheidsgetrouw — en juist daardoor veel bruikbaarder.",
      organisation: "Zo werkt het ook in organisaties. Een procesmodel is niet het proces en een applicatieplaat is niet het applicatielandschap. Maar een goede vereenvoudiging laat samenhang, overdrachten, dubbel werk, afhankelijkheden en knelpunten ineens zien.",
      metroSource: "Harry Beck ontwierp het diagram in 1931; de eerste uitgave verscheen in 1933. Bron: Transport for London.",
      geographicCredit: "Geografische kaart: Ed g2s en DavidCane · CC BY-SA 3.0",
      schematicCredit: "Schematische kaart: Sameboat · CC BY-SA 4.0",
      togafTitle: "Van IST naar SOLL, over vier architectuurdomeinen.",
      togafIntro: "Gebruik de twee metrokaarten als metafoor. Links staat de huidige werkelijkheid, rechts het gewenste, begrijpelijke landschap. De verandering zit tussen de kaarten.",
      certification: "Roel Nentjes · TOGAF® gecertificeerd",
      domains: [{ label: "Business", note: "Processen, organisatie en besturing" }, { label: "Data", note: "Informatie, gegevens en betekenis" }, { label: "Applicaties", note: "Systemen, diensten en samenhang" }, { label: "Technologie", note: "Infrastructuur, platformen en netwerken" }],
      togafSummary: "Alle vier de lagen moeten samen bewegen. Anders krijg je misschien een mooie nieuwe kaart, maar bereikt de organisatie haar bestemming nooit.",
      togafSource: "De vier TOGAF-domeinen: Business, Data, Application en Technology. Bron: The Open Group.",
      architectureTitle: "Een applicatielandschap is nooit af.",
      architectureIntro: "IST en SOLL zijn momentopnamen. De roadmap ertussen laat zien wat blijft, verandert en verdwijnt — inclusief hosting, levenscyclus, eigenaarschap en licenties.",
      landscapeLabel: "Voorbeeld · fictieve organisatie",
      moving: "altijd in beweging",
      currentTitle: "IST · 2026",
      targetTitle: "SOLL · 2028",
      currentGroups: [
        { title: "Klant & service", apps: [{ name: "CRM Classic", meta: ["EOL", "ON-PREM", "PERPETUAL"] }, { name: "Klantportaal", meta: ["CLOUD", "SAAS"] }] },
        { title: "Bedrijfsvoering", apps: [{ name: "ERP Core", meta: ["ON-PREM", "TERM"] }, { name: "Planning maatwerk", meta: ["EOL", "CUSTOM"] }] },
        { title: "Data & integratie", apps: [{ name: "Datawarehouse", meta: ["ON-PREM", "PERPETUAL"] }, { name: "Puntkoppelingen", meta: ["CUSTOM", "RISICO"] }] },
        { title: "Werkplek & identiteit", apps: [{ name: "Samenwerken", meta: ["CLOUD", "SAAS"] }, { name: "Directory", meta: ["HYBRID", "TERM"] }] },
      ],
      targetGroups: [
        { title: "Klant & service", apps: [{ name: "CRM Platform", meta: ["CLOUD", "SAAS"] }, { name: "Klantportaal", meta: ["CLOUD", "SAAS"] }] },
        { title: "Bedrijfsvoering", apps: [{ name: "ERP Core", meta: ["HYBRID", "TERM"] }, { name: "Planning module", meta: ["CLOUD", "SAAS"] }] },
        { title: "Data & integratie", apps: [{ name: "Dataplatform", meta: ["CLOUD", "PAAS"] }, { name: "Integratieplatform", meta: ["CLOUD", "IPAAS"] }] },
        { title: "Werkplek & identiteit", apps: [{ name: "Samenwerken", meta: ["CLOUD", "SAAS"] }, { name: "Identity", meta: ["CLOUD", "SAAS"] }] },
      ],
      roadmapPhases: [
        { year: "2026", title: "Zien & beslissen", note: "Portfolio, eigenaarschap, versies, licenties en EOL." },
        { year: "2027", title: "Migreren & verbinden", note: "CRM, data en integraties naar de doelplatformen." },
        { year: "2028", title: "Uitfaseren & stabiliseren", note: "Legacy uit, koppelingen terug en beheer op orde." },
      ],
      legend: [{ tag: "EOL", note: "uitfaseren" }, { tag: "CLOUD", note: "cloudbased" }, { tag: "ON-PREM", note: "eigen infrastructuur" }, { tag: "SAAS", note: "abonnement" }, { tag: "PERPETUAL", note: "eeuwigdurend" }],
      roadmap: "De plaat maakt zichtbaar waar risico, kosten en afhankelijkheden zitten. Maar omdat techniek en organisatie blijven veranderen, hoort ook deze kaart periodiek opnieuw op de werkbank.",
      architectureQuote: "Een plaat zegt meer dan duizend woorden.",
      peopleOpen: "Waarom ik eerst de mensen teken",
      peopleLab: "Zien hoe de organisatie werkelijk werkt",
      peopleTitle: "Een organogram kan de hiërarchie tonen. Of de organisatie.",
      peopleIntro: "Het standaard organogram toont wie aan wie rapporteert. Het NIMCO-organogram probeert de werkelijke organisatie te modelleren: besturing, het primaire proces en ondersteuning, plus vaste medewerkers, coördinatoren, zzp'ers, externen, vrijwilligers, dubbele functies en dwarsrollen.",
      peopleLayers: [
        { id: "paper", label: "Standaard", title: "Het hiërarchische organogram", note: "De bekende harkjes: functies, afdelingen en rapportagelijnen. Helder over de hiërarchie, maar niet over de hele organisatie." },
        { id: "people", label: "NIMCO", title: "De werkelijke organisatie in kaart", note: "Besturing boven, het primaire proces groot in het midden en ondersteuning eronder, inclusief alle mensen, dubbele functies en dwarsrollen." },
      ],
      peopleMapLabel: "Twee manieren om een organisatie te tekenen",
      peopleMapNote: "Van bestuur en medezeggenschap tot teams en ondersteuning.",
      peopleTreeLabel: "De navigatiekaart",
      peopleTreeNote: "Van bestuur tot medewerker: een organisatie waarin mensen zichtbaar zijn.",
      peopleBody: "Diezelfde NIMCO-logica gebruik ik voor het applicatielandschap en voor het autorigram: een kaart van wie vanuit welke rol waar toegang toe heeft. Dat zegt vaak meer dan een Excelbestand vol autorisaties.",
      peopleMaintenance: "Een NIMCO-organogram is nooit in één keer af. Pas na gesprekken en een paar correctierondes ontstaat een kaart waarin de organisatie zichzelf herkent.",
      peoplePrivacy: "Beide voorbeelden zijn volledig opnieuw getekend. Namen, contactgegevens, locaties en herkenbare organisatiegegevens zijn verwijderd; functies en indeling zijn bewust gegeneraliseerd.",
      peopleFullSize: "Open de kaart op ware grootte",
    },
    conditionLabel: "Mensgerichte hardheid",
    conditionTitle: "Een technisch perfecte oplossing zonder draagvlak is nog steeds een mislukt project.",
    conditionText: "Bij filmproducties kan een draaidatum niet verschuiven. Door gemeenten, locaties en buurten vroeg te informeren, bezwaren serieus te nemen en altijd te beseffen dat wij te gast zijn, voorkom ik problemen voordat ze de deadline raken. Dezelfde radicale eerlijkheid veranderde eerder klanten die wilden vertrekken in betrokken partners.",
    conditionQuote: "Wij zijn te gast in de buurt en bij de mensen. Nooit andersom.",
    projectsLabel: "Gebouwd, geleid en in gebruik",
    projectsTitle: "Geen AI-praat vanaf de zijlijn.",
    projectsIntro: "Mijn werk loopt van bestuurlijke roadmaps tot software die dagelijks wordt gebruikt. Elk project toont een ander deel van dezelfde vaardigheid: complexiteit begrijpen en werkbaar maken.",
    projects: [
      { title: "2R · Second Route", type: "AI-REISGIDS", image: "/images/2route.png", text: "Een meertalige reisgids die tijdens rijden, fietsen en wandelen live verhalen over de omgeving selecteert en vertelt.", tags: ["GPS", "AI", "stem", "zes talen"], href: "https://2route.nl/nl/" },
      { title: "Kindertekening", type: "AI + VR + ZORG", image: "/images/kindertekening.png", text: "Een kindertekening wordt een beleefbare driedimensionale wereld. Technologie als drager van verwondering, met privacy en zorgvuldigheid.", tags: ["AI", "VR", "zorg", "demo"], href: "https://kindertekening.com" },
      { title: "Autestme", type: "IOS + BLOCKCHAIN", image: "/images/autestme.png", text: "Geheugenspel en AI-agentbenchmark met een eigen token en smart contracts op Polygon.", tags: ["iOS", "agents", "Polygon", "AUTEST"], href: "https://autestme.com" },
      { title: "De Locatiemanager", type: "VERTICAAL ERP", image: "/images/locatiemanager.png", text: "Van locatie en vergunning tot planning, begroting, factuur en realisatie — gebouwd vanuit een filmpraktijk met deadlines die niet verschuiven.", tags: ["ERP", "film", "draagvlak", "deadlinevast"], href: "https://demo-delocatiemanager.nentjes.nl/" },
      { title: "Het Kampvuur", type: "MERK + WEBSITE + AI", image: "/images/kampvuur.png", text: "Een complete merk- en webverkenning met zestien visuele richtingen, in één dag samen met AI gemaakt. Werk dat vroeger maanden en tienduizenden euro's kostte, nu voor een fractie daarvan.", tags: ["strategie", "website", "AI", "één dag"], href: "/docs/Het-Kampvuur-Merkrichtingen.pdf" },
      { title: "Eigen boekhouding", type: "BEDRIJFSKRITISCHE SOFTWARE", image: "/images/boekhouding.png", text: "Een zelfgebouwd boekhoudsysteem voor NIMCO en stamrecht-bv First Roel — ontworpen, gebouwd en dagelijks gebruikt met AI.", tags: ["facturen", "btw", "beleggingen", "AI"], href: "#contact" },
      { title: "Organisatiegeheugen", type: "AI IN HET DAGELIJKS WERK", image: "/images/ai-collage.png", text: "Gesprekken vastleggen, patronen herkennen en complexe stukken vertalen naar heldere presentaties, infographics en besluiten.", tags: ["Circleback", "NotebookLM", "leren", "kennis"], href: "#contact" },
    ],
    visit: "Bekijk project",
    experienceLabel: "Van bouwer tot architect — en weer terug",
    experienceTitle: "Dertig jaar technologie, organisatie en uitvoering.",
    timeline: [
      ["1995", "COBOL-programmeur", "Een technisch vak leren na de managementopleiding voor bedrijfseconomen."],
      ["1997", "MCSD & consultant", "Windows, databases, SQL, Visual Basic, internet en workshops in gewone mensentaal."],
      ["2000+", "Projectmanager", "Klantwensen, offertes, teams en applicaties verbinden tot werkende oplossingen."],
      ["2004+", "ICT-manager", "Beleid, sourcing, ERP, data, architectuur, security en digitale transformatie."],
      ["2011+", "Accountmanager", "Klantvertrouwen herstellen met aandacht, realistische verwachtingen en eerlijkheid."],
      ["2014+", "Zorgtechnologie", "Processen, HiX, patiëntportalen, interoperabiliteit, NEN 7510, cloud en continuïteit."],
      ["Nu", "Zelfstandig adviseur & maker", "Presenteren, onderzoeken, roadmaps maken, leiden en opnieuw zelf bouwen met AI."],
    ],
    aboutLabel: "Met wie ik graag werk",
    aboutTitle: "Vakmanschap boven politiek. Leren boven gelijk krijgen.",
    aboutText: "Ik werk graag met mensen die verstand van hun vak hebben, zich kwetsbaar durven opstellen, verantwoordelijkheid nemen en fouten kunnen erkennen. Niet omdat verandering altijd gezellig is, maar omdat eerlijkheid de snelste route naar beter werk is.",
    values: ["Nieuwsgierig blijven", "Zeggen wat er echt speelt", "Klein beginnen, serieus leveren", "Mensen meenemen", "Techniek zelf durven aanraken", "Resultaat zichtbaar maken"],
    contactLabel: "Zullen we beginnen?",
    contactTitle: "Vertel me niet eerst welke technologie je wilt. Vertel me wat er moet veranderen.",
    contactText: "Nodig me uit voor een presentatie, een verkennend gesprek of een concrete opdracht. Ik luister, stel lastige vragen en vertel eerlijk wat een logische eerste stap is.",
    name: "Naam", email: "E-mailadres", org: "Organisatie", interest: "Waar gaat je vraag over?", message: "Vertel kort wat er speelt", send: "Verstuur je vraag",
    interests: ["Presentatie of workshop", "AI- of robotverkenning", "Architectuur en roadmap", "Programma- of projectleiding", "Iets anders"],
    direct: "Liever rechtstreeks?",
    footer: "Strategie · technologie · uitvoering",
  },
  en: {
    nav: [["Services", "#aanbod"], ["Method", "#methode"], ["Projects", "#projecten"], ["Experience", "#ervaring"], ["About Roel", "#over"]],
    meet: "Let's talk", heroLabel: "Roel makes tomorrow work",
    heroA: "The workshop", heroEm: "of", heroB: "", heroStrong: "tomorrow.",
    heroLead: "I investigate, sketch, build and deliver. From a presentation that sparks action to a roadmap, AI exploration or digital product that people actually use.",
    explore: "Request an exploration", book: "Book a presentation", principle: "From what is running to what truly works.", role: "manager / maker / investigator",
    proof: [["Experience", "From COBOL to AI"], ["Perspective", "Boardroom to frontline"], ["Approach", "AS-IS · TO-BE · executable route"], ["Practice", "Technology leader and maker"]],
    offerLabel: "Put it on the workbench", offerTitle: "Start with a question. End with something that works.",
    offerIntro: "Sometimes change starts with a room that suddenly understands AI. Sometimes with an honest investigation of what is actually running. I can start at either end — and continue through delivery.",
    offers: [
      { n: "01", title: "Presentation & workshop", text: "A current story about AI, agents, robots or digital health — understandable, distinctive and demonstrated live. Follow it with a workshop where participants explore the possibilities themselves.", tags: "KEYNOTE · LIVE DEMO · WORKSHOP", cta: "Discuss a presentation" },
      { n: "02", title: "AI or robotics exploration", text: "Where can technology truly add value? I investigate processes, people, data, security, maturity and the business case — including what you should not automate yet.", tags: "RESEARCH · OPPORTUNITY MAP · ADVICE", cta: "Request an exploration" },
      { n: "03", title: "Architecture & roadmap", text: "From current reality to a shared future. We model the whole and translate it into choices, dependencies, projects and a route that can be governed.", tags: "AS-IS · TO-BE · ENTERPRISE ARCHITECTURE", cta: "Make the route visible" },
      { n: "04", title: "Programme & project leadership", text: "A plan only matters when it lands. I lead digital projects from decision to delivery, with clear ownership, honest progress and attention to the people doing the work.", tags: "GOVERNANCE · SUPPLIERS · DELIVERY", cta: "Discuss your programme" },
    ],
    path: ["Presentation", "Workshop", "Exploration", "Roadmap", "Delivery"],
    methodLabel: "On the workbench", methodTitle: "Do not automate what is on paper. Start with what really happens.",
    methodIntro: "Reality changes faster than the ink can dry. So the route is not a thick report, but a shared learning process.",
    methodSteps: [
      { title: "See", sub: "Reality", text: "An organisation does not have one single reality. Financial, legal, operational, relational and informal realities exist side by side. So I start by observing, listening and making people visible: who does what, who knows what and what is actually running?" },
      { title: "Model", sub: "Understand together", text: "A model is not the truth, but a shared map. We connect goals, processes, data, applications, infrastructure, suppliers and behaviour so choices become visible." },
      { title: "Standardise", sub: "Build the foundation", text: "One meaning, one reliable source, clear responsibilities, security hygiene and as few exceptions as possible. Only then can technology accelerate reliably." },
      { title: "Automate", sub: "Match maturity", text: "We choose AI, software or robotics that the organisation can carry. At the same time we raise its maturity, so the next step becomes possible." },
      { title: "Learn", sub: "Keep improving", text: "Decisions and conversations remain findable. We measure, ask questions, acknowledge errors and adapt — not to be right, but to make every next step better." },
    ],
    modelExplainer: {
      open: "Why a good map can be less true and still better",
      close: "Close",
      label: "Why modelling works",
      pages: [{ id: "metro", label: "The Tube map" }, { id: "togaf", label: "AS-IS → TO-BE with TOGAF" }, { id: "architecture", label: "Example roadmap" }],
      metroTitle: "The map is not reality. That is exactly why it works.",
      geographicLabel: "The geographic map",
      geographicNote: "Where the lines actually run.",
      schematicLabel: "The schematic model",
      schematicNote: "How travellers understand their route.",
      history: "Early London Underground maps carefully showed where the lines really ran. In 1931 Harry Beck largely abandoned geography and drew the network like an electrical diagram. Less geographically accurate — and for that very reason far more useful.",
      organisation: "Organisations work the same way. A process model is not the process and an application diagram is not the application landscape. But a good simplification suddenly reveals connections, handovers, duplication, dependencies and bottlenecks.",
      metroSource: "Harry Beck designed the diagram in 1931; it was first issued in 1933. Source: Transport for London.",
      geographicCredit: "Geographic map: Ed g2s and DavidCane · CC BY-SA 3.0",
      schematicCredit: "Schematic map: Sameboat · CC BY-SA 4.0",
      togafTitle: "From AS-IS to TO-BE, across four architecture domains.",
      togafIntro: "Use the two Tube maps as a metaphor. On the left is current reality; on the right the desired, understandable landscape. The change sits between the maps.",
      certification: "Roel Nentjes · TOGAF® certified",
      domains: [{ label: "Business", note: "Processes, organisation and governance" }, { label: "Data", note: "Information, data and meaning" }, { label: "Applications", note: "Systems, services and relationships" }, { label: "Technology", note: "Infrastructure, platforms and networks" }],
      togafSummary: "All four layers must move together. Otherwise you may produce a beautiful new map, but the organisation will never reach its destination.",
      togafSource: "The four TOGAF domains: Business, Data, Application and Technology. Source: The Open Group.",
      architectureTitle: "An application landscape is never finished.",
      architectureIntro: "AS-IS and TO-BE are snapshots. The roadmap between them shows what stays, changes and disappears — including hosting, lifecycle, ownership and licensing.",
      landscapeLabel: "Example · fictional organisation",
      moving: "always changing",
      currentTitle: "AS-IS · 2026",
      targetTitle: "TO-BE · 2028",
      currentGroups: [
        { title: "Customer & service", apps: [{ name: "CRM Classic", meta: ["EOL", "ON-PREM", "PERPETUAL"] }, { name: "Customer portal", meta: ["CLOUD", "SAAS"] }] },
        { title: "Operations", apps: [{ name: "ERP Core", meta: ["ON-PREM", "TERM"] }, { name: "Custom planning", meta: ["EOL", "CUSTOM"] }] },
        { title: "Data & integration", apps: [{ name: "Data warehouse", meta: ["ON-PREM", "PERPETUAL"] }, { name: "Point links", meta: ["CUSTOM", "RISK"] }] },
        { title: "Workplace & identity", apps: [{ name: "Collaboration", meta: ["CLOUD", "SAAS"] }, { name: "Directory", meta: ["HYBRID", "TERM"] }] },
      ],
      targetGroups: [
        { title: "Customer & service", apps: [{ name: "CRM Platform", meta: ["CLOUD", "SAAS"] }, { name: "Customer portal", meta: ["CLOUD", "SAAS"] }] },
        { title: "Operations", apps: [{ name: "ERP Core", meta: ["HYBRID", "TERM"] }, { name: "Planning module", meta: ["CLOUD", "SAAS"] }] },
        { title: "Data & integration", apps: [{ name: "Data platform", meta: ["CLOUD", "PAAS"] }, { name: "Integration platform", meta: ["CLOUD", "IPAAS"] }] },
        { title: "Workplace & identity", apps: [{ name: "Collaboration", meta: ["CLOUD", "SAAS"] }, { name: "Identity", meta: ["CLOUD", "SAAS"] }] },
      ],
      roadmapPhases: [
        { year: "2026", title: "See & decide", note: "Portfolio, ownership, versions, licences and EOL." },
        { year: "2027", title: "Migrate & connect", note: "Move CRM, data and integrations to target platforms." },
        { year: "2028", title: "Retire & stabilise", note: "Remove legacy, reduce links and stabilise operations." },
      ],
      legend: [{ tag: "EOL", note: "retire" }, { tag: "CLOUD", note: "cloud-based" }, { tag: "ON-PREM", note: "own infrastructure" }, { tag: "SAAS", note: "subscription" }, { tag: "PERPETUAL", note: "perpetual" }],
      roadmap: "The visual reveals where risk, cost and dependencies sit. But because technology and the organisation keep changing, this map must regularly return to the workbench too.",
      architectureQuote: "A picture is worth more than a thousand words.",
      peopleOpen: "Why I draw the people first",
      peopleLab: "Seeing how the organisation really works",
      peopleTitle: "An organisation chart can show the hierarchy. Or the organisation.",
      peopleIntro: "A standard organisation chart shows who reports to whom. The NIMCO chart tries to model the real organisation: governance, the core process and support, plus employees, coordinators, contractors, external specialists, volunteers, double roles and cross-functional responsibilities.",
      peopleLayers: [
        { id: "paper", label: "Standard", title: "The hierarchical organisation chart", note: "The familiar rake: functions, departments and reporting lines. Clear about hierarchy, but not about the entire organisation." },
        { id: "people", label: "NIMCO", title: "The real organisation mapped", note: "Governance above, the core process large in the middle and support below, including all people, double roles and cross-functional responsibilities." },
      ],
      peopleMapLabel: "Two ways to draw an organisation",
      peopleMapNote: "From governance and participation to teams and support.",
      peopleTreeLabel: "The navigation map",
      peopleTreeNote: "From board to employee: an organisation in which people are visible.",
      peopleBody: "I use the same NIMCO logic for the application landscape and for the authorisation map - my 'autorigram': a map of who can access what, from which role and why. It often says more than a spreadsheet full of permissions.",
      peopleMaintenance: "A NIMCO organisation chart is never finished in one pass. Only after conversations and several correction rounds does a map emerge in which the organisation recognises itself.",
      peoplePrivacy: "Both examples were completely redrawn. Names, contact details, locations and recognisable organisational details were removed; roles and structure were deliberately generalised.",
      peopleFullSize: "Open the full-size map",
    },
    conditionLabel: "Human-centred rigour", conditionTitle: "A technically perfect solution without support is still a failed project.",
    conditionText: "In film production, a shooting date cannot move. By informing authorities, locations and neighbourhoods early, taking objections seriously and remembering that we are always guests, I prevent problems before they hit the deadline. The same radical honesty once turned customers who wanted to leave into committed partners.",
    conditionQuote: "We are guests in the neighbourhood and in people's lives. Never the other way around.",
    projectsLabel: "Built, led and in use", projectsTitle: "No AI commentary from the sidelines.",
    projectsIntro: "My work ranges from executive roadmaps to software used every day. Each project demonstrates the same skill: understanding complexity and making it workable.",
    projects: [
      { title: "2R · Second Route", type: "AI TRAVEL GUIDE", image: "/images/2route.png", text: "A multilingual guide that selects and narrates live stories about the surroundings while driving, cycling or walking.", tags: ["GPS", "AI", "voice", "six languages"], href: "https://2route.nl/nl/" },
      { title: "Kindertekening", type: "AI + VR + HEALTH", image: "/images/kindertekening.png", text: "A child's drawing becomes an immersive three-dimensional world. Technology carrying wonder, with privacy and care.", tags: ["AI", "VR", "health", "demo"], href: "https://kindertekening.com" },
      { title: "Autestme", type: "IOS + BLOCKCHAIN", image: "/images/autestme.png", text: "A memory game and AI-agent benchmark with its own token and smart contracts on Polygon.", tags: ["iOS", "agents", "Polygon", "AUTEST"], href: "https://autestme.com" },
      { title: "De Locatiemanager", type: "VERTICAL ERP", image: "/images/locatiemanager.png", text: "From location and permit to planning, budget, invoice and delivery — built from film practice where deadlines do not move.", tags: ["ERP", "film", "stakeholders", "deadline"], href: "https://demo-delocatiemanager.nentjes.nl/" },
      { title: "Het Kampvuur", type: "BRAND + WEBSITE + AI", image: "/images/kampvuur.png", text: "A complete brand and website exploration with sixteen visual directions, created with AI in a single day. Work that once took months and cost tens of thousands of euros, now made for a fraction of that.", tags: ["strategy", "website", "AI", "one day"], href: "/docs/Het-Kampvuur-Merkrichtingen.pdf" },
      { title: "Own accounting", type: "BUSINESS-CRITICAL SOFTWARE", image: "/images/boekhouding.png", text: "A self-built accounting system for NIMCO and holding company First Roel — designed, built and used daily with AI.", tags: ["invoices", "tax", "investments", "AI"], href: "#contact" },
      { title: "Organisational memory", type: "AI IN DAILY WORK", image: "/images/ai-collage.png", text: "Capturing conversations, recognising patterns and translating complex documents into clear presentations, visuals and decisions.", tags: ["Circleback", "NotebookLM", "learning", "knowledge"], href: "#contact" },
    ],
    visit: "View project", experienceLabel: "From builder to architect — and back", experienceTitle: "Thirty years of technology, organisations and delivery.",
    timeline: [
      ["1995", "COBOL programmer", "Learning a technical craft after studying management and economics."], ["1997", "MCSD & consultant", "Windows, databases, SQL, Visual Basic, internet and workshops in plain language."],
      ["2000+", "Project manager", "Connecting customer needs, proposals, teams and applications into working solutions."], ["2004+", "IT manager", "Strategy, sourcing, ERP, data, architecture, security and digital transformation."],
      ["2011+", "Account manager", "Rebuilding customer trust through attention, realistic expectations and honesty."], ["2014+", "Health technology", "Processes, EHR, patient portals, interoperability, security, cloud and continuity."],
      ["Now", "Independent adviser & maker", "Speaking, researching, creating roadmaps, leading and building again with AI."],
    ],
    aboutLabel: "The people I work best with", aboutTitle: "Craft over politics. Learning over being right.",
    aboutText: "I like working with people who know their craft, dare to be vulnerable, take responsibility and can acknowledge mistakes. Not because change is always comfortable, but because honesty is the fastest route to better work.",
    values: ["Stay curious", "Say what is really happening", "Start small, deliver seriously", "Bring people along", "Touch the technology yourself", "Make results visible"],
    contactLabel: "Shall we start?", contactTitle: "Do not begin by telling me which technology you want. Tell me what needs to change.",
    contactText: "Invite me for a presentation, an exploratory conversation or a concrete assignment. I listen, ask difficult questions and tell you honestly what a sensible first step is.",
    name: "Name", email: "Email address", org: "Organisation", interest: "What is your question about?", message: "Briefly tell me what is happening", send: "Send your question",
    interests: ["Presentation or workshop", "AI or robotics exploration", "Architecture and roadmap", "Programme or project leadership", "Something else"], direct: "Prefer direct contact?", footer: "Strategy · technology · delivery",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"nl" | "en">("nl");
  const [activeStep, setActiveStep] = useState(0);
  const [modelExampleOpen, setModelExampleOpen] = useState(false);
  const [modelPage, setModelPage] = useState<ModelPage>("metro");
  const [peopleLayer, setPeopleLayer] = useState<PeopleLayer>("people");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const peopleLayerIndex = peopleLayer === "paper" ? 0 : 1;
  const activePeopleLayer = t.modelExplainer.peopleLayers[peopleLayerIndex];
  const peopleMapImage = "/images/organisatiekaart-mensen-rollen.png";
  const paperManagers = lang === "nl" ? ["Dienstverlening", "Wonen & locaties", "Projecten", "Bedrijfsvoering", "Informatie"] : ["Services", "Housing & locations", "Projects", "Operations", "Information"];
  const paperDepartments = lang === "nl" ? ["Intake", "Klantteam", "Locatieteams", "Begeleiding", "Programma's", "Implementatie", "Financien", "HR", "Applicaties", "Service"] : ["Intake", "Customer team", "Location teams", "Support", "Programmes", "Implementation", "Finance", "HR", "Applications", "Service"];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const requestedModel = new URLSearchParams(window.location.search).get("model");
    if (requestedModel === "metro" || requestedModel === "togaf" || requestedModel === "architecture" || requestedModel === "people") {
      setActiveStep(requestedModel === "people" ? 0 : 1);
      setModelPage(requestedModel);
      if (requestedModel === "people") setPeopleLayer("people");
      setModelExampleOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!modelExampleOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setModelExampleOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [modelExampleOpen]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Roel Nentjes, home">Roel <span>Nentjes</span></a>
        <button className="menu-button" type="button" aria-label={lang === "nl" ? "Menu openen" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav id="main-nav" className={menuOpen ? "open" : ""} aria-label={lang === "nl" ? "Hoofdnavigatie" : "Main navigation"}>
          {t.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language" type="button" onClick={() => setLang(lang === "nl" ? "en" : "nl")} aria-label={lang === "nl" ? "Switch to English" : "Schakel naar Nederlands"}>
            <b>{lang.toUpperCase()}</b><span> / {lang === "nl" ? "EN" : "NL"}</span>
          </button>
          <a className="header-cta" href="#contact">{t.meet}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroLabel}</p>
          <h1>{t.heroA} <em>{t.heroEm}</em><br />{t.heroB} <strong>{t.heroStrong}</strong></h1>
          <p className="hero-lead">{t.heroLead}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">{t.explore}<span>→</span></a>
            <a className="button secondary" href="#presentaties">{t.book}</a>
          </div>
          <p className="principle">{t.principle}</p>
        </div>
        <div className="hero-visual" aria-label={lang === "nl" ? "De persoonlijke technologiewerkplaats van Roel" : "Roel's personal technology workshop"}>
          <Image className="architecture" src="/images/werkplaats.png" alt={lang === "nl" ? "Werktafel met laptop, robotica, VR, schetsen en elektronica" : "Workbench with laptop, robotics, VR, sketches and electronics"} fill priority sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="visual-shade" />
          <div className="portrait-card">
            <Image src="/images/roel-coltrui-2026.webp" alt={lang === "nl" ? "Roel Nentjes in zijn technologiewerkplaats" : "Roel Nentjes in his technology workshop"} width={220} height={220} priority />
            <div><b>Roel Nentjes</b><span>{t.role}</span></div>
          </div>
          <div className="route-card">
            {t.methodSteps.slice(0, 4).map((step, i) => <div key={step.title}><span>0{i + 1}</span><b>{step.title}</b>{i < 3 && <i />}</div>)}
          </div>
        </div>
      </section>

      <section className="proof" aria-label="Ervaring en bewijs">
        {t.proof.map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}
      </section>

      <section className="section offer-section" id="aanbod">
        <div className="section-intro"><p className="eyebrow">{t.offerLabel}</p><h2>{t.offerTitle}</h2><p>{t.offerIntro}</p></div>
        <div className="offer-grid" id="presentaties">
          {t.offers.map((offer) => <article className="offer-card" key={offer.n}>
            <span className="card-number">{offer.n}</span><h3>{offer.title}</h3><p>{offer.text}</p><small>{offer.tags}</small><a href="#contact">{offer.cta}<span>→</span></a>
          </article>)}
        </div>
        <div className="conversion-path" aria-label="Van presentatie naar realisatie">
          {t.path.map((item, i) => <div key={item}><span>0{i + 1}</span><b>{item}</b>{i < t.path.length - 1 && <i>→</i>}</div>)}
        </div>
      </section>

      <section className="method-section" id="methode">
        <div className="method-heading"><p className="eyebrow">{t.methodLabel}</p><h2>{t.methodTitle}</h2><p>{t.methodIntro}</p></div>
        <div className="method-workbench">
          <div className="method-tabs" role="tablist" aria-label={t.methodLabel}>
            {t.methodSteps.map((step, i) => <button key={step.title} type="button" role="tab" aria-selected={activeStep === i} onClick={() => { setActiveStep(i); setModelExampleOpen(false); }} className={activeStep === i ? "active" : ""}><span>0{i + 1}</span><b>{step.title}</b><small>{step.sub}</small></button>)}
          </div>
          <div className="method-detail" role="tabpanel">
            <span className="detail-index">0{activeStep + 1} / 05</span><h3>{t.methodSteps[activeStep].title}</h3><p>{t.methodSteps[activeStep].text}</p>
            <div className="detail-line"><i /><span>{t.methodSteps.map(s => s.title).join(" · ")}</span></div>
            {activeStep === 0 && <button className="model-example-toggle" type="button" aria-expanded={modelExampleOpen} aria-controls="model-example" onClick={() => { setModelPage("people"); if (!modelExampleOpen) setPeopleLayer("paper"); setModelExampleOpen(!modelExampleOpen); }}>
              <span>{modelExampleOpen ? t.modelExplainer.close : t.modelExplainer.peopleOpen}</span><b>{modelExampleOpen ? "×" : "↘"}</b>
            </button>}
            {activeStep === 1 && <button className="model-example-toggle" type="button" aria-expanded={modelExampleOpen} aria-controls="model-example" onClick={() => { if (!modelExampleOpen) setModelPage("metro"); setModelExampleOpen(!modelExampleOpen); }}>
              <span>{modelExampleOpen ? t.modelExplainer.close : t.modelExplainer.open}</span><b>{modelExampleOpen ? "×" : "↘"}</b>
            </button>}
          </div>
        </div>
        {(activeStep === 0 || activeStep === 1) && modelExampleOpen && <div className="model-overlay" id="model-example" role="dialog" aria-modal="true" aria-labelledby="model-example-title">
          <header className="model-overlay-bar">
            <p><span>{modelPage === "people" ? "LAB / REALITEIT 001" : "LAB / MODEL 002"}</span><b>{modelPage === "people" ? t.modelExplainer.peopleLab : t.modelExplainer.label}</b></p>
            {modelPage === "people" ? <div className="model-page-context"><span>01</span>{t.modelExplainer.peopleMapLabel}</div> : <div className="model-page-tabs" role="tablist" aria-label={t.modelExplainer.label}>
              {t.modelExplainer.pages.map((page, index) => <button key={page.id} type="button" role="tab" aria-selected={modelPage === page.id} className={modelPage === page.id ? "active" : ""} onClick={() => setModelPage(page.id as ModelPage)}><span>0{index + 1}</span>{page.label}</button>)}
            </div>}
            <button className="model-overlay-close" type="button" onClick={() => setModelExampleOpen(false)} aria-label={t.modelExplainer.close}>{t.modelExplainer.close}<span>×</span></button>
          </header>

          {modelPage === "metro" ? <section className="model-story metro-story" role="tabpanel">
            <div className="model-story-heading">
              <p className="eyebrow">{t.modelExplainer.label}</p>
              <h3 id="model-example-title">{t.modelExplainer.metroTitle}</h3>
            </div>
            <div className="tube-comparison">
              <figure>
                <div className="model-image-frame"><Image src="/images/london-underground-geografisch.png" alt={t.modelExplainer.geographicNote} fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
                <figcaption><span>01</span><p><b>{t.modelExplainer.geographicLabel}</b><small>{t.modelExplainer.geographicNote}</small></p></figcaption>
              </figure>
              <figure>
                <div className="model-image-frame"><Image src="/images/london-underground-schema.png" alt={t.modelExplainer.schematicNote} fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
                <figcaption><span>02</span><p><b>{t.modelExplainer.schematicLabel}</b><small>{t.modelExplainer.schematicNote}</small></p></figcaption>
              </figure>
            </div>
            <div className="model-summary">
              <p>{t.modelExplainer.history}</p>
              <p>{t.modelExplainer.organisation}</p>
              <a href="https://tfl.gov.uk/corporate/about-tfl/culture-and-heritage/harry-becks-tube-map" target="_blank" rel="noreferrer">{t.modelExplainer.metroSource}<span>↗</span></a>
              <div className="map-license-row">
                <a href="https://commons.wikimedia.org/wiki/File:London_Underground_full_map.svg" target="_blank" rel="noreferrer">{t.modelExplainer.geographicCredit}<span>↗</span></a>
                <a href="https://commons.wikimedia.org/wiki/File:London_Underground_Overground_DLR_Crossrail_map.svg" target="_blank" rel="noreferrer">{t.modelExplainer.schematicCredit}<span>↗</span></a>
              </div>
            </div>
          </section> : modelPage === "togaf" ? <section className="model-story togaf-story" role="tabpanel">
            <div className="model-story-heading togaf-story-heading">
              <p className="eyebrow">{t.modelExplainer.certification}</p>
              <h3 id="model-example-title">{t.modelExplainer.togafTitle}</h3>
              <p>{t.modelExplainer.togafIntro}</p>
            </div>
            <div className="togaf-journey">
              <figure className="togaf-state-card">
                <div className="togaf-map-frame"><Image src="/images/london-underground-geografisch.png" alt={t.modelExplainer.geographicNote} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
                <figcaption><span>IST</span><b>{t.modelExplainer.geographicLabel}</b></figcaption>
              </figure>
              <div className="domain-bridge" aria-label={t.modelExplainer.togafSource}>
                <p>{t.modelExplainer.certification}</p>
                {t.modelExplainer.domains.map((domain, index) => <div className={`domain-band domain-${index + 1}`} key={domain.label}><span>0{index + 1}</span><p><b>{domain.label}</b><small>{domain.note}</small></p><i>→</i></div>)}
              </div>
              <figure className="togaf-state-card">
                <div className="togaf-map-frame"><Image src="/images/london-underground-schema.png" alt={t.modelExplainer.schematicNote} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
                <figcaption><span>SOLL</span><b>{t.modelExplainer.schematicLabel}</b></figcaption>
              </figure>
            </div>
            <div className="togaf-summary"><p>{t.modelExplainer.togafSummary}</p><a href="https://www.opengroup.org/togaf" target="_blank" rel="noreferrer">{t.modelExplainer.togafSource}<span>↗</span></a></div>
          </section> : modelPage === "architecture" ? <section className="model-story architecture-story" role="tabpanel">
            <div className="model-story-heading architecture-story-heading">
              <p className="eyebrow">{t.modelExplainer.label}</p>
              <h3 id="model-example-title">{t.modelExplainer.architectureTitle}</h3>
              <p>{t.modelExplainer.architectureIntro}</p>
            </div>
            <div className="application-roadmap" aria-label={t.modelExplainer.landscapeLabel}>
              <section className="application-landscape current-landscape">
                <header><p><span>01</span><small>{t.modelExplainer.landscapeLabel}</small></p><h4>{t.modelExplainer.currentTitle}</h4></header>
                <div className="landscape-groups">{t.modelExplainer.currentGroups.map(group => <section className="app-domain" key={group.title}><h5>{group.title}</h5>{group.apps.map(app => <article className="app-node" key={app.name}><b>{app.name}</b><p>{app.meta.map(meta => <span key={meta} className={`app-meta meta-${meta.toLowerCase().replace(/[^a-z]/g, "")}`}>{meta}</span>)}</p></article>)}</section>)}</div>
              </section>
              <section className="change-roadmap">
                <header><p><span>02</span><small>{t.modelExplainer.moving}</small></p><h4>ROADMAP</h4></header>
                <div className="roadmap-phases">{t.modelExplainer.roadmapPhases.map((phase, index) => <article key={phase.year} className={`roadmap-phase phase-${index + 1}`}><span>{phase.year}</span><div><b>{phase.title}</b><p>{phase.note}</p></div><i>→</i></article>)}</div>
              </section>
              <section className="application-landscape target-landscape">
                <header><p><span>03</span><small>{t.modelExplainer.landscapeLabel}</small></p><h4>{t.modelExplainer.targetTitle}</h4></header>
                <div className="landscape-groups">{t.modelExplainer.targetGroups.map(group => <section className="app-domain" key={group.title}><h5>{group.title}</h5>{group.apps.map(app => <article className="app-node" key={app.name}><b>{app.name}</b><p>{app.meta.map(meta => <span key={meta} className={`app-meta meta-${meta.toLowerCase().replace(/[^a-z]/g, "")}`}>{meta}</span>)}</p></article>)}</section>)}</div>
              </section>
            </div>
            <div className="architecture-summary landscape-summary"><p><strong>{t.modelExplainer.architectureQuote}</strong> {t.modelExplainer.roadmap}</p><div className="landscape-legend">{t.modelExplainer.legend.map(item => <span key={item.tag}><b className={`app-meta meta-${item.tag.toLowerCase().replace(/[^a-z]/g, "")}`}>{item.tag}</b><small>{item.note}</small></span>)}</div></div>
          </section> : <section className="model-story people-story" role="tabpanel">
            <div className="model-story-heading people-story-heading">
              <p className="eyebrow">{t.modelExplainer.peopleMapLabel}</p>
              <h3 id="model-example-title">{t.modelExplainer.peopleTitle}</h3>
              <p>{t.modelExplainer.peopleIntro}</p>
            </div>
            <div className="people-layer-tabs" role="tablist" aria-label={t.modelExplainer.peopleLab} style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {t.modelExplainer.peopleLayers.map((layer, index) => <button key={layer.id} type="button" role="tab" aria-selected={peopleLayer === layer.id} className={peopleLayer === layer.id ? "active" : ""} onClick={() => setPeopleLayer(layer.id)}><span>0{index + 1}</span><b>{layer.label}</b><small>{layer.title}</small></button>)}
            </div>
            {peopleLayer === "paper" ? <div className="paper-org-stage" role="img" aria-label={activePeopleLayer.note}>
              <div className="paper-node paper-board">{lang === "nl" ? "Bestuur & directie" : "Board & executive team"}</div>
              <div className="paper-spine" aria-hidden="true" />
              <div className="paper-managers">{paperManagers.map(manager => <div className="paper-node" key={manager}>{manager}</div>)}</div>
              <div className="paper-departments">{paperDepartments.map(department => <div className="paper-node paper-department" key={department}>{department}</div>)}</div>
              <div className="paper-stage-caption"><span>01</span><p><b>{activePeopleLayer.title}</b><small>{activePeopleLayer.note}</small></p></div>
            </div> : <figure className="people-map-stage">
              <div className="people-map-frame"><Image src={peopleMapImage} alt={activePeopleLayer.note} width={3200} height={2260} sizes="(max-width: 760px) 900px, 92vw" unoptimized /></div>
              <figcaption><span>0{peopleLayerIndex + 1}</span><p><b>{activePeopleLayer.title}</b><small>{activePeopleLayer.note}</small></p><a className="people-full-size" href={peopleMapImage} target="_blank" rel="noreferrer">{t.modelExplainer.peopleFullSize}<span>↗</span></a></figcaption>
            </figure>}
            <div className="people-summary"><p>{t.modelExplainer.peopleBody}</p><blockquote>{t.modelExplainer.peopleMaintenance}</blockquote><small>{t.modelExplainer.peoplePrivacy}</small></div>
          </section>}
        </div>}
      </section>

      <section className="condition-section">
        <div className="condition-image"><Image src="/images/roel-pak-2026.webp" alt={lang === "nl" ? "Roel Nentjes als adviseur en projectleider" : "Roel Nentjes as adviser and project leader"} fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
        <div className="condition-copy"><p className="eyebrow">{t.conditionLabel}</p><h2>{t.conditionTitle}</h2><p>{t.conditionText}</p><blockquote>{t.conditionQuote}</blockquote></div>
      </section>

      <section className="section projects-section" id="projecten">
        <div className="section-intro"><p className="eyebrow">{t.projectsLabel}</p><h2>{t.projectsTitle}</h2><p>{t.projectsIntro}</p></div>
        <div className="projects-grid">
          {t.projects.map((project) => <a className="project-card" key={project.title} href={project.href} target={project.href.startsWith("http") || project.href.endsWith(".pdf") ? "_blank" : undefined} rel={project.href.startsWith("http") || project.href.endsWith(".pdf") ? "noreferrer" : undefined}>
            <div className="project-image"><Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
            <div className="project-copy"><span>{project.type}</span><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map(tag => <small key={tag}>{tag}</small>)}</div><b>{t.visit} →</b></div>
          </a>)}
        </div>
      </section>

      <section className="experience-section" id="ervaring">
        <div className="experience-heading"><p className="eyebrow">{t.experienceLabel}</p><h2>{t.experienceTitle}</h2></div>
        <div className="timeline">
          {t.timeline.map(([year, title, text], i) => <article key={year + title}><span>{year}</span><i className={i === t.timeline.length - 1 ? "last" : ""} /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="about-section" id="over">
        <div className="about-image"><Image src="/images/roel-vintage-polo-2026.webp" alt={lang === "nl" ? "Roel Nentjes in de Werkplaats van Morgen" : "Roel Nentjes in the Workshop of Tomorrow"} fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="about-copy"><p className="eyebrow">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="values">{t.values.map((value, i) => <div key={value}><span>0{i + 1}</span>{value}</div>)}</div></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy"><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="direct-contact"><span>{t.direct}</span><a href="mailto:roel@nentjes.nl">roel@nentjes.nl</a><a href="tel:+31683660830">+31 6 8366 0830</a><a href="https://linkedin.com/in/roelnentjes" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
        <form className="contact-form" action="https://formspree.io/f/xkoqvlbl" method="POST">
          <label>{t.name}<input type="text" name="naam" required /></label>
          <label>{t.email}<input type="email" name="email" required /></label>
          <label>{t.org}<input type="text" name="organisatie" /></label>
          <label>{t.interest}<select name="interesse" defaultValue=""><option value="" disabled>—</option>{t.interests.map(item => <option key={item}>{item}</option>)}</select></label>
          <label className="wide">{t.message}<textarea name="bericht" rows={5} required /></label>
          <button className="wide" type="submit">{t.send}<span>→</span></button>
        </form>
      </section>

      <footer><a className="wordmark" href="#top">Roel <span>Nentjes</span></a><p>{t.footer}</p><div><a href="mailto:roel@nentjes.nl">E-mail</a><a href="https://linkedin.com/in/roelnentjes" target="_blank" rel="noreferrer">LinkedIn</a><button type="button" onClick={() => setLang(lang === "nl" ? "en" : "nl")}>{lang === "nl" ? "English" : "Nederlands"}</button></div></footer>
    </main>
  );
}
