import './style.css';
import { currentlyDoing, fieldNotes, links } from './content.js';
import { icon } from './icons.js';

const nav = [
  ['About', '#about'], ['Projects', '#projects'], ['Work', '#work'], ['Art', '#art'],
  ['YouTube', '#youtube'], ['Resume', links.resume], ['GitHub', links.github],
  ['LinkedIn', links.linkedin], ['Contact', links.email],
];

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="monogram" href="#top" aria-label="Zach Lepore home">ZL<span>field notes</span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Index <span>+</span></button>
    <nav id="primary-nav" aria-label="Primary navigation">
      ${nav.map(([label, href]) => `<a href="${href}"${href === '#' ? ' aria-label="' + label + ' link coming soon"' : ''}>${label}</a>`).join('')}
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <span class="coordinate">41° N / 81° W</span>
      <div class="orbit orbit-one" aria-hidden="true">${icon('leaf')}</div>
      <div class="orbit orbit-two" aria-hidden="true">${icon('mountain')}</div>
      <div class="hero-copy" id="about">
        <p class="kicker">FIELD NOTEBOOK <span>№ 001</span></p>
        <h1 id="hero-title">Zach<br><em>Lepore</em></h1>
        <p class="intro">Environmental engineer, artist, builder, and curious person making things on the internet and in the physical world.</p>
        <p class="hand-note making-note">currently making things →</p>
      </div>
      <aside class="currently" aria-labelledby="currently-title">
        <span class="pin" aria-hidden="true"></span>
        <p id="currently-title">CURRENTLY DOING</p>
        <strong>${currentlyDoing}</strong>
        <span class="date">FIELD UPDATE / PRESENT</span>
      </aside>
      <a class="down-cue" href="#field-index">Open the notebook ${icon('arrow')}</a>
    </section>

    <section class="field-index ruled" id="field-index" aria-labelledby="index-title">
      <header class="section-heading">
        <div><p class="eyebrow">OBSERVATION AREAS</p><h2 id="index-title">A map of ongoing work</h2></div>
        <p>Five paths through what I do.<br>Pick one and wander.</p>
      </header>
      <div class="note-map">
        ${fieldNotes.map((item, i) => `
          <a class="note-card note-${i + 1}" href="#${item.id}">
            <span class="note-number">${item.number}</span>
            <span class="note-icon">${icon(item.icon)}</span>
            <h3>${item.title}</h3><p>${item.text}</p>
            <span class="hand-note">${item.note}</span>
          </a>`).join('')}
      </div>
    </section>

    <section class="field-report" id="projects" aria-labelledby="project-title">
      <div class="report-label"><span>FIELD REPORT</span><strong>001</strong></div>
      <div class="project-visual" aria-label="Placeholder for an EnviroRegIndex project screenshot">
        <span class="tape tape-a"></span><span class="tape tape-b"></span>
        <div class="browser-sketch"><span></span><span></span><span></span><b>ENVIRO<br>REG INDEX</b><i>regulatory resources,<br>organized.</i></div>
        <p class="hand-note">screenshot goes here ↗</p>
      </div>
      <div class="project-copy">
        <p class="eyebrow">ACTIVE / ENVIRONMENTAL WEB TOOL</p>
        <h2 id="project-title">EnviroRegIndex</h2>
        <dl><div><dt>Problem</dt><dd>Environmental regulatory information is unnecessarily difficult to find and navigate.</dd></div><div><dt>Objective</dt><dd>Build a cleaner, centralized way for environmental professionals to find regulatory resources.</dd></div><div><dt>Status</dt><dd><span class="status-dot"></span> Active</dd></div></dl>
        <p>A focused reference tool that makes the hunt for regulatory information a little less tangled.</p>
        <p class="tools"><b>TOOLS</b> Web development · Information architecture · Environmental research</p>
        <a class="button-link" href="${links.enviroRegIndex}" target="_blank" rel="noreferrer">Visit EnviroRegIndex ${icon('arrow')}</a>
      </div>
    </section>

    <section class="work-section ruled" id="work" aria-labelledby="work-title">
      <div class="section-heading"><div><p class="eyebrow">PROFESSIONAL SPECIMEN</p><h2 id="work-title">Work in the field</h2></div><p>Engineering rigor with an explorer’s instinct.</p></div>
      <div class="work-sheet">
        <div class="work-stamp">ENV<br><small>ENG</small></div>
        <div><h3>Environmental engineering<br>& technical practice</h3><p>I work where environmental questions meet data, maps, regulations, and real-world systems.</p></div>
        <ul><li>Environmental engineering</li><li>GIS & spatial data</li><li>Technical research</li><li>Digital tools</li></ul>
        <div class="work-links"><a href="${links.resume}">Resume ↗</a><a href="${links.linkedin}">LinkedIn ↗</a><a href="${links.github}">GitHub ↗</a></div>
      </div>
    </section>

    <section class="creative-grid" id="art">
      <div class="art-intro"><p class="eyebrow">MAKE / COLLECTION 01</p><h2>Art &<br>physical things</h2><p>Paintings, EROpel work, fabric experiments, and objects made away from the screen.</p><p class="hand-note">a growing cabinet of curiosities</p></div>
      <div class="art-piece piece-one"><span class="tape tape-a"></span><div class="placeholder-art shape-one"></div><p>PAINTINGS / IMAGE FORTHCOMING</p></div>
      <div class="art-piece piece-two"><span class="tape tape-b"></span><div class="placeholder-art shape-two"></div><p>EROPEL / ARCHIVE FORTHCOMING</p></div>
    </section>

    <section class="youtube ruled" id="youtube" aria-labelledby="youtube-title">
      <div class="section-heading"><div><p class="eyebrow">EXPLORE / FIELD RECORDINGS</p><h2 id="youtube-title">Dispatches from out there</h2></div><a class="text-link" href="${links.youtube}">YouTube channel ↗</a></div>
      <div class="video-strip">
        <div class="video-card"><div class="video-placeholder">${icon('mountain')}<span>▶</span></div><p>FIELD VIDEO 001</p><strong>Featured adventure coming soon</strong></div>
        <div class="video-card"><div class="video-placeholder alt">${icon('leaf')}<span>▶</span></div><p>FIELD VIDEO 002</p><strong>Next dispatch coming soon</strong></div>
        <aside><p class="hand-note">notes from the road →</p><p>Video thumbnails and channel details will be added to this field log.</p></aside>
      </div>
    </section>

    <section class="learn" id="learn"><span aria-hidden="true">${icon('eye')}</span><p class="eyebrow">LEARN / OPEN QUESTIONS</p><h2>Following curiosity<br>wherever it goes.</h2><p>Current interests, research notes, small experiments, and the useful things found down rabbit holes.</p><a href="${links.email}">Tell me what you're exploring →</a></section>
  </main>
  <footer><div><strong>Zach Lepore</strong><p>Engineer · Artist · Builder · Explorer</p></div><a href="${links.email}">Start a conversation ↗</a><p class="catalog">ZL / FIELD ARCHIVE / PRESENT</p></footer>
`;

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#primary-nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('open', !open);
});
menu.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); });
