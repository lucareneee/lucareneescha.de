const shelvesData = [
  alert("NEUE EUROPAFLIX-JAVASCRIPT-DATEI GELADEN!");
  {
    name: "🔥 Trending in Europe",
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
    name: "🎬 Hollywood vs. Europe",
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
    name: "🎧 Behind the Music",
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
    name: "📺 Who controls the Stream?",
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
    name: "🌍 Culture Without Borders",
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
    name: "🏛️ Inside the EU",
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

// Inhalte für einzelne Episoden.
// Noch offene Stellen sind bewusst als Platzhalter gekennzeichnet.
const episodes = {
  "Hollywood vs. Europe": {
    intro: "Zwei Filmwelten, ein Kinomarkt. Wie behauptet sich das europäische Kino gegen die internationale Konkurrenz?",
    accent: "#ff4c83",
    kind: "film",
    sections: [
      ["DAS PROBLEM", "US-amerikanische Produktionen sind international sehr präsent. Europäische Filme müssen sich in einem stark umkämpften Markt behaupten."],
      ["DIE AKTEURE", "Filmproduktionen, Verleihe, Kinos, nationale Förderinstitutionen und internationale Studios."],
      ["DIE EU", "Mit Creative Europe MEDIA unterstützt die EU unter anderem die Entwicklung, Verbreitung und internationale Zusammenarbeit europäischer Filme."],
      ["DIE DEBATTE", "Wie viel Förderung ist sinnvoll? Und wie kann europäisches Kino sichtbar bleiben, ohne die künstlerische Freiheit einzuschränken?"]
    ]
  },

  "The 30% Rule": {
    intro: "Stell dir vor, du öffnest einen Streamingdienst. Wie viel davon muss eigentlich aus Europa kommen?",
    accent: "#5ce5e6",
    kind: "quota",
    sections: [
      ["DIE REGEL", "Audiovisuelle On-Demand-Dienste müssen mindestens 30 % europäische Werke in ihren Katalogen anbieten."],
      ["DAS ZIEL", "Europäische Produktionen sollen neben internationalen Inhalten Platz finden und für das Publikum zugänglich sein."],
      ["DIE UMSETZUNG", "Die Mitgliedstaaten setzen die EU-Richtlinie in nationales Recht um. Unter bestimmten Bedingungen können sie auch finanzielle Beiträge von Plattformen verlangen."],
      ["DIE DEBATTE", "Reicht es, europäische Filme im Katalog zu haben? Oder müssen sie auch auf der Startseite und in Empfehlungen sichtbar sein?"]
    ]
  },

  "The Spotify Question": {
    intro: "Millionen Menschen hören täglich Musik über Streamingdienste. Doch wie kommt das Geld von einem Abo bei den Künstler*innen an?",
    accent: "#b99aff",
    kind: "music",
    sections: [
      ["DAS PROBLEM", "Streaming-Einnahmen werden über Lizenz- und Vergütungsmodelle verteilt. Einen einheitlichen festen Betrag pro Stream gibt es nicht."],
      ["DIE AKTEURE", "Musiker*innen, Labels, Musikverlage, Verwertungsgesellschaften und Streamingplattformen."],
      ["DIE EU", "Die EU setzt Regeln für Urheberrecht und Transparenz. Auch die faire Vergütung von Kreativen ist Gegenstand politischer Diskussionen."],
      ["DIE DEBATTE", "Wie lässt sich sicherstellen, dass Künstler*innen fair an den Einnahmen beteiligt werden?"]
    ]
  },

  "Creative Europe: MEDIA": {
    intro: "Europäische Filme brauchen mehr als gute Ideen. Sie brauchen Finanzierung, Vertrieb und ein Publikum. Hier setzt das EU-Programm MEDIA an.",
    accent: "#c99aff",
    kind: "funding",
    sections: [
      ["DAS ZIEL", "Die europäische Film- und audiovisuelle Branche stärken und grenzüberschreitende Zusammenarbeit ermöglichen."],
      ["DIE FÖRDERUNG", "Unterstützt werden unter anderem Entwicklung, Verleih, Festivals, Netzwerke, Weiterbildung und internationale Kooperation."],
      ["DIE EU", "MEDIA ist Teil des Förderprogramms Creative Europe 2021–2027."],
      ["DIE DEBATTE", "Wie werden Fördermittel verteilt? Erreichen sie auch kleinere Produktionsfirmen und Länder mit kleineren Märkten?"]
    ]
  }
};

function renderShelves() {
  const container = document.getElementById("shelves");
  container.innerHTML = "";

  shelvesData.forEach(shelf => {
    const section = document.createElement("section");
    section.className = "shelf";

    const heading = document.createElement("div");
    heading.className = "shelf-heading";
    heading.innerHTML = `
      <h3>${shelf.name}</h3>
      <span>${shelf.subtitle}</span>
    `;

    const track = document.createElement("div");
    track.className = "poster-track";

    shelf.items.forEach(([title, subtitle, tag, accent, symbol]) => {
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

      poster.addEventListener("click", () => openEpisode(title, accent, tag, subtitle));
      track.appendChild(poster);
    });

    section.appendChild(heading);
    section.appendChild(track);
    container.appendChild(section);
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

function openTopic(topicName) {
  if (topicName === "challenge") {
    openChallenge();
  } else {
    openEpisode(topicName);
  }
}

function openEpisode(title, accent = "#ff3d91", tag = "EUROPAFLIX ORIGINAL", subtitle = "") {
  const data = episodes[title] || {
    intro: subtitle
      ? `${subtitle} Entdecke, welche Bedeutung dieses Thema für die europäische Kultur- und Kreativwirtschaft hat.`
      : "Hier beginnt eine weitere Episode deiner EUROPAFLIX-Entdeckungsreise.",
    accent,
    kind: "standard",
    sections: [
      ["DAS PROBLEM", "[PLATZHALTER: Was ist die konkrete Herausforderung?]"],
      ["DIE AKTEURE", "[PLATZHALTER: Welche Länder, Unternehmen oder Interessengruppen spielen eine Rolle?]"],
      ["DIE EU", "[PLATZHALTER: Was machen Kommission, Parlament und Rat? Gibt es konkrete Initiativen?]"],
      ["DIE DEBATTE", "[PLATZHALTER: Wer unterstützt oder kritisiert die Maßnahmen – und warum?]"]
    ]
  };

  document.getElementById("home").classList.add("hidden");
  const detail = document.getElementById("detail");
  detail.classList.remove("hidden");

  let visual = "";

  if (data.kind === "quota") {
    visual = `
      <section class="episode-visual">
        <div class="visual-heading">
          <span>DER STREAMING-KATALOG</span>
          <strong>30 % EUROPEAN WORKS</strong>
        </div>
        <div class="quota-grid">
          ${Array.from({ length: 10 }, (_, i) =>
            `<div class="quota-tile ${i < 3 ? "european" : ""}">
              ${i < 3 ? "★" : "▶"}
            </div>`
          ).join("")}
        </div>
        <p class="visual-caption">Schematische Darstellung: 3 von 10 Kacheln entsprechen 30 %. Die Quote bezieht sich auf Werke im Katalog – nicht auf die Wiedergabezeit.</p>
      </section>
      <section class="episode-interaction">
        <h3>ABER WAS BEDEUTET SICHTBARKEIT?</h3>
        <p>Ein Film kann im Katalog vorhanden sein und trotzdem schwer zu finden sein.</p>
        <button class="reveal-button" onclick="revealFact(this)">Warum gibt es zusätzlich eine Sichtbarkeitsregel?</button>
        <div class="reveal-answer hidden">
          Die Richtlinie verlangt auch eine angemessene Herausstellung europäischer Werke. Es geht also nicht nur darum, dass sie irgendwo im Katalog liegen.
        </div>
      </section>
    `;
  } else if (data.kind === "film") {
    visual = `
      <section class="episode-visual">
        <div class="visual-heading">
          <span>ZWEI FILMWELTEN</span>
          <strong>WER BEKOMMT DAS RAMPENLICHT?</strong>
        </div>
        <div class="comparison">
          <div class="comparison-side hollywood">
            <div class="comparison-symbol">★</div>
            <h3>HOLLYWOOD</h3>
            <p>Internationale Studios</p>
            <strong>[ZAHL EINFÜGEN]</strong>
            <small>Marktanteil / Bezugsjahr</small>
          </div>
          <div class="comparison-vs">VS.</div>
          <div class="comparison-side europe">
            <div class="comparison-symbol">✦</div>
            <h3>EUROPE</h3>
            <p>Europäische Produktionen</p>
            <strong>[ZAHL EINFÜGEN]</strong>
            <small>Marktanteil / Bezugsjahr</small>
          </div>
        </div>
        <p class="visual-caption">Hier später vergleichbare Marktanteile mit Quelle und Jahr einsetzen.</p>
      </section>
      <section class="episode-interaction">
        <h3>WARUM IST DAS WICHTIG?</h3>
        <p>Marktanteile zeigen, welche Filme im Kino besonders präsent sind. Sie sagen aber nicht allein etwas über Qualität oder kulturelle Bedeutung aus.</p>
        <button class="reveal-button" onclick="revealFact(this)">Was kann die EU dagegen tun?</button>
        <div class="reveal-answer hidden">
          Die EU kann beispielsweise über Creative Europe MEDIA die Entwicklung, Verbreitung und Zusammenarbeit europäischer Filmproduktionen unterstützen.
        </div>
      </section>
    `;
  } else if (data.kind === "music") {
    visual = `
      <section class="episode-visual">
        <div class="visual-heading">
          <span>VOM ABO ZUM SONG</span>
          <strong>WOHIN FLIESST DAS GELD?</strong>
        </div>
        <div class="money-flow">
          <div class="flow-step"><span>1</span><strong>ABO</strong><small>Dein Monatsbeitrag</small></div>
          <div class="flow-arrow">→</div>
          <div class="flow-step"><span>2</span><strong>PLATTFORM</strong><small>Streamingdienst</small></div>
          <div class="flow-arrow">→</div>
          <div class="flow-step"><span>3</span><strong>RECHTE</strong><small>Labels, Verlage etc.</small></div>
          <div class="flow-arrow">→</div>
          <div class="flow-step"><span>4</span><strong>KREATIV</strong><small>Künstler*innen</small></div>
        </div>
        <p class="visual-caption">Vereinfachtes Modell. Die tatsächliche Verteilung hängt von Verträgen und Rechteketten ab.</p>
      </section>
      <section class="episode-interaction">
        <h3>IST EIN STREAM IMMER GLEICH VIEL WERT?</h3>
        <p>Nein. Es gibt keinen allgemein gültigen festen Betrag, der für jeden Stream direkt an die Künstler*innen ausgezahlt wird.</p>
        <button class="reveal-button" onclick="revealFact(this)">Warum ist das so?</button>
        <div class="reveal-answer hidden">
          Einnahmen werden nach verschiedenen Modellen und Verträgen verteilt. Entscheidend ist unter anderem, wer welche Rechte an der Aufnahme und am Song besitzt.
        </div>
      </section>
    `;
  } else if (data.kind === "funding") {
    visual = `
      <section class="episode-visual">
        <div class="visual-heading">
          <span>EUROPEAN SUPPORT</span>
          <strong>CREATIVE EUROPE MEDIA</strong>
        </div>
        <div class="funding-grid">
          <div>🎬<strong>Entwicklung</strong><small>Neue Filmideen und Projekte</small></div>
          <div>🌍<strong>Verleih</strong><small>Filme über Grenzen bringen</small></div>
          <div>🎓<strong>Weiterbildung</strong><small>Wissen und Fähigkeiten stärken</small></div>
          <div>🎪<strong>Festivals</strong><small>Europäische Filme präsentieren</small></div>
        </div>
        <p class="visual-caption">Beispiele für Förderbereiche des MEDIA-Programms.</p>
      </section>
    `;
  } else {
    visual = `
      <section class="episode-visual">
        <div class="visual-heading">
          <span>DEIN EPISODEN-ÜBERBLICK</span>
          <strong>THE STORY SO FAR</strong>
        </div>
        <div class="placeholder-visual">
          <div class="placeholder-symbol">✦</div>
          <p>HIER KOMMT DEINE GRAFIK HIN</p>
          <small>Zum Beispiel: Karte, Zahlenvergleich, Akteursübersicht oder Zeitstrahl</small>
        </div>
      </section>
    `;
  }

  const sections = data.sections.map((section, index) => `
    <article class="episode-card">
      <span>0${index + 1}</span>
      <h3>${section[0]}</h3>
      <p>${section[1]}</p>
    </article>
  `).join("");

  document.getElementById("detail-content").innerHTML = `
    <div class="episode-hero" style="--episode-accent: ${data.accent || accent}">
      <div class="episode-label">${tag}</div>
      <h1>${title}</h1>
      <p>${data.intro}</p>
      <div class="episode-meta">EUROPAFLIX ORIGINAL <span>•</span> INTERAKTIVE EPISODE</div>
    </div>

    ${visual}

    <div class="episode-section-heading">
      <div class="eyebrow">DIE HINTERGRÜNDE</div>
      <h2>Was steckt dahinter?</h2>
    </div>

    <div class="episode-cards">${sections}</div>

    <div class="episode-end">
      <div>
        <div class="eyebrow">ENDE DER EPISODE</div>
        <h2>Weiter geht's.</h2>
        <p>Entdecke weitere Geschichten aus Europas Kultur- und Kreativwirtschaft.</p>
      </div>
      <button class="primary-button" onclick="showHome()">← Zurück zum Katalog</button>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function revealFact(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle("hidden");
  button.textContent = answer.classList.contains("hidden")
    ? "Mehr erfahren"
    : "Weniger anzeigen";
}

function openChallenge() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("detail").classList.remove("hidden");

  document.getElementById("detail-content").innerHTML = `
    <div class="episode-hero" style="--episode-accent: #ff3d91">
      <div class="episode-label">EUROPAFLIX INTERACTIVE</div>
      <h1>DU BIST AM DRÜCKER.</h1>
      <p>Du bist Programmchef*in eines europäischen Streamingdienstes. Deine Aufgabe: europäische Geschichten sichtbar machen. Welche Strategie wählst du?</p>
    </div>

    <section class="episode-visual">
      <div class="visual-heading">
        <span>DEINE ENTSCHEIDUNG</span>
        <strong>WIE SOLL EUROPAFLIX AUSSEHEN?</strong>
      </div>
      <div class="challenge-options">
        <button class="challenge-option" onclick="chooseChallenge('quota', this)">
          <strong>30%-Quote</strong>
          <small>Europäische Werke müssen einen festen Platz im Katalog haben.</small>
        </button>
        <button class="challenge-option" onclick="chooseChallenge('funding', this)">
          <strong>Mehr Förderung</strong>
          <small>Europäische Produktionen und Talente finanziell unterstützen.</small>
        </button>
        <button class="challenge-option" onclick="chooseChallenge('freedom', this)">
          <strong>Weniger Regeln</strong>
          <small>Plattformen sollen selbst entscheiden, was sie anbieten.</small>
        </button>
      </div>
      <div class="challenge-feedback" id="challenge-feedback">Wähle eine Strategie, um die Folgen zu entdecken.</div>
    </section>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function chooseChallenge(choice, button) {
  document.querySelectorAll(".challenge-option").forEach(option => {
    option.classList.remove("selected");
  });

  button.classList.add("selected");

  const responses = {
    quota: "Du setzt auf Sichtbarkeit: Die 30%-Quote sichert europäischen Werken einen Platz im Katalog. Aber ein Platz im Katalog bedeutet noch nicht automatisch, dass sie auch gefunden werden.",
    funding: "Du setzt auf Förderung: Programme wie Creative Europe MEDIA unterstützen die europäische Filmbranche. Die große Frage ist, wie die Mittel verteilt werden und wer davon profitiert.",
    freedom: "Du setzt auf weniger Regulierung: Plattformen behalten mehr Entscheidungsfreiheit. Das kann aber dazu führen, dass kleinere europäische Produktionen im Wettbewerb schwerer sichtbar werden."
  };

  document.getElementById("challenge-feedback").textContent = responses[choice];
}

renderShelves();