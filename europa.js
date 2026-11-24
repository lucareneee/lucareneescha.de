const titles = [
  {
    shelf: "🔥 Trending in Europe",
    subtitle: "Die großen Fragen unserer Medienwelt",
    items: [
      ["Hollywood vs. Europe", "Wer dominiert die Leinwand?", "FILM INDUSTRY", "#ff4c83", "01"],
      ["The 30% Rule", "Eine Quote für europäische Geschichten?", "STREAMING", "#5ce5e6", "30%"],
      ["The Spotify Question", "Wer verdient eigentlich an Musik?", "MUSIC BUSINESS", "#b99aff", "♫"],
      ["Culture Under Pressure", "Kann Europa seine Vielfalt schützen?", "CULTURAL IDENTITY", "#f6d65b", "EU"],
      ["The Global Players", "Wer kontrolliert unsere Bildschirme?", "MEDIA POWER", "#ff884c", "▶"]
    ]
  },
  {
    shelf: "🎬 Hollywood vs. Europe",
    subtitle: "Film, Kino und die europäische Filmbranche",
    items: [
      ["The Box Office Battle", "Europäische Filme im Wettbewerb", "FILM MARKET", "#ff4c83", "€"],
      ["Save Independent Cinema", "Warum kleine Filmproduktionen Unterstützung brauchen", "CINEMA", "#ffad5c", "★"],
      ["Creative Europe: MEDIA", "Wie die EU Film und Kino fördert", "EU FUNDING", "#c99aff", "EU"],
      ["A Film Without Borders", "Europäische Koproduktionen", "CO-PRODUCTION", "#5ce5e6", "↗"],
      ["The Festival Circuit", "Filmfestivals als internationale Bühne", "FESTIVALS", "#f6d65b", "✦"]
    ]
  },
  {
    shelf: "🎧 Behind the Music",
    subtitle: "Streaming, Geld und kreative Freiheit",
    items: [
      ["The Spotify Question", "Wie funktioniert die Vergütung?", "STREAMING ECONOMY", "#b99aff", "♫"],
      ["Where Does the Money Go?", "Was kommt bei Künstler*innen an?", "ROYALTIES", "#ff4c83", "€"],
      ["Independent or Invisible?", "Wie sichtbar ist europäische Musik?", "MUSIC INDUSTRY", "#5ce5e6", "♪"],
      ["Who Owns the Song?", "Urheberrecht und Musikrechte", "COPYRIGHT", "#f6d65b", "©"],
      ["Music Without Borders", "Europäische Musik im globalen Markt", "EUROPEAN MUSIC", "#ff884c", "♫"]
    ]
  },
  {
    shelf: "📺 Who controls the Stream?",
    subtitle: "Streamingplattformen und die Regeln der EU",
    items: [
      ["The 30% Rule", "Die europäische Quote erklärt", "AVMSD", "#5ce5e6", "30%"],
      ["Visibility Matters", "Reicht es, nur im Katalog zu sein?", "PROMINENCE", "#ff4c83", "★"],
      ["Netflix: Global Player", "Wie viel Macht haben Plattformen?", "PLATFORM POWER", "#ff884c", "N"],
      ["Who Pays for Culture?", "Finanzielle Beiträge der Plattformen", "EU REGULATION", "#f6d65b", "€"],
      ["The Algorithm", "Wer entscheidet, was wir entdecken?", "RECOMMENDATIONS", "#b99aff", "AI"]
    ]
  },
  {
    shelf: "🌍 Culture Without Borders",
    subtitle: "Vielfalt, Identität und Europas Zukunft",
    items: [
      ["Many Voices, One Europe", "Was bedeutet kulturelle Vielfalt?", "CULTURAL DIVERSITY", "#f6d65b", "✦"],
      ["The Language Barrier", "Kleine Sprachen, große Geschichten", "LANGUAGE", "#5ce5e6", "A–Z"],
      ["Made in Europe", "Wie wettbewerbsfähig ist Europa?", "CREATIVE ECONOMY", "#ff884c", "EU"],
      ["The European Identity", "Gibt es eine gemeinsame Kultur?", "IDENTITY", "#b99aff", "★"],
      ["The Future of Creativity", "KI, Plattformen und neue Chancen", "FUTURE", "#ff4c83", "∞"]
    ]
  },
  {
    shelf: "🏛️ Inside the EU",
    subtitle: "Wer entscheidet eigentlich über Kulturpolitik?",
    items: [
      ["The European Commission", "Wer macht Vorschläge und setzt Programme um?", "EU INSTITUTIONS", "#5ce5e6", "EC"],
      ["Parliament vs. Council", "Wer beschließt die Regeln?", "LEGISLATION", "#b99aff", "EU"],
      ["The Member States", "Warum Kulturpolitik oft national bleibt", "MEMBER STATES", "#f6d65b", "27"],
      ["Creative Europe", "Das Förderprogramm der EU", "FUNDING", "#ff4c83", "€"],
      ["The Culture Debate", "Wer will mehr Schutz – und wer nicht?", "POLITICAL DEBATE", "#ff884c", "?!"]
    ]
  }
];

// Allgemeine Platzhalter-Inhalte für die einzelnen Titel.
// Später können diese mit echten Fakten, Quellen und Länderbeispielen gefüllt werden.
const topicDetails = {
  "Hollywood vs. Europe": {
    intro: "Europäische Filme konkurrieren auf einem globalen Markt, der stark von US-amerikanischen Produktionen geprägt ist. Wie kann Europa seine eigene Filmbranche stärken?",
    cards: [
      ["DAS PROBLEM", "Hollywood-Produktionen erreichen weltweit ein großes Publikum. Europäische Filme haben es oft schwerer, international sichtbar zu werden.", "[PLATZHALTER: Marktanteile / Zahlen]"],
      ["DIE AKTEURE", "Filmproduktionen, Kinos, Verleihe, Förderinstitutionen und nationale Filmfonds.", "[PLATZHALTER: Länderbeispiele]"],
      ["DIE EU", "Mit Creative Europe MEDIA unterstützt die EU unter anderem Filmproduktion, Verleih, Festivals und internationale Zusammenarbeit.", "[PLATZHALTER: Förderbeispiele]"],
      ["DIE DISKUSSION", "Wie viel Förderung braucht europäisches Kino? Und wie lässt sich Vielfalt erhalten, ohne den Wettbewerb einzuschränken?", "[PLATZHALTER: Positionen / Kritik]"]
    ]
  },
  "The 30% Rule": {
    intro: "Streamingdienste sollen nicht nur globale Blockbuster zeigen. Die EU verpflichtet audiovisuelle On-Demand-Dienste dazu, einen Mindestanteil europäischer Werke anzubieten.",
    cards: [
      ["DIE REGEL", "Mindestens 30 % der Werke im Katalog müssen europäische Werke sein. Die EU-Richtlinie verlangt außerdem eine angemessene Herausstellung.", "RECHTSGRUNDLAGE: AVMSD, ARTIKEL 13"],
      ["DAS ZIEL", "Europäische Produktionen sollen Zugang zum Publikum bekommen und neben internationalen Inhalten sichtbar bleiben.", "[PLATZHALTER: Beispiel aus einem Streamingkatalog]"],
      ["DIE UMSETZUNG", "Die Mitgliedstaaten setzen die Richtlinie in nationales Recht um. Unter bestimmten Bedingungen sind auch finanzielle Beiträge von Plattformen möglich.", "[PLATZHALTER: Länderbeispiele]"],
      ["DIE KRITIK", "Wie wirksam ist eine Quote, wenn Inhalte zwar im Katalog liegen, aber kaum jemand sie entdeckt?", "[PLATZHALTER: Kritik / Gegenpositionen]"]
    ]
  },
  "The Spotify Question": {
    intro: "Musikstreaming hat verändert, wie wir Musik hören. Doch wie wird das Geld verteilt – und wie viel bleibt bei den Künstler*innen?",
    cards: [
      ["DAS PROBLEM", "Streaming-Einnahmen werden über komplexe Lizenz- und Vergütungsmodelle verteilt. Die Auszahlung pro Stream ist nicht einfach ein fester Betrag für jede Person.", "[PLATZHALTER: Vergütungsmodell erklären]"],
      ["DIE AKTEURE", "Musiker*innen, Labels, Verlage, Verwertungsgesellschaften und Streamingplattformen.", "[PLATZHALTER: Akteure und Interessen]"],
      ["DIE EU", "Die EU regelt unter anderem Urheberrecht und Transparenz bei der Vergütung. Auch die faire Beteiligung von Kreativen wird politisch diskutiert.", "[PLATZHALTER: EU-Rechtsakte / Initiativen]"],
      ["DIE DISKUSSION", "Wie können Künstler*innen fairer bezahlt werden, ohne das Streamingmodell komplett umzubauen?", "[PLATZHALTER: Positionen / Lösungsansätze]"]
    ]
  },
  "intro": {
    intro: "Film, Musik und Medien sind nicht nur Unterhaltung. Sie prägen, welche Geschichten wir kennen, welche Perspektiven sichtbar werden und wie wir Europa wahrnehmen.",
    cards: [
      ["DIE FRAGE", "Wie beeinflusst die EU die europäische Film-, Musik- und Medienbranche – und wie stärkt sie kulturelle Vielfalt im globalen Wettbewerb?", "UNSERE LEITFRAGE"],
      ["DIE SPANNUNG", "Globale Plattformen und große internationale Produktionen treffen auf viele nationale Kulturen, Sprachen und kleinere Märkte.", "GLOBAL VS. EUROPEAN"],
      ["DIE ROLLE DER EU", "Die EU kann fördern, Regeln setzen und Zusammenarbeit ermöglichen. Kulturpolitik bleibt aber in weiten Teilen Aufgabe der Mitgliedstaaten.", "ARTIKEL 167 AEUV"],
      ["DEINE REISE", "Entdecke die Themen, vergleiche Interessen und finde heraus, wie Europa seine kreative Zukunft gestalten kann.", "LET'S PLAY"]
    ]
  }
};

const shelves = document.getElementById("shelves");

function renderShelves() {
  shelves.innerHTML = "";

  titles.forEach((shelf, shelfIndex) => {
    const section = document.createElement("section");
    section.className = "shelf";

    const heading = document.createElement("div");
    heading.className = "shelf-heading";
    heading.innerHTML = `
      <h3>${shelf.shelf}</h3>
      <span>${shelf.subtitle}</span>
    `;

    const track = document.createElement("div");
    track.className = "poster-track";

    shelf.items.forEach((item, index) => {
      const [title, subtitle, tag, accent, symbol] = item;

      const poster = document.createElement("button");
      poster.className = "poster";
      poster.style.setProperty("--poster-accent", accent);
      poster.innerHTML = `
        <div class="poster-art">
          <div class="art-shape"></div>
          <div class="art-symbol">${symbol}</div>
        </div>
        <div class="poster-play">▶</div>
        <div class="poster-content">
          <div class="poster-tag">${tag}</div>
          <div class="poster-title">${title}</div>
          <div class="poster-subtitle">${subtitle}</div>
        </div>
      `;

      poster.addEventListener("click", () => openTopic(title, accent, tag, subtitle));
      track.appendChild(poster);
    });

    section.appendChild(heading);
    section.appendChild(track);
    shelves.appendChild(section);
  });
}

function scrollToCatalogue() {
  document.getElementById("catalogue").scrollIntoView({ behavior: "smooth" });
}

function showHome() {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("detail").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openTopic(title, accent = "#ff3d91", tag = "EUROPAFLIX ORIGINAL", subtitle = "") {
  const home = document.getElementById("home");
  const detail = document.getElementById("detail");
  const content = document.getElementById("detail-content");

  const data = topicDetails[title] || {
    intro: subtitle
      ? `${subtitle} Hier erfährst du mehr über das Thema und seine Bedeutung für die europäische Kultur- und Kreativwirtschaft.`
      : "Hier entsteht ein weiterer Teil deiner EUROPAFLIX-Entdeckungsreise.",
    cards: [
      ["DAS PROBLEM", "[PLATZHALTER: Was ist die konkrete Herausforderung?]", "[PLATZHALTER: Zahl / Beispiel]"],
      ["DIE AKTEURE", "[PLATZHALTER: Welche Länder, Unternehmen oder Interessengruppen spielen eine Rolle?]", "[PLATZHALTER: Länder und Akteure]"],
      ["DIE EU", "[PLATZHALTER: Was machen Kommission, Parlament und Rat? Gibt es konkrete Initiativen?]", "[PLATZHALTER: EU-Maßnahmen / Rechtsgrundlagen]"],
      ["DIE DISKUSSION", "[PLATZHALTER: Wer unterstützt oder kritisiert die Maßnahmen – und warum?]", "[PLATZHALTER: Positionen / Quellen]"]
    ]
  };

  home.classList.add("hidden");
  detail.classList.remove("hidden");

  content.innerHTML = `
    <div class="detail-hero" style="--detail-accent: ${accent}">
      <div class="detail-label">${tag}</div>
      <h1>${title}</h1>
      <p>${data.intro}</p>
    </div>
    <div class="detail-grid" style="--detail-accent: ${accent}">
      ${data.cards.map(card => `
        <article class="info-card">
          <h3>${card[0]}</h3>
          <p>${card[1]}</p>
          <div class="placeholder">${card[2]}</div>
        </article>
      `).join("")}
    </div>
    <div class="detail-next">
      <button class="primary-button" onclick="showHome()">← Weitere Titel entdecken</button>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Kleine Abschluss-Challenge
function openChallenge() {
  openTopic("challenge", "#ff3d91", "EUROPAFLIX INTERACTIVE");
}

function chooseChallenge(choice) {
  document.querySelectorAll(".challenge-option").forEach(button => {
    button.classList.remove("selected");
  });

  const selected = document.querySelector(`[data-choice="${choice}"]`);
  if (selected) selected.classList.add("selected");

  const feedback = document.getElementById("challenge-feedback");

  const responses = {
    quota: "Du setzt auf Sichtbarkeit: Die 30%-Quote soll europäische Werke im Streamingkatalog sichern. Aber Sichtbarkeit braucht mehr als nur einen Platz im Katalog.",
    funding: "Du setzt auf Förderung: Programme wie Creative Europe MEDIA unterstützen die europäische Film- und Kreativbranche. Die Frage bleibt, wie die Förderung verteilt wird.",
    freedom: "Du setzt auf möglichst wenig Regulierung: Das stärkt unternehmerische Freiheit, kann aber dazu führen, dass kleinere europäische Produktionen schwerer sichtbar werden."
  };

  if (feedback) feedback.textContent = responses[choice];
}

topicDetails.challenge = {
  intro: "Du bist jetzt Programmchef*in von EUROPAFLIX. Deine Plattform soll europäische Geschichten sichtbarer machen. Welche Strategie wählst du?",
  cards: [
    ["DEINE ENTSCHEIDUNG", `
      <div class="challenge-options">
        <button class="challenge-option" data-choice="quota" onclick="chooseChallenge('quota')">
          <strong>30%-Quote</strong>
          <small>Europäische Werke müssen einen festen Platz im Katalog haben.</small>
        </button>
        <button class="challenge-option" data-choice="funding" onclick="chooseChallenge('funding')">
          <strong>Mehr Förderung</strong>
          <small>Europäische Produktionen und Talente finanziell unterstützen.</small>
        </button>
        <button class="challenge-option" data-choice="freedom" onclick="chooseChallenge('freedom')">
          <strong>Weniger Regeln</strong>
          <small>Plattformen sollen selbst entscheiden, was sie anbieten.</small>
        </button>
      </div>
      <div class="challenge-feedback" id="challenge-feedback">Wähle deine Strategie.</div>
    `, "DEINE PLATTFORM. DEINE REGELN?"]
  ]
};

renderShelves();

// Challenge-Inhalt als interaktive Sonderansicht rendern
const originalOpenTopic = openTopic;
openTopic = function(title, accent = "#ff3d91", tag = "EUROPAFLIX ORIGINAL", subtitle = "") {
  originalOpenTopic(title, accent, tag, subtitle);

  if (title === "challenge") {
    const card = document.querySelector(".info-card");
    if (card) {
      card.innerHTML = `
        <h3>DEINE ENTSCHEIDUNG</h3>
        <div class="challenge-options">
          <button class="challenge-option" data-choice="quota" onclick="chooseChallenge('quota')">
            <strong>30%-Quote</strong>
            <small>Europäische Werke müssen einen festen Platz im Katalog haben.</small>
          </button>
          <button class="challenge-option" data-choice="funding" onclick="chooseChallenge('funding')">
            <strong>Mehr Förderung</strong>
            <small>Europäische Produktionen und Talente finanziell unterstützen.</small>
          </button>
          <button class="challenge-option" data-choice="freedom" onclick="chooseChallenge('freedom')">
            <strong>Weniger Regeln</strong>
            <small>Plattformen sollen selbst entscheiden, was sie anbieten.</small>
          </button>
        </div>
        <div class="challenge-feedback" id="challenge-feedback">Wähle deine Strategie.</div>
      `;
    }
  }
};
