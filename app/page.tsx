"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      { title: "Zien", sub: "De werkelijkheid", text: "Welke systemen, versies, koppelingen en schaduwoplossingen draaien er echt? Hoe werken mensen werkelijk en waar gaat informatie verloren? We kijken zonder schuldvraag en zonder papieren werkelijkheid als vanzelfsprekend te nemen." },
      { title: "Modelleren", sub: "Samen begrijpen", text: "Een model is niet de waarheid, maar een gedeelde kaart. We verbinden doelen, processen, data, applicaties, infrastructuur, leveranciers en gedrag zodat keuzes bespreekbaar worden." },
      { title: "Standaardiseren", sub: "De basis op orde", text: "Eén betekenis, één betrouwbare bron, duidelijke verantwoordelijkheden, beveiligingshygiëne en zo min mogelijk uitzonderingen. Pas dan kan technologie betrouwbaar versnellen." },
      { title: "Automatiseren", sub: "Passend bij volwassenheid", text: "We kiezen AI, software of robotica die past bij wat de organisatie kan dragen. Tegelijk verhogen we die volwassenheid, zodat de volgende stap wél mogelijk wordt." },
      { title: "Leren", sub: "Blijven verbeteren", text: "Besluiten en gesprekken worden terugvindbaar. We meten, vragen door, erkennen fouten en passen aan. Niet om gelijk te krijgen, maar om elke volgende stap beter te maken." },
    ],
    conditionLabel: "Mensgerichte hardheid",
    conditionTitle: "Een technisch perfecte oplossing zonder draagvlak is nog steeds een mislukt project.",
    conditionText: "Bij filmproducties kan een draaidatum niet verschuiven. Door gemeenten, locaties en buurten vroeg te informeren, bezwaren serieus te nemen en altijd te beseffen dat wij te gast zijn, voorkom ik problemen voordat ze de deadline raken. Dezelfde radicale eerlijkheid veranderde eerder klanten die wilden vertrekken in betrokken partners.",
    conditionQuote: "Wij zijn te gast in de buurt en bij de mensen. Nooit andersom.",
    projectsLabel: "Gebouwd, geleid en in gebruik",
    projectsTitle: "Geen AI-praat vanaf de zijlijn.",
    projectsIntro: "Mijn werk loopt van bestuurlijke roadmaps tot software die dagelijks wordt gebruikt. Elk project toont een ander deel van dezelfde vaardigheid: complexiteit begrijpen en werkbaar maken.",
    projects: [
      { title: "2R · Second Route", type: "AI-REISGIDS", image: "/images/2route.png", text: "Een meertalige reisgids die tijdens rijden, fietsen en wandelen live verhalen over de omgeving selecteert en vertelt.", tags: ["GPS", "AI", "stem", "zes talen"], href: "https://2route.nl/nl/" },
      { title: "De Locatiemanager", type: "VERTICAAL ERP", image: "/images/locatiemanager.png", text: "Van locatie en vergunning tot planning, begroting, factuur en realisatie — gebouwd vanuit een filmpraktijk met deadlines die niet verschuiven.", tags: ["ERP", "film", "draagvlak", "deadlinevast"], href: "https://demo-delocatiemanager.nentjes.nl/" },
      { title: "Kindertekening", type: "AI + VR + ZORG", image: "/images/kindertekening.png", text: "Een kindertekening wordt een beleefbare driedimensionale wereld. Technologie als drager van verwondering, met privacy en zorgvuldigheid.", tags: ["AI", "VR", "zorg", "demo"], href: "https://kindertekening.com" },
      { title: "Autestme", type: "IOS + BLOCKCHAIN", image: "/images/autestme.png", text: "Geheugenspel en AI-agentbenchmark met een eigen token en smart contracts op Polygon.", tags: ["iOS", "agents", "Polygon", "AUTEST"], href: "https://autestme.com" },
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
      { title: "See", sub: "Reality", text: "Which systems, versions, integrations and shadow solutions actually run? How do people really work and where does information get lost? We look without blame and without treating the paper reality as fact." },
      { title: "Model", sub: "Understand together", text: "A model is not the truth, but a shared map. We connect goals, processes, data, applications, infrastructure, suppliers and behaviour so choices become visible." },
      { title: "Standardise", sub: "Build the foundation", text: "One meaning, one reliable source, clear responsibilities, security hygiene and as few exceptions as possible. Only then can technology accelerate reliably." },
      { title: "Automate", sub: "Match maturity", text: "We choose AI, software or robotics that the organisation can carry. At the same time we raise its maturity, so the next step becomes possible." },
      { title: "Learn", sub: "Keep improving", text: "Decisions and conversations remain findable. We measure, ask questions, acknowledge errors and adapt — not to be right, but to make every next step better." },
    ],
    conditionLabel: "Human-centred rigour", conditionTitle: "A technically perfect solution without support is still a failed project.",
    conditionText: "In film production, a shooting date cannot move. By informing authorities, locations and neighbourhoods early, taking objections seriously and remembering that we are always guests, I prevent problems before they hit the deadline. The same radical honesty once turned customers who wanted to leave into committed partners.",
    conditionQuote: "We are guests in the neighbourhood and in people's lives. Never the other way around.",
    projectsLabel: "Built, led and in use", projectsTitle: "No AI commentary from the sidelines.",
    projectsIntro: "My work ranges from executive roadmaps to software used every day. Each project demonstrates the same skill: understanding complexity and making it workable.",
    projects: [
      { title: "2R · Second Route", type: "AI TRAVEL GUIDE", image: "/images/2route.png", text: "A multilingual guide that selects and narrates live stories about the surroundings while driving, cycling or walking.", tags: ["GPS", "AI", "voice", "six languages"], href: "https://2route.nl/nl/" },
      { title: "De Locatiemanager", type: "VERTICAL ERP", image: "/images/locatiemanager.png", text: "From location and permit to planning, budget, invoice and delivery — built from film practice where deadlines do not move.", tags: ["ERP", "film", "stakeholders", "deadline"], href: "https://demo-delocatiemanager.nentjes.nl/" },
      { title: "Kindertekening", type: "AI + VR + HEALTH", image: "/images/kindertekening.png", text: "A child's drawing becomes an immersive three-dimensional world. Technology carrying wonder, with privacy and care.", tags: ["AI", "VR", "health", "demo"], href: "https://kindertekening.com" },
      { title: "Autestme", type: "IOS + BLOCKCHAIN", image: "/images/autestme.png", text: "A memory game and AI-agent benchmark with its own token and smart contracts on Polygon.", tags: ["iOS", "agents", "Polygon", "AUTEST"], href: "https://autestme.com" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
            {t.methodSteps.map((step, i) => <button key={step.title} type="button" role="tab" aria-selected={activeStep === i} onClick={() => setActiveStep(i)} className={activeStep === i ? "active" : ""}><span>0{i + 1}</span><b>{step.title}</b><small>{step.sub}</small></button>)}
          </div>
          <div className="method-detail" role="tabpanel">
            <span className="detail-index">0{activeStep + 1} / 05</span><h3>{t.methodSteps[activeStep].title}</h3><p>{t.methodSteps[activeStep].text}</p>
            <div className="detail-line"><i /><span>{t.methodSteps.map(s => s.title).join(" · ")}</span></div>
          </div>
        </div>
      </section>

      <section className="condition-section">
        <div className="condition-image"><Image src="/images/roel-pak-2026.webp" alt={lang === "nl" ? "Roel Nentjes als adviseur en projectleider" : "Roel Nentjes as adviser and project leader"} fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
        <div className="condition-copy"><p className="eyebrow">{t.conditionLabel}</p><h2>{t.conditionTitle}</h2><p>{t.conditionText}</p><blockquote>{t.conditionQuote}</blockquote></div>
      </section>

      <section className="section projects-section" id="projecten">
        <div className="section-intro"><p className="eyebrow">{t.projectsLabel}</p><h2>{t.projectsTitle}</h2><p>{t.projectsIntro}</p></div>
        <div className="projects-grid">
          {t.projects.map((project) => <a className="project-card" key={project.title} href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined}>
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
