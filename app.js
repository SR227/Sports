// app.js — quiz flow, control pill behavior, and team-data rendering
// State lives as data-attributes on <body>: data-level, data-bg, data-tz, data-team
// CSS in styles.css reads data-level/data-bg/data-tz/data-theme to show/hide content
// and to swap accent colors. This file additionally renders the storyline and
// game cards from TEAM_DATA (team-data.js) whenever the selected team changes.

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const overlay = document.getElementById('quizOverlay');
  const steps = ['1', '2', '3', 'done'];
  let stepIndex = 0;

  function showStep(i) {
    overlay.querySelectorAll('.quiz-step').forEach(s => s.hidden = true);
    overlay.querySelector('[data-step="' + steps[i] + '"]').hidden = false;
  }

  function closeOverlay() {
    overlay.setAttribute('hidden', '');
  }

  function goNext() {
    stepIndex++;
    if (stepIndex >= steps.length) {
      closeOverlay();
      return;
    }
    showStep(stepIndex);
    if (steps[stepIndex] === 'done') {
      setTimeout(closeOverlay, 900);
    }
  }

  function syncPills(attr, value) {
    document.querySelectorAll('[' + attr + ']').forEach(p => {
      p.classList.toggle('active', p.getAttribute(attr) === value);
    });
  }

  // ---------- TEAM RENDERING ----------
  // Builds the storyline block and game cards for whichever team is selected.
  // Reads content from TEAM_DATA (team-data.js) — no other file needs to change
  // when a new team is added there.

  function renderTeam(teamKey) {
    const team = TEAM_DATA[teamKey];
    if (!team) return;

    document.getElementById('eyebrowTeam').textContent = team.name;

    const storylineEl = document.getElementById('storylineContent');
    storylineEl.innerHTML = `
      <p class="lvl-rookie">${team.storyline.rookie}</p>
      <p class="lvl-casual">${team.storyline.casual}</p>
      <p class="lvl-know">${team.storyline.know}</p>
      ${team.storyline.rugbyAside ? `<p class="aside bg-rugby">${team.storyline.rugbyAside}</p>` : ''}
    `;

    const gamesEl = document.getElementById('gamesContainer');
    gamesEl.innerHTML = team.games.map(game => `
      <div class="card">
        <span class="tag">${game.tag}</span>
        <div class="card-head">
          <span class="matchup">${game.matchup}</span>
          <span class="when">
            <span class="tz-et">${game.whenET}${game.whenETNote ? `<span class="tz-note">${game.whenETNote}</span>` : ''}</span>
            <span class="tz-sast">${game.whenSAST}${game.whenSASTNote ? `<span class="tz-note">${game.whenSASTNote}</span>` : ''}</span>
          </span>
        </div>
        <div class="card-body">
          <p class="lvl-rookie bg-us">${game.rookieUS}</p>
          <p class="lvl-rookie bg-rugby">${game.rookieRugby}</p>
          <p class="lvl-casual">${game.casual}</p>
          <p class="lvl-know">${game.know}</p>
        </div>
      </div>
    `).join('');

    const keyPlayersEl = document.getElementById('keyPlayersContainer');
    if (keyPlayersEl && team.keyPlayers) {
      keyPlayersEl.innerHTML = team.keyPlayers.map(p => `
        <div class="position-card">
          <span class="pos-name">${p.name} · ${p.role}</span>
          <p>${p.note}</p>
        </div>
      `).join('');
    }
  }

  // Team selector
  const teamSelect = document.getElementById('teamSelect');
  teamSelect.addEventListener('change', () => {
    body.setAttribute('data-team', teamSelect.value);
    renderTeam(teamSelect.value);
  });

  // Quiz answer clicks
  overlay.addEventListener('click', (e) => {
    const btn = e.target.closest('.quiz-opt');
    if (btn) {
      if (btn.dataset.q1) { body.setAttribute('data-level', btn.dataset.q1); syncPills('data-set-level', btn.dataset.q1); }
      if (btn.dataset.q2) { body.setAttribute('data-bg', btn.dataset.q2); syncPills('data-set-bg', btn.dataset.q2); }
      if (btn.dataset.q3) { body.setAttribute('data-tz', btn.dataset.q3); syncPills('data-set-tz', btn.dataset.q3); }
      goNext();
      return;
    }
    if (e.target.matches('[data-skip]')) {
      closeOverlay();
    }
  });

  // Manual pill toggles (override quiz result anytime)
  document.querySelectorAll('[data-set-level]').forEach(b => b.addEventListener('click', () => {
    body.setAttribute('data-level', b.dataset.setLevel);
    syncPills('data-set-level', b.dataset.setLevel);
  }));
  document.querySelectorAll('[data-set-bg]').forEach(b => b.addEventListener('click', () => {
    body.setAttribute('data-bg', b.dataset.setBg);
    syncPills('data-set-bg', b.dataset.setBg);
  }));
  document.querySelectorAll('[data-set-tz]').forEach(b => b.addEventListener('click', () => {
    body.setAttribute('data-tz', b.dataset.setTz);
    syncPills('data-set-tz', b.dataset.setTz);
  }));

  // How Football Works modal
  const rulesModal = document.getElementById('rulesModal');
  document.getElementById('openRules').addEventListener('click', () => {
    rulesModal.removeAttribute('hidden');
  });
  document.getElementById('closeRules').addEventListener('click', () => {
    rulesModal.setAttribute('hidden', '');
  });
  rulesModal.addEventListener('click', (e) => {
    if (e.target === rulesModal) rulesModal.setAttribute('hidden', '');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !rulesModal.hasAttribute('hidden')) {
      rulesModal.setAttribute('hidden', '');
    }
  });

  // Home/away theme toggle
  document.querySelectorAll('[data-set-theme]').forEach(b => b.addEventListener('click', () => {
    body.setAttribute('data-theme', b.dataset.setTheme);
    syncPills('data-set-theme', b.dataset.setTheme);
  }));

  // Retake quiz
  document.getElementById('retakeQuiz').addEventListener('click', () => {
    stepIndex = 0;
    showStep(0);
    overlay.removeAttribute('hidden');
  });

  // Mock signup form — replace with a real submit handler when there's a backend
  document.querySelector('.signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.querySelector('button').textContent = "You're in";
  });

  // Initial render
  body.setAttribute('data-team', teamSelect.value);
  renderTeam(teamSelect.value);
  showStep(0);
});
