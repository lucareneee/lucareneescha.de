
/*
  EUROPAFLIX — THE FUNDING GAME

  Lernsimulation zu Creative Europe.
  Die Förderbedingungen sind abhängig vom jeweiligen Förderaufruf.
  Es werden deshalb keine pauschalen Förderbeträge oder Förderquoten versprochen.
*/

const $ = (selector) => document.querySelector(selector);

const state = {
  step: 0,
  name: "",
  field: "",
  role: "",
  project: "",
  projectTitle: "",
  purpose: "",
  partners: "",
  route: "",
  budget: "",
  choices: []
};

const steps = [
  "PLAYER SETUP",
  "CHOOSE YOUR FIELD",
  "YOUR PROJECT",
  "FIND SUPPORT",
  "BUILD YOUR PLAN",
  "YOUR RESULT"
];

/* ----------------------------------
   GLOSSARY
---------------------------------- */

const glossary = {
  "Creative Europe": [
    "Das Förderprogramm der Europäischen Union für Kultur und audiovisuelle Medien. Es läuft 2021–2027 und hat drei Bereiche: CULTURE, MEDIA und CROSS-SECTORAL.",
    "Es soll kulturelle und sprachliche Vielfalt stärken und die Wettbewerbsfähigkeit der Kultur- und Kreativbranchen fördern."
  ],

  "MEDIA": [
    "Der audiovisuelle Bereich von Creative Europe. Er unterstützt unter anderem Entwicklung, Vertrieb, Sichtbarkeit und Wettbewerbsfähigkeit europäischer audiovisueller Werke.",
    "Welche Unternehmen und Projekte antragsberechtigt sind, steht jeweils im konkreten Förderaufruf."
  ],

  "CULTURE": [
    "Der Kultur-Bereich von Creative Europe. Er fördert unter anderem grenzüberschreitende Zusammenarbeit von Kulturorganisationen.",
    "Bei den European Cooperation Projects können Organisationen aus mehreren teilnehmenden Ländern gemeinsame Projekte entwickeln."
  ],

  "Cross-sectoral": [
    "Der spartenübergreifende Bereich von Creative Europe. Er unterstützt Aktivitäten, die mehrere Kultur- und Medienbereiche verbinden, sowie bestimmte Medien- und Innovationsmaßnahmen.",
    "Beispiel: Zusammenarbeit zwischen Kulturorganisationen und Akteuren aus anderen kreativen Bereichen – abhängig vom jeweiligen Aufruf."
  ],

  "Förderaufruf": [
    "Ein offizieller Aufruf zur Einreichung von Projektanträgen (Call for Proposals). Er legt Thema, Frist, Budget, Antragsberechtigung und Förderbedingungen fest.",
    "Es gibt keine dauerhaft offene Bewerbung für alle Creative-Europe-Förderungen."
  ],

  "Antragsberechtigung": [
    "Die formalen Voraussetzungen, die eine Person oder Organisation erfüllen muss, um einen Antrag stellen zu dürfen.",
    "Bei European Cooperation Projects im CULTURE-Bereich können Organisationen beantragen, Einzelpersonen nicht."
  ],

  "Koproduktion": [
    "Ein Werk, zum Beispiel ein Film, wird gemeinsam von Produktionspartnern aus mehreren Ländern entwickelt oder hergestellt.",
    "Bei MEDIA gibt es eigene Förderaufrufe für europäische Koproduktions- und Entwicklungsmodelle. Die Details hängen vom Call ab."
  ],

  "Kofinanzierung": [
    "Ein Projekt wird aus mehreren Finanzierungsquellen getragen. Ein EU-Zuschuss deckt normalerweise nicht automatisch alle Kosten.",
    "Weitere Mittel können beispielsweise Eigenmittel, nationale Förderungen oder Partnerbeiträge sein – sofern der Call sie zulässt."
  ],

  "Transnational": [
    "Etwas findet über Staatsgrenzen hinweg statt oder bezieht mehrere Länder ein.",
    "Eine Kooperation zwischen Kulturorganisationen in Deutschland, Spanien und Polen ist transnational."
  ],

  "Distribution": [
    "Die Verbreitung eines Films oder anderen audiovisuellen Werks, etwa über Kinos, Festivals, Streaming oder Vertriebspartner.",
    "MEDIA unterstützt bestimmte Aktivitäten rund um die Verbreitung europäischer Werke."
  ],

  "Audience development": [
    "Strategien, um Publikum zu erreichen, einzubeziehen und langfristig neue Zielgruppen aufzubauen.",
    "Zum Beispiel mehrsprachige Vermittlung, barrierearme Veranstaltungen oder gezielte Publikumsarbeit."
  ],

  "Projektträger": [
    "Die Organisation, die ein Projekt verantwortet und – wenn sie die Bedingungen erfüllt – den Förderantrag stellt.",
    "Bei vielen EU-Programmen ist nicht die einzelne Künstlerin, sondern eine Organisation Antragstellerin."
  ],

  "Kulturorganisation": [
    "Eine Organisation, die im Kultur- und Kreativbereich tätig ist, etwa ein Verein, eine gemeinnützige Einrichtung oder ein Unternehmen. Die genaue Definition richtet sich nach dem Förderaufruf.",
    "Ein Musikverein könnte Partner in einem internationalen Kulturprojekt sein."
  ],

  "Unabhängige Produktionsfirma": [
    "Ein Unternehmen, das audiovisuelle Inhalte eigenständig entwickelt oder produziert und nicht vollständig von einem großen Sender oder Plattformanbieter kontrolliert wird. Die genaue Definition kann je nach MEDIA-Aufruf variieren.",
    "Für bestimmte MEDIA-Aufrufe ist die Art des Produktionsunternehmens ein wichtiges Kriterium."
  ],

  "Förderquote": [
    "Der Anteil der förderfähigen Projektkosten, den ein Zuschuss abdecken kann.",
    "Die maximale Förderquote ist nicht für alle Programme gleich. Sie steht im jeweiligen Aufruf."
  ],

  "Förderfähige Kosten": [
    "Kosten, die nach den Regeln eines konkreten Förderprogramms anerkannt werden können.",
    "Nicht jede Ausgabe ist automatisch förderfähig; maßgeblich sind Call, Vertrag und Kostenregeln."
  ],

  "Meilenstein": [
    "Ein klar definierter Zwischenstand oder ein wichtiges Ereignis im Projektplan.",
    "Zum Beispiel: Drehbuch fertig, Partnerverträge unterschrieben oder erste Konzerttermine umgesetzt."
  ],

  "Creative Europe Desk": [
    "Eine nationale Beratungsstelle, die Interessierte über Creative Europe informiert und bei der Orientierung im Programm hilft.",
    "In Deutschland gibt es Creative Europe Desks für MEDIA und CULTURE."
  ],

  "Konsortium": [
    "Eine Gruppe von Organisationen, die gemeinsam einen Förderantrag stellt oder ein Projekt umsetzt.",
    "Bei einem kleinen European Cooperation Project sind mindestens drei Organisationen aus drei teilnahmeberechtigten Ländern erforderlich."
  ],

  "Kulturelle Vielfalt": [
    "Das Nebeneinander und der Austausch unterschiedlicher Sprachen, Ausdrucksformen, Perspektiven und kultureller Praktiken.",
    "Ein Ziel von Creative Europe ist, Europas kulturelle und sprachliche Vielfalt zu schützen und zu fördern."
  ]
};


/* ----------------------------------
   OFFICIAL SOURCES
---------------------------------- */

const sources = [
  [
    "Creative Europe – Programmüberblick (Europäische Kommission)",
    "https://culture.ec.europa.eu/creative-europe/about-the-creative-europe-programme",
    "Drei Programmstränge, Ziele und grundsätzliche Teilnahmebedingungen."
  ],
  [
    "Creative Europe – European Cooperation Projects",
    "https://culture.ec.europa.eu/creative-europe/creative-europe-culture-strand/european-cooperation-projects",
    "Mindestzahl der Organisationen und Länder; Einzelpersonen sind nicht antragsberechtigt."
  ],
  [
    "Creative Europe MEDIA – Content cluster",
    "https://culture.ec.europa.eu/creative-europe/creative-europe-media-strand/content-cluster",
    "Beispiele für MEDIA-Förderbereiche und Hinweis auf wettbewerbliche Calls."
  ],
  [
    "Creative Europe – Programmzahlen",
    "https://culture.ec.europa.eu/resources/creative-europe-in-numbers/programme-level-overview-of-project-data",
    "Programmziele und Budgetangabe des Programms 2021–2027."
  ],
  [
    "EU-Verordnung 2021/818",
    "https://eur-lex.europa.eu/eli/reg/2021/818/oj",
    "Rechtsgrundlage und Ziele von Creative Europe."
  ],
  [
    "EU Funding & Tenders Portal",
    "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home",
    "Offizielle aktuelle Ausschreibungen und verbindliche Call-Dokumente."
  ],
  [
    "Creative Europe Desk Deutschland",
    "https://creative-europe-desk.de/",
    "Beratung und Orientierung in Deutschland."
  ]
];


/* ----------------------------------
   GLOSSARY FUNCTIONS
---------------------------------- */

function term(name) {
  const data = glossary[name];

  if (!data) return;

  $("#termTitle").textContent = name;
  $("#termBody").textContent = data[0];
  $("#termExample").textContent = data[1];

  $("#termDialog").showModal();
}


/* ----------------------------------
   BASIC FUNCTIONS
---------------------------------- */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}


function setStep(number) {
  state.step = Math.max(0, Math.min(5, number));
  renderStep();
}


function updateSidebar() {
  $("#sidePlayerName").textContent = state.name || "PLAYER ONE";

  $("#playerAvatar").textContent =
    (state.name || "?").trim().charAt(0).toUpperCase();

  $("#sideTrack").textContent =
    state.field ? state.field.toUpperCase() : "NOT SELECTED";

  $("#progressText").textContent =
    Math.round(state.step / 5 * 100) + "%";

  $("#progressBar").style.width =
    (state.step / 5 * 100) + "%";

  $("#stepNav").querySelectorAll(".nav-step").forEach((element, index) => {
    element.classList.toggle("active", index === state.step);
    element.classList.toggle("done", index < state.step);
  });

  $("#chapterLabel").textContent =
    `CHAPTER 0${state.step + 1} / ${steps[state.step]}`;

  $("#backBtn").style.visibility =
    state.step === 0 ? "hidden" : "visible";

  $("#nextBtn").textContent =
    state.step === 5 ? "FINISH & SEE RESULT" : "CONTINUE →";
}


/* ----------------------------------
   STEP RENDERING
---------------------------------- */

function renderStep() {
  updateSidebar();

  const content = $("#stepContent");

  if (state.step === 0) {
    content.innerHTML = `
      <div class="side-kicker">01 / IDENTITY</div>

      <h2 class="step-heading">
        First, meet<br>
        your <em>player.</em>
      </h2>

      <p class="step-sub">
        Du bist die kreative Person hinter einer neuen Idee.
        Gib deinem Player einen Namen und entscheide,
        aus welcher Perspektive du das Spiel erleben möchtest.
      </p>

      <label class="form-label" for="playerName">
        YOUR PLAYER NAME
      </label>

      <input
        class="text-input"
        id="playerName"
        maxlength="32"
        placeholder="z. B. Alex Rivera"
        value="${escapeHTML(state.name)}"
      >

      <div class="form-label">CHOOSE YOUR ROLE</div>

      <div class="choice-grid">
        ${card(
          "creator",
          "✳",
          "CREATIVE / ARTIST",
          "Du entwickelst die künstlerische Idee und suchst passende Partner:innen.",
          state.role === "creator"
        )}

        ${card(
          "producer",
          "▣",
          "PRODUCER / ORGANISATION",
          "Du koordinierst ein Projekt, ein Team und die Finanzierung.",
          state.role === "producer"
        )}
      </div>

      <div class="inline-note">
        REALITY CHECK: Viele EU-Förderungen richten sich an Organisationen
        oder professionelle Unternehmen – nicht automatisch an einzelne Künstler:innen.
        Im Spiel lernst du den Unterschied kennen.
      </div>
    `;
  }


  if (state.step === 1) {
    content.innerHTML = `
      <div class="side-kicker">02 / CHOOSE YOUR PLAYER</div>

      <h2 class="step-heading">
        Choose your<br>
        <em>industry.</em>
      </h2>

      <p class="step-sub">
        Zwei kreative Welten – unterschiedliche Förderlogiken.
        Wähle den Weg, den du erkunden möchtest.
      </p>

      <div class="choice-grid">
        ${card(
          "film",
          "🎬",
          "FILM & AUDIOVISUAL",
          "Entwickle einen europäischen Spielfilm mit Partnern aus mehreren Ländern.",
          state.field === "film"
        )}

        ${card(
          "music",
          "♫",
          "MUSIC & CULTURAL COOPERATION",
          "Baue ein internationales Musik- und Kulturprojekt mit Organisationen aus mehreren Ländern auf.",
          state.field === "music"
        )}
      </div>

      <div class="inline-note">
        WICHTIG: Musik wird nicht über einen eigenen „MEDIA für Musik“-Topf gefördert.
        Für Musikprojekte können je nach Vorhaben z. B. CULTURE-Kooperationen
        oder andere passende Programme relevant sein.
      </div>
    `;
  }


  if (state.step === 2) {
    renderProject(content);
  }


  if (state.step === 3) {
    renderFunding(content);
  }


  if (state.step === 4) {
    renderPlan(content);
  }


  if (state.step === 5) {
    renderPreview(content);
  }


  bindDynamic();
}


/* ----------------------------------
   CHOICE CARD
---------------------------------- */

function card(value, icon, title, description, selected) {
  return `
    <button
      type="button"
      class="choice-card ${selected ? "selected" : ""}"
      data-choice="${value}"
    >
      <span class="select-mark">✓</span>

      <div class="choice-icon">${icon}</div>

      <strong>${title}</strong>

      <p>${description}</p>
    </button>
  `;
}


/* ----------------------------------
   STEP 3 — PROJECT
---------------------------------- */

function renderProject(content) {
  const film = state.field === "film";

  const options = film
    ? [
        [
          "development",
          "Drehbuch & Projektentwicklung",
          "Du willst Stoff, Figuren, Dramaturgie und das kreative Konzept weiterentwickeln."
        ],
        [
          "coproduction",
          "Europäische Koproduktion",
          "Du möchtest mit einer Produktionsfirma aus einem anderen Land einen Film gemeinsam entwickeln."
        ],
        [
          "distribution",
          "Vertrieb & Publikum",
          "Dein fertiger Film soll in mehreren europäischen Ländern sichtbar werden."
        ]
      ]
    : [
        [
          "cooperation",
          "Musik-Kooperationsprojekt",
          "Du willst mit Kulturorganisationen aus mehreren Ländern ein gemeinsames Musikprojekt realisieren."
        ],
        [
          "mobility",
          "Internationale Musikresidenz & Austausch",
          "Du möchtest Musiker:innen, Veranstalter:innen und Kulturorte über Ländergrenzen hinweg vernetzen."
        ],
        [
          "showcase",
          "Europäische Musikplattform / Showcase",
          "Du willst neue Musik präsentieren, Publikum aufbauen und Künstler:innen international sichtbar machen."
        ]
      ];

  content.innerHTML = `
    <div class="side-kicker">03 / MISSION BRIEF</div>

    <h2 class="step-heading">
      What do you want<br>
      to <em>create?</em>
    </h2>

    <p class="step-sub">
      Wähle das Vorhaben, das deiner Idee am nächsten kommt.
      Die Geschichte ist fiktiv, die Förderlogik orientiert sich an realen EU-Programmen.
    </p>

    <div class="scenario-box">
      <p>
        ${
          film
            ? "Du bist Teil einer unabhängigen Produktionsfirma in Deutschland. Ein junges Kreativteam hat eine Idee für einen europäischen Film. Ihr möchtet eine Geschichte erzählen, die in mehreren Ländern spielt und verschiedene Perspektiven zusammenbringt."
            : "Du arbeitest mit einem unabhängigen Musik- und Kulturverein in Deutschland. Ihr wollt Künstler:innen aus verschiedenen Ländern zusammenbringen und ein gemeinsames Projekt entwickeln – mit Konzerten, Workshops und Austausch."
        }
      </p>

      <div class="scenario-meta">
        <span class="tag">${film ? "AUDIOVISUAL" : "MUSIC & CULTURE"}</span>
        <span class="tag">GERMANY</span>
        <span class="tag">CROSS-BORDER IDEA</span>
      </div>
    </div>

    <div class="form-label">SELECT YOUR PROJECT GOAL</div>

    <div class="choice-grid">
      ${options.map(option =>
        card(
          option[0],
          "✦",
          option[1],
          option[2],
          state.project === option[0]
        )
      ).join("")}
    </div>

    <label class="form-label" for="projectTitle">
      GIVE YOUR PROJECT A NAME
    </label>

    <input
      class="text-input"
      id="projectTitle"
      maxlength="60"
      placeholder="${film ? "z. B. Across the Blue" : "z. B. Sounds Without Borders"}"
      value="${escapeHTML(state.projectTitle || "")}"
    >

    <div class="hint">
      Tipp: Dein Projektname erscheint später auf deinem Zertifikat.
    </div>
  `;
}


/* ----------------------------------
   STEP 4 — FUNDING
---------------------------------- */

function renderFunding(content) {
  const film = state.field === "film";

  const title = film
    ? "CREATIVE EUROPE · MEDIA"
    : "CREATIVE EUROPE · CULTURE";

  const description = film
    ? "MEDIA ist der Programmstrang für den audiovisuellen Sektor. Er umfasst verschiedene Förderaufrufe – zum Beispiel für Entwicklung, Koproduktion, Vertrieb oder Sichtbarkeit. Es gibt nicht den einen MEDIA-Antrag für alle Filmprojekte."
    : "CULTURE unterstützt kulturelle Zusammenarbeit über Ländergrenzen hinweg. Für European Cooperation Projects müssen Organisationen aus mehreren teilnahmeberechtigten Ländern zusammenarbeiten. Einzelpersonen können diesen Call nicht allein beantragen.";

  const match = film
    ? "Dein Vorhaben kann grundsätzlich in die MEDIA-Welt passen. Welche konkrete MEDIA-Ausschreibung passt, hängt davon ab, ob du Entwicklung, Koproduktion oder Vertrieb planst – und ob Antragsteller und Projekt die Call-Regeln erfüllen."
    : "Ein transnationales Musikprojekt kann inhaltlich zur CULTURE-Schiene passen, wenn es als Kulturkooperation von Organisationen aufgebaut ist. Bei European Cooperation Projects gilt: mindestens 3 Organisationen aus 3 teilnahmeberechtigten Ländern (small scale), 5 aus 5 (medium scale) oder 10 aus 10 (large scale).";

  content.innerHTML = `
    <div class="side-kicker">04 / FUNDING INTELLIGENCE</div>

    <h2 class="step-heading">
      Who could<br>
      <em>back you?</em>
    </h2>

    <p class="step-sub">
      Jetzt ordnest du dein Projekt einem realen Förderrahmen zu.
      Wähle den Weg, den du genauer prüfen möchtest.
    </p>

    <div class="funding-callout">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>

    <div class="inline-note">
      ${match}
    </div>

    <div class="form-label">
      CHOOSE THE FUNDING ROUTE TO EXPLORE
    </div>

    <div class="choice-grid">
      ${card(
        "eu",
        "🇪🇺",
        "EUROPEAN PROGRAMME",
        "Creative Europe – EU-Förderung mit transnationaler Perspektive.",
        state.route === "eu"
      )}

      ${card(
        "national",
        "🏛",
        "NATIONAL / REGIONAL FUNDING",
        "Eine nationale oder regionale Förderung kann ergänzend wichtig sein. Sie ist nicht dasselbe wie Creative Europe.",
        state.route === "national"
      )}
    </div>

    <div class="inline-note">
      Du kannst im Spiel den EU-Weg oder den nationalen Weg erkunden.
      Für den Projektabschluss wird erklärt, warum die Kombination
      verschiedener Finanzierungsquellen oft wichtig ist.
      <button class="term" type="button" data-term="Kofinanzierung">Kofinanzierung</button>
    </div>
  `;
}


/* ----------------------------------
   STEP 5 — PROJECT PLAN
---------------------------------- */

function renderPlan(content) {
  content.innerHTML = `
    <div class="side-kicker">05 / BUILD YOUR PLAN</div>

    <h2 class="step-heading">
      Make it<br>
      <em>work.</em>
    </h2>

    <p class="step-sub">
      Ein Förderantrag braucht mehr als eine gute Idee.
      Triff drei Planungsentscheidungen für dein Projekt.
    </p>

    <label class="form-label" for="partners">
      1. YOUR INTERNATIONAL PARTNERS
    </label>

    <select class="select-input" id="partners">
      <option value="">Bitte auswählen …</option>
      <option value="one">Ich habe bisher nur Partner in Deutschland.</option>
      <option value="two">Ich habe eine Organisation / Firma in einem weiteren Land.</option>
      <option value="three">Ich arbeite mit Partnern aus mindestens drei Ländern.</option>
      <option value="none">Ich habe noch keine Partner und muss sie erst finden.</option>
    </select>

    <label class="form-label" for="purpose">
      2. WHAT IS THE EUROPEAN ADDED VALUE?
    </label>

    <select class="select-input" id="purpose">
      <option value="">Bitte auswählen …</option>
      <option value="exchange">Künstlerischer Austausch und Zusammenarbeit über Grenzen hinweg.</option>
      <option value="audience">Ein vielfältiges Publikum in mehreren Ländern erreichen.</option>
      <option value="industry">Die Wettbewerbsfähigkeit und professionelle Entwicklung der Branche stärken.</option>
      <option value="local">Nur ein lokales Projekt ohne internationale Zusammenarbeit umsetzen.</option>
    </select>

    <label class="form-label" for="budget">
      3. HOW FAR IS YOUR PROJECT?
    </label>

    <select class="select-input" id="budget">
      <option value="">Bitte auswählen …</option>
      <option value="idea">Erste Idee – Konzept und Partner fehlen noch.</option>
      <option value="developing">Konzept steht – Team und Finanzierung werden aufgebaut.</option>
      <option value="ready">Partner, Zeitplan und Kostenplan sind weitgehend geklärt.</option>
    </select>

    <div class="inline-note">
      Ein realistischer Kosten- und Finanzierungsplan muss zwischen
      <button class="term" type="button" data-term="Förderfähige Kosten">Förderfähigen Kosten</button>,
      Eigenmitteln und weiteren Quellen unterscheiden.
      Konkrete Förderquoten werden hier bewusst nicht erfunden –
      sie stehen im jeweiligen
      <button class="term" type="button" data-term="Förderaufruf">Förderaufruf</button>.
    </div>
  `;

  if (state.partners) $("#partners").value = state.partners;
  if (state.purpose) $("#purpose").value = state.purpose;
  if (state.budget) $("#budget").value = state.budget;
}


/* ----------------------------------
   STEP 6 — RESULT PREVIEW
---------------------------------- */

function renderPreview(content) {
  const film = state.field === "film";
  const assessment = assess();

  content.innerHTML = `
    <div class="side-kicker">06 / YOUR FUNDING OUTLOOK</div>

    <h2 class="step-heading">
      Your project.<br>
      Your <em>next move.</em>
    </h2>

    <p class="step-sub">
      Das ist dein persönlicher Lern- und Orientierungsbericht.
      Er ist keine Prüfung und keine Förderzusage.
    </p>

    <div class="scenario-box">
      <p>
        <strong>${escapeHTML(state.projectTitle || "Untitled project")}</strong><br>
        ${film ? "Ein audiovisuelles Vorhaben" : "Ein Musik- und Kulturvorhaben"}
        · ${escapeHTML(state.name)}
      </p>
    </div>

    <div class="score-strip">
      <div>
        <strong>${assessment.level}</strong>
        <span>PROJECT READINESS</span>
      </div>

      <div>
        <strong>${assessment.partnerLabel}</strong>
        <span>PARTNER STATUS</span>
      </div>

      <div>
        <strong>${film ? "MEDIA" : "CULTURE"}</strong>
        <span>ROUTE EXPLORED</span>
      </div>
    </div>

    <div class="funding-callout">
      <h3>${assessment.headline}</h3>
      <p>${assessment.summary}</p>
    </div>

    <ul class="mini-list">
      ${assessment.points.map(point => `<li>${point}</li>`).join("")}
    </ul>

    <div class="inline-note">
      Deine Entscheidungen werden im Ergebnisbericht und auf dem Zertifikat zusammengefasst.
      Klicke auf „Finish & see result“, um dein Zertifikat zu erstellen.
    </div>
  `;
}


/* ----------------------------------
   ASSESSMENT LOGIC
---------------------------------- */

function assess() {
  const film = state.field === "film";
  const partner = state.partners;

  let level = "IN PROGRESS";
  let partnerLabel = "OPEN";

  if (
    partner === "three" &&
    state.budget === "ready" &&
    state.purpose !== "local"
  ) {
    level = "WELL PREPARED";
  } else if (
    partner === "two" ||
    state.budget === "developing"
  ) {
    level = "BUILDING";
  }

  if (partner === "three") partnerLabel = "3+ COUNTRIES";
  else if (partner === "two") partnerLabel = "2 COUNTRIES";
  else if (partner === "one") partnerLabel = "ONE COUNTRY";
  else partnerLabel = "TO FIND";

  let headline;
  let summary;
  let points = [];

  if (film) {
    headline = state.project === "coproduction"
      ? "MEDIA CO-PRODUCTION / DEVELOPMENT IS WORTH INVESTIGATING"
      : "CREATIVE EUROPE MEDIA IS A RELEVANT STARTING POINT";

    summary =
      "Dein Filmprojekt sollte anhand eines konkreten MEDIA-Aufrufs geprüft werden. MEDIA ist kein pauschaler Zuschuss für jeden Film: Antragsteller, Projektphase, Länderbezug, Rechte, Unternehmensprofil und Fristen unterscheiden sich je nach Call.";

    points = [
      "Prüfe, ob deine Produktionsfirma und das konkrete Werk die Voraussetzungen des passenden MEDIA-Calls erfüllen.",
      "Bei einer Koproduktion müssen die Anforderungen des jeweiligen Calls an Länder, unabhängige Produktionsunternehmen und Rechte geprüft werden.",
      "Entwickle einen realistischen Finanzierungsplan und prüfe ergänzend nationale bzw. regionale Filmförderungen.",
      "Nutze den Creative Europe Desk MEDIA Deutschland für eine erste Orientierung."
    ];

  } else {
    headline = "CULTURE COOPERATION COULD BE A ROUTE TO EXPLORE";

    summary =
      "Dein Musikvorhaben kann in den Kultur-Bereich passen, wenn es als grenzüberschreitendes Projekt von Kulturorganisationen gestaltet wird. Ein einzelner Artist kann European Cooperation Projects nicht allein beantragen.";

    points = [
      "Für European Cooperation Projects: small scale mindestens 3 Organisationen aus 3 teilnahmeberechtigten Ländern; medium scale 5 aus 5; large scale 10 aus 10.",
      "Dein Projekt braucht eine klare gemeinsame Idee, Aufgabenverteilung und einen europäischen Mehrwert – nicht nur mehrere Gastauftritte.",
      "Einzelpersonen sind bei European Cooperation Projects nicht antragsberechtigt; eine geeignete Organisation muss Antragstellerin sein.",
      "Prüfe zusätzlich andere nationale, regionale oder sektorspezifische Musikförderungen – je nach Aktivität und Call."
    ];
  }

  if (state.partners === "one" || state.partners === "none") {
    points.push(
      "Nächster sinnvoller Schritt: passende internationale Partnerorganisationen finden und Rollen klären."
    );
  }

  if (state.purpose === "local") {
    points.push(
      "Achtung: Ein rein lokales Vorhaben ohne transnationale Dimension passt nicht zum Kern der hier beschriebenen EU-Kooperationsförderung."
    );
  }

  if (state.route === "national") {
    points.unshift(
      "Du hast den nationalen Förderweg gewählt. Suche ein konkretes Förderprogramm in deinem Land oder Bundesland; die Regeln sind nicht mit Creative Europe gleichzusetzen."
    );
  }

  return {
    level,
    partnerLabel,
    headline,
    summary,
    points
  };
}


/* ----------------------------------
   CERTIFICATE + FINAL REPORT
---------------------------------- */

function finish() {
  const assessment = assess();
  const film = state.field === "film";

  $("#gameShell").classList.add("hidden");
  $("#certificate").classList.remove("hidden");

  $("#certName").textContent = state.name || "PLAYER";

  $("#certField").textContent = film
    ? "FILM & AUDIOVISUAL"
    : "MUSIC & CULTURE";

  $("#certProject").textContent =
    state.projectTitle || "UNTITLED PROJECT";

  $("#certRoute").textContent =
    state.route === "national"
      ? "NATIONAL / REGIONAL ROUTE"
      : film
        ? "CREATIVE EUROPE · MEDIA"
        : "CREATIVE EUROPE · CULTURE";

  $("#certDate").textContent =
    new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(new Date());


  $("#resultWrap").innerHTML = `
    <h3>YOUR PROJECT REPORT</h3>

    <p>
      ${escapeHTML(state.name)}, du hast den Funding Explorer abgeschlossen.
      Hier ist deine Auswertung:
    </p>

    <div class="result-grid">

      <div class="result-card">
        <h4>01 / YOUR PROJECT</h4>
        <p>
          <strong>${escapeHTML(state.projectTitle || "Untitled project")}</strong><br>
          ${film ? "Film & audiovisuelle Medien" : "Musik & Kultur"}<br>
          ${state.project || "Project idea"}
        </p>
      </div>

      <div class="result-card">
        <h4>02 / FUNDING ROUTE</h4>
        <p>
          ${assessment.headline}<br><br>
          ${assessment.summary}
        </p>
      </div>

      <div class="result-card">
        <h4>03 / YOUR NEXT STEPS</h4>
        <ul>
          ${assessment.points.map(point => `<li>${point}</li>`).join("")}
        </ul>
      </div>

      <div class="result-card">
        <h4>04 / WHAT YOU LEARNED</h4>
        <p>
          EU-Förderung setzt häufig Kooperation, klare Ziele,
          geeignete Antragsteller und einen nachvollziehbaren
          Finanzierungsplan voraus. Der passende Förderweg hängt
          immer von den konkreten Bedingungen des jeweiligen Calls ab.
        </p>
      </div>

    </div>

    <div class="result-disclaimer">
      IMPORTANT: Dies ist eine didaktische Simulation.
      Sie prüft nicht rechtsverbindlich deine Antragsberechtigung
      und berechnet keine Fördersumme. Förderaufrufe, Fristen,
      Länderlisten und Bedingungen können sich ändern.
      Verbindlich sind ausschließlich die aktuellen Call-Dokumente
      im EU Funding & Tenders Portal bzw. auf den Seiten
      der zuständigen Förderstellen.
    </div>

    <h4 style="margin-top:24px">CHECK YOUR SOURCES</h4>

    <p>
      <a href="https://culture.ec.europa.eu/creative-europe/about-the-creative-europe-programme"
         target="_blank" rel="noopener">
        Creative Europe – official overview ↗
      </a>
      ·
      <a href="https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home"
         target="_blank" rel="noopener">
        Funding & Tenders Portal ↗
      </a>
      ·
      <a href="https://creative-europe-desk.de/"
         target="_blank" rel="noopener">
        Creative Europe Desk Germany ↗
      </a>
    </p>
  `;
}


/* ----------------------------------
   DYNAMIC BUTTONS
---------------------------------- */

function bindDynamic() {
  $("#stepContent")
    .querySelectorAll("[data-choice]")
    .forEach(button => {
      button.addEventListener("click", () => {
        const value = button.dataset.choice;

        if (state.step === 0) {
          state.role = value;
        }

        if (state.step === 1) {
          state.field = value;
          state.project = "";
        }

        if (state.step === 2) {
          state.project = value;
        }

        if (state.step === 3) {
          state.route = value;
        }

        renderStep();
      });
    });


  $("#stepContent")
    .querySelectorAll("[data-term]")
    .forEach(button => {
      button.addEventListener("click", () => {
        term(button.dataset.term);
      });
    });


  const nameInput = $("#playerName");

  if (nameInput) {
    nameInput.addEventListener("input", event => {
      state.name = event.target.value;
      updateSidebar();
    });
  }


  const titleInput = $("#projectTitle");

  if (titleInput) {
    titleInput.addEventListener("input", event => {
      state.projectTitle = event.target.value;
    });
  }
}


/* ----------------------------------
   NEXT / BACK NAVIGATION
---------------------------------- */

function next() {

  if (state.step === 0) {
    state.name = ($("#playerName").value || "").trim();

    if (!state.name) {
      alert("Bitte gib deinem Player einen Namen.");
      return;
    }

    if (!state.role) {
      alert("Bitte wähle eine Rolle.");
      return;
    }
  }


  if (state.step === 1 && !state.field) {
    alert("Bitte wähle Film oder Musik.");
    return;
  }


  if (state.step === 2) {
    state.projectTitle =
      ($("#projectTitle").value || "").trim();

    if (!state.project) {
      alert("Bitte wähle ein Projektziel.");
      return;
    }
  }


  if (state.step === 3 && !state.route) {
    alert("Bitte wähle einen Förderweg.");
    return;
  }


  if (state.step === 4) {
    state.partners = $("#partners").value;
    state.purpose = $("#purpose").value;
    state.budget = $("#budget").value;

    if (
      !state.partners ||
      !state.purpose ||
      !state.budget
    ) {
      alert("Bitte beantworte alle drei Planungsfragen.");
      return;
    }
  }


  if (state.step === 5) {
    finish();
    return;
  }

  setStep(state.step + 1);
}


function previous() {
  if (state.step > 0) {
    setStep(state.step - 1);
  }
}


/* ----------------------------------
   GLOSSARY WINDOW
---------------------------------- */

function openGlossary() {
  const list = $("#glossaryList");

  list.innerHTML = Object.entries(glossary)
    .map(([key, value]) => `
      <button class="glossary-item" data-term="${key}">
        <strong>${key}</strong>
        <span>${value[0]}</span>
      </button>
    `)
    .join("");

  list.querySelectorAll("[data-term]").forEach(button => {
    button.addEventListener("click", () => {
      term(button.dataset.term);
    });
  });

  $("#glossarySearch").value = "";
  $("#glossaryDialog").showModal();
}


/* ----------------------------------
   SOURCES WINDOW
---------------------------------- */

function showSources() {
  $("#sourceContent").innerHTML = `
    <p>
      Die fachlichen Aussagen wurden an offiziellen EU-Quellen ausgerichtet.
      Datenstand dieser Lernsimulation: <strong>24. November 2026</strong>.
      Das Spiel nennt bewusst keine pauschalen Fördersummen oder Förderquoten,
      weil diese vom einzelnen Förderaufruf abhängen.
    </p>

    <ul>
      ${sources.map(source => `
        <li>
          <strong>${source[0]}</strong><br>
          ${source[2]}<br>
          <a href="${source[1]}" target="_blank" rel="noopener">
            ${source[1]}
          </a>
        </li>
      `).join("")}
    </ul>

    <p>
      <strong>Wichtige Abgrenzung:</strong>
      Creative Europe CULTURE ist nicht der „Musik-Topf“ für Einzelmusiker:innen.
      European Cooperation Projects sind für Organisationen angelegt und
      verlangen ein Konsortium mit Mindestzahlen an Ländern und Partnern.
      MEDIA betrifft den audiovisuellen Sektor und arbeitet mit
      unterschiedlichen, jeweils eigenen Calls.
    </p>
  `;

  $("#sourcesDialog").showModal();
}


/* ----------------------------------
   EVENT LISTENERS
---------------------------------- */

$("#startGame").addEventListener("click", () => {
  $("#introPanel").classList.add("hidden");
  $("#gameShell").classList.remove("hidden");

  setStep(0);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


$("#nextBtn").addEventListener("click", next);
$("#backBtn").addEventListener("click", previous);

$("#glossaryTop").addEventListener("click", openGlossary);
$("#sourcesBtn").addEventListener("click", showSources);

$("#printBtn").addEventListener("click", () => {
  window.print();
});


$("#restartBtn").addEventListener("click", () => {
  Object.keys(state).forEach(key => {
    state[key] =
      key === "step" ? 0 :
      key === "choices" ? [] :
      "";
  });

  $("#certificate").classList.add("hidden");
  $("#introPanel").classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    $("#" + button.dataset.close).close();
  });
});


$("#glossarySearch").addEventListener("input", event => {
  const query = event.target.value.toLowerCase();

  $("#glossaryList")
    .querySelectorAll(".glossary-item")
    .forEach(element => {
      element.classList.toggle(
        "hidden",
        !element.textContent.toLowerCase().includes(query)
      );
    });
});


document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll("dialog[open]").forEach(dialog => {
      dialog.close();
    });
  }
});
 