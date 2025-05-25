
    const terminal = document.getElementById('terminal');
    const input = document.getElementById('command');
    const antworten = {
      'hilfe': `Verfügbare Befehle:\n  galerie – öffnet die Galerie\n  musik – öffnet Musikplayer\n  poesie – öffnet Poesiealbum\n  verlassen – schließt Terminal`,
      'demo geheim': 'Geheimer Download-Link: <a href="#" target="_blank">lucaverse.de/geheim-demo</a>',
      'warp me': 'Warp aktiv ...',
      'poesie': `Poesiealbum geladen. Verfügbare Gedichte:\n  poem 1\n  poem 2\n  poem 3\n  poem 4`,
      'poem 1': 'Poem 1:\nBin schon wieder ein bisschen in alles verliebt.',
      'poem 2': 'Poem 2:\nManchmal wünscht\' ich mir, du könntest mich als Musik sehen.\nDoch Baby, ich kam als Poesie und so werd\' ich gehen.',
      'poem 3': 'Poem 3:\nEs steigen Tränen die steile Treppe zu meinen Lidern hinauf.\nWarum ist der Himmel so bitter drauf?\nDoch ich hab vom Traurigsein keinen Schimmer.\nEigentlich ist es nie wie immer.',
      'poem 4': 'Poem 4:\nWir sind beide cool und manchmal überschneiden sich halt unsere coolness Kreise.',
      'musik': `Musikplayer geladen. Verfügbare Befehle:\n  play einzelstück\n  play danke\n  play wie du scheinst`,
      'play einzelstück': 'Einzelstück spielt... <a href="https://open.spotify.com/intl-de/track/0taUTMBdkBc8Iu7ZwvXLud?si=430bfa45821546ee" target="_blank">Jetzt auf Spotify öffnen</a>',
      'play danke': 'Danke spielt... <a href="https://open.spotify.com/intl-de/track/3ulSTpP3O8BLhVS9CHjFAM?si=6afc3e4b4dde45cf" target="_blank">Jetzt auf Spotify öffnen</a>',
      'play wie du scheinst': 'Wie du scheinst spielt... <a href="https://open.spotify.com/intl-de/track/1SCbNeZjVKu6JHEUqXRFfC?si=2ef67fee872b46b4" target="_blank">Jetzt auf Spotify öffnen</a>',

      'galerie': `Du befindest dich nun in der Galerie. Verfügbare Befehle:\n  foto 1 – foto 10\n  paint 1 – paint 5`,
      'foto 1': '<img src="img/img1.jpeg" alt="Foto 1">',
      'foto 2': '<img src="img/img2.jpeg" alt="Foto 2">',
      'foto 3': '<img src="img/img3.jpeg" alt="Foto 3">',
      'foto 4': '<img src="img/img4.jpeg" alt="Foto 4">',
      'foto 5': '<img src="img/img5.jpeg" alt="Foto 5">',
      'foto 6': '<img src="img/img6.jpeg" alt="Foto 6">',
      'foto 7': '<img src="img/img7.jpeg" alt="Foto 7">',
      'foto 8': '<img src="img/img8.jpeg" alt="Foto 8">',
      'foto 9': '<img src="img/img9.jpeg" alt="Foto 9">',
      'foto 10': '<img src="img/img10.jpeg" alt="Foto 10">',

      'paint 1': '<img src="img/paint1.jpeg" alt="Gemälde 1">',
      'paint 2': '<img src="img/paint2.jpeg" alt="Gemälde 2">',
      'paint 3': '<img src="img/paint3.jpeg" alt="Gemälde 3">',
      'paint 4': '<img src="img/paint4.jpeg" alt="Gemälde 4">',
      'paint 5': '<img src="img/paint5.jpeg" alt="Gemälde 5">',
      'verlassen': 'Terminal wird geschlossen...'
    };

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        const now = new Date();
        const timestamp = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        terminal.innerHTML += `\n[${timestamp}] > ${cmd}`;

        if (cmd === 'self destruct') {
          triggerSelfDestruct();
          return;
        }

        if (antworten[cmd]) {
          terminal.innerHTML += `\n${antworten[cmd]}`;
          if (cmd === 'verlassen') {
            setTimeout(() => document.getElementById('terminalOverlay').style.display = 'none', 1000);
          }
        } else {
          terminal.innerHTML += `\nBefehl nicht erkannt. Tippe 'hilfe' für Optionen.`;
        }

        input.value = '';
        terminal.scrollTop = terminal.scrollHeight;
      }
    });

    function openTerminal() {
      document.getElementById('terminalOverlay').style.display = 'flex';
    }

    function triggerSelfDestruct() {
      const ruin = document.createElement('div');
      ruin.className = 'system-ruin';
      ruin.textContent = '█▒░ SYSTEM FAILURE ░▒█';
      document.body.appendChild(ruin);

      let speeds = [300, 500, 700, 1000];
      let index = 0;

      function slowBlink() {
        if (index < speeds.length) {
          ruin.style.animation = `blinkFailure ${speeds[index]}ms infinite alternate`;
          index++;
          setTimeout(slowBlink, speeds[index - 1] * 5);
        } else {
          ruin.style.animation = 'none';
          ruin.style.background = 'black';
          ruin.style.color = 'black';
          ruin.textContent = '';
          setTimeout(() => {
            ruin.style.background = '#002B80';
            ruin.style.color = '#ffffff';
            ruin.innerHTML = `
              <div>🌀 SYSTEM FAILURE</div>
              <div style='font-size: 1rem; margin-top: 10px;'>…das Lucaverse ist kollabiert…</div>
              <div class='hidden-reboot' onclick="window.location.href='index.html'">reboot?</div>
            `;
          }, 2000);
        }
      }

      slowBlink();
    }
    function generateStars(layerId, count, delayBase) {
  const layer = document.getElementById(layerId);
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${delayBase + Math.random() * 20}s`;
    layer.appendChild(star);
  }
}
generateStars('stars1', 40, 20);
generateStars('stars2', 30, 30);
generateStars('stars3', 20, 40);

  // Drag-Funktion für Terminalfenster
  const terminalWindow = document.getElementById('terminalWindow');
  const dragHeader = document.getElementById('dragHeader');
  let isDragging = false, offsetX = 0, offsetY = 0;

  dragHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = terminalWindow.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  document.addEventListener('mouseup', () => isDragging = false);

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      terminalWindow.style.left = `${e.clientX - offsetX}px`;
      terminalWindow.style.top = `${e.clientY - offsetY}px`;
      terminalWindow.style.position = 'fixed';
      terminalWindow.style.transform = 'none';
    }
  });
