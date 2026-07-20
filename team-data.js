// team-data.js
// All team-specific content lives here. Adding a new team means adding one
// object to TEAM_DATA below, plus one small CSS variable block in styles.css
// (see the "TEAM COLORS" section) for its accent colors. Nothing else changes.

const TEAM_DATA = {

  chiefs: {
    name: "Kansas City Chiefs",
    short: "Chiefs",
    storyline: {
      rookie: "The Chiefs are one NFL team out of 32, trying to make the playoffs — a tournament at the end of the season that decides the champion. Last year they had a bad season and missed it. This year, everyone's watching to see if they bounce back.",
      casual: "The Chiefs are coming off a rough 6-11 season that snapped years of dominance. This year is about answering two questions: is quarterback Patrick Mahomes fully healthy again, and is this tight end Travis Kelce's last ride? Both storylines run through every game.",
      know: "Andy Reid is now the league's longest-tenured head coach, but 2025's 6-11 finish broke the Chiefs' run atop the AFC. The offense gets real reinforcements this year — Eric Bieniemy back as OC and reigning Super Bowl MVP Kenneth Walker III added at running back — while everyone watches whether Mahomes' knee holds up and whether Kelce is playing his final season.",
      rugbyAside: "Worth knowing: the NFL has been actively investing in South Africa and the rest of Africa lately — fan events, talent scouting, flag football tournaments — so you're getting into this at a moment the league is specifically trying to reach you."
    },
    keyPlayers: [
      { name: "Patrick Mahomes", role: "Quarterback", number: "15", note: "The engine of the offense — this year's biggest question is whether his surgically repaired knee holds up." },
      { name: "Travis Kelce", role: "Tight End", number: "87", note: "Mahomes' most trusted target for a decade, and this may be his final season." },
      { name: "Kenneth Walker III", role: "Running Back", note: "Reigning Super Bowl MVP, added this offseason to fix a run game that's been the offense's weak spot." },
      { name: "Andy Reid", role: "Head Coach", note: "The league's longest-tenured head coach — his offensive scheme has defined this team's identity for years." }
    ],
    games: [
      {
        tag: "Season opener",
        matchup: "Chiefs vs. Broncos",
        whenET: "Mon, Sep 14 · 8:15pm ET",
        whenETNote: "Monday Night Football",
        whenSAST: "Tue, Sep 15 · 2:15am SAST",
        whenSASTNote: "Late one — highlights land same day",
        rookieUS: "This is Week 1 — the first game of the season. The Broncos are in the Chiefs' <strong>division</strong>, a smaller group of teams the Chiefs compete against directly all year, so this game counts extra toward making the playoffs. Watch for <strong>Patrick Mahomes</strong>, the quarterback — he touches the ball almost every play and decides where it goes.",
        rookieRugby: "Think of a <strong>down</strong> like a phase: the offense gets four of them to advance 10 yards, or the ball goes over to the other team — closer to rugby league's six-tackle rule than union's flow. The Broncos are in the Chiefs' <strong>division</strong>, so this game matters extra, the way a derby against a close rival would. Watch <strong>Patrick Mahomes</strong>, the quarterback — think flyhalf, the player who reads the field and directs where the ball goes.",
        casual: "The Chiefs open at home against their division rival, the Broncos, on Monday Night Football. It's the first real look at whether Mahomes is back to full strength after his knee injury — and an early swing game for the AFC West race.",
        know: "A division opener under the lights, and the first real data point on Mahomes' health. Denver's the team most likely to contest Kansas City for the AFC West this year, so an early statement matters more than a typical Week 1 game usually would."
      },
      {
        tag: "Rivalry · Prime time",
        matchup: "Chiefs at Bills",
        whenET: "Thu, Nov 26 · Thanksgiving Night",
        whenETNote: "",
        whenSAST: "Fri, Nov 27 · Early hours SAST",
        whenSASTNote: "Check local listings closer to date",
        rookieUS: "This one's on Thanksgiving, a holiday when the NFL always schedules big games. The Bills aren't in the Chiefs' division, but the two teams have played each other in a lot of important games recently, so people treat this as a big deal.",
        rookieRugby: "No divisional stakes here, but this has become the sport's biggest recurring grudge match anyway — think of it like a fixture that's earned rivalry status through repeated big-occasion meetings, not through being in the same conference.",
        casual: "Buffalo has become the Chiefs' biggest rival, division or not — this game tends to feel bigger than anything on the regular schedule. Worth circling: Kansas City hasn't won a regular-season game in Buffalo since 2020.",
        know: "The measuring-stick game. Buffalo's the team Kansas City has clashed with in the biggest moments this decade, and the road drought there is real. A win here says more about where this team actually stands than the record will."
      }
    ]
  },

  bills: {
    name: "Buffalo Bills",
    short: "Bills",
    storyline: {
      rookie: "The Bills are one NFL team out of 32, trying to make the playoffs. Last year they made it to the second round before losing, and now they have a new head coach — kind of like a new manager coming in to run things differently.",
      casual: "New era in Buffalo: longtime head coach Sean McDermott is out, replaced by Joe Brady, and the defense is switching schemes under new coordinator Jim Leonhard. Quarterback Josh Allen is still the engine of this team — the roster change is everywhere except the most important position.",
      know: "Joe Brady takes over after McDermott's exit, and Jim Leonhard is installing a base 3-4 defense, a real departure from McDermott's zone-heavy, bend-but-don't-break 4-3. Josh Allen remains at the peak of his powers; the defense — which struggled to stop the run in the divisional-round loss to Denver — is the unit under the most scrutiny heading into camp.",
      rugbyAside: "Think of this like a squad keeping its star flyhalf but overhauling the forward pack's structure — the headline player stays, but how the team lines up around him changes completely."
    },
    keyPlayers: [
      { name: "Josh Allen", role: "Quarterback", number: "17", note: "Still the engine of this team through the coaching change — arguably at the peak of his powers right now." },
      { name: "Joe Brady", role: "Head Coach", note: "Replaces longtime coach Sean McDermott — first year running the whole team, not just the offense." },
      { name: "Jim Leonhard", role: "Defensive Coordinator", note: "New hire installing a base 3-4 defense, a real departure from the previous zone-heavy scheme." },
      { name: "Dion Dawkins", role: "Offensive Tackle", number: "73", note: "Anchors the offensive line protecting Allen — one of the roster's most experienced veterans." }
    ],
    games: [
      {
        tag: "New stadium · Home opener",
        matchup: "Bills home opener",
        whenET: "Early September · TNF",
        whenETNote: "Thursday Night Football — exact date TBD in your local schedule",
        whenSAST: "Early September · SAST",
        whenSASTNote: "Check local listings closer to date",
        rookieUS: "This is the first regular-season game ever played at the Bills' new Highmark Stadium — a genuinely big deal for the fanbase, and it's happening in primetime on Thursday night. Watch quarterback <strong>Josh Allen</strong> — he's one of the most exciting players in the league to watch run and throw.",
        rookieRugby: "First match at a brand-new home ground, played under lights on a Thursday — the rugby equivalent of christening a new stadium with a marquee fixture. Watch <strong>Josh Allen</strong> at quarterback (think flyhalf) — he's as dangerous running the ball himself as he is passing it.",
        casual: "Buffalo debuts its new Highmark Stadium in primetime — a genuine occasion for the franchise, and the first live test of new head coach Joe Brady's offense in a real game.",
        know: "The new-stadium debut adds an emotional layer, but the real story is scheme installation under live conditions — first look at Brady's offensive approach and early reads on how Leonhard's 3-4 defense holds up against a real opponent."
      },
      {
        tag: "Holiday game · Hosting",
        matchup: "Bills vs. Chiefs",
        whenET: "Thu, Nov 26 · Thanksgiving",
        whenETNote: "Buffalo's Thanksgiving home game",
        whenSAST: "Fri, Nov 27 · Early hours SAST",
        whenSASTNote: "Check local listings closer to date",
        rookieUS: "The Bills host the Chiefs on Thanksgiving — one of the NFL's marquee holiday games. Kansas City has been the league's most dominant team for years, so beating them is a genuine measuring-stick moment for Buffalo.",
        rookieRugby: "A holiday showpiece fixture, hosting the side that's been the benchmark team for years — the kind of occasion where a home win means more than three points in the log.",
        casual: "Hosting Kansas City on Thanksgiving is as big a stage as the regular season offers. The Chiefs have had Buffalo's number in the biggest moments this decade — a home win here would carry real weight.",
        know: "A Thanksgiving showcase against the team that's eliminated Buffalo from the playoffs before. With a new coaching staff in place, this is an early signal game for whether the structural changes are translating into results against elite competition."
      }
    ]
  },

  eagles: {
    name: "Philadelphia Eagles",
    short: "Eagles",
    storyline: {
      rookie: "The Eagles won the Super Bowl two years ago but had a rougher year last season and lost early in the playoffs. This offseason they traded away one of their star receivers, A.J. Brown, which was a big story for the team.",
      casual: "Philadelphia traded star receiver A.J. Brown to the Patriots after months of drama, hired a new offensive coordinator in Sean Mannion, and now leans on DeVonta Smith as the clear WR1. Quarterback Jalen Hurts faces real pressure to bounce back after a 2025 season that fizzled out.",
      know: "The Eagles' 2025 season unraveled with a 3-4 finish and a wild-card exit to the 49ers, with the offense sliding to 24th in the league. The A.J. Brown trade to New England closes a two-year saga and hands DeVonta Smith the unquestioned WR1 role, while new OC Sean Mannion — the team's fifth OC in five years — tries to fix an attack that lost its identity. Saquon Barkley remains the engine at running back.",
      rugbyAside: "Picture a team that won the title, had a form dip, and then moved on a star back three — the group left behind is talented but has to figure out its shape all over again."
    },
    keyPlayers: [
      { name: "Jalen Hurts", role: "Quarterback", number: "1", note: "Under real pressure to bounce back after a 2025 season that fizzled out late." },
      { name: "DeVonta Smith", role: "Wide Receiver", number: "6", note: "Now the unquestioned WR1 after the A.J. Brown trade — his biggest opportunity yet." },
      { name: "Saquon Barkley", role: "Running Back", number: "26", note: "Still the engine of this offense entering his ninth season." },
      { name: "Sean Mannion", role: "Offensive Coordinator", note: "New hire — the team's fifth OC in five years — tasked with fixing an attack that lost its way in 2025." }
    ],
    games: [
      {
        tag: "Rivalry · Holiday game",
        matchup: "Eagles vs. Cowboys",
        whenET: "Thu, Nov 26 · Thanksgiving",
        whenETNote: "First Eagles-Cowboys Thanksgiving meeting since 2014",
        whenSAST: "Fri, Nov 27 · Early hours SAST",
        whenSASTNote: "Check local listings closer to date",
        rookieUS: "This is one of the NFL's oldest and fiercest rivalries, and it's extra rare on Thanksgiving — the two teams haven't played each other on this holiday since 2014. The Eagles have won both of their previous Thanksgiving meetings with Dallas.",
        rookieRugby: "A historic derby fixture, and a rare one on this particular date — these two haven't met on Thanksgiving in over a decade. Philadelphia has a perfect record against Dallas on this specific occasion so far.",
        casual: "Eagles-Cowboys is one of football's nastiest rivalries regardless of the calendar, and this year it lands on Thanksgiving for the first time since 2014 — with Philadelphia undefeated in the previous meetings on this day.",
        know: "A rivalry game elevated further by the rare Thanksgiving slot — first meeting on this date since 2014. With the Eagles' offense still finding its footing under a new OC, this is a real early test against a division rival that knows this roster well."
      }
    ]
  }

};
