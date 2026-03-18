// ============================================================
//  workshops-data.js  —  Beheer via /admin of pas direct aan
// ============================================================
// Dit bestand bevat alle aankomende workshops.
// Voeg workshops toe via het adminpaneel op /admin/
// of pas dit bestand handmatig aan en push naar git.

const workshopsData = [

  // VOORBEELD — verwijder of pas aan:
  {
    id: "w001",
    titel: "Hands-on AI Workshop",
    datum: "2026-05-15",
    tijd: "14:00 – 17:00",
    locatie: "Rotterdam",
    adres: "Nader te bepalen",
    beschrijving: "Ontdek in drie uur hoe AI jouw dagelijks werk transformeert. Van effectief prompting tot creatieve AI-toepassingen — je gaat naar huis met concrete tools die je morgen al kunt gebruiken.",
    max: 20,
    beschikbaar: 12,
    prijs: "€ 295 excl. btw",
    niveau: "Beginners",
    status: "open",
    link: "mailto:roel@nentjes.nl?subject=Inschrijving%20Workshop%2015%20mei"
  }

  // Voeg meer workshops toe via /admin/
];
