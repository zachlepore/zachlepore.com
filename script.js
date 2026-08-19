document.documentElement.classList.add('js');

const exhibits = {
  founder: { accession: 'FOUNDER / BIOGRAPHICAL MATERIAL', title: 'Zach Lepore', visual: 'portrait', body: `<p>Environmental engineer, artist, builder, and curious person making things on the internet and in the physical world.</p>`, links: [['Contact', 'mailto:hello@example.com'], ['GitHub', '#'], ['LinkedIn', '#'], ['Resume', '#']] },
  donation: { accession: 'INSTITUTIONAL SUPPORT / BOX 01', title: 'The Donation Box', visual: 'donation', body: `<p>The Lepore Institute is generously funded by Zach having a job.</p>` },
  engineering: { accession: 'PROFESSIONAL COLLECTION / 001', title: 'Environmental Engineering', visual: 'hardhat', body: `<p>Field and technical practice represented by an extremely clean hardhat. Details about roles, organizations, and projects will be added when supplied.</p><dl><dt>Areas</dt><dd>Environmental engineering · Regulatory research · Field work</dd></dl>` },
  gis: { accession: 'PROFESSIONAL COLLECTION / 002', title: 'GIS / Mapping', visual: 'map', body: `<p>Experience working with maps, spatial information, and GIS. Specific tools and representative maps are awaiting catalogue details.</p>` },
  data: { accession: 'PROFESSIONAL COLLECTION / 003', title: 'Data / Technical Work', visual: 'machine', body: `<p>Technical analysis, digital tools, and practical problem solving. Project particulars to be catalogued.</p>` },
  faa: { accession: 'CREDENTIAL COLLECTION / 001', title: 'FAA Remote Pilot Certificate', visual: 'plane', body: `<p>Part 107 remote pilot credential, represented in the gallery by a suspended model aircraft. Certificate date, number, and supporting details can be added once supplied.</p><dl><dt>Type</dt><dd>Remote pilot credential</dd></dl>` },
  resume: { accession: 'READING ROOM / CATALOGUE 001', title: 'Catalogue of Professional Activity', visual: 'catalogue', body: `<p>A concise record of professional experience, education, skills, and credentials.</p><p class="placeholder-note">Resume file awaiting installation.</p>`, links: [['Open resume (placeholder)', '#']] },
  'art-one': { accession: 'ART COLLECTION / ERO 001', title: 'Untitled Field Study', visual: 'art-one', body: artDetails('EROpel / Zach Lepore', 'Year forthcoming', 'Medium forthcoming', 'Dimensions forthcoming', 'Placeholder image — replace with original artwork.') },
  'art-two': { accession: 'ART COLLECTION / ERO 002', title: 'Signal and Soil', visual: 'art-two', body: artDetails('EROpel / Zach Lepore', 'Year forthcoming', 'Medium forthcoming', 'Dimensions forthcoming', 'Working catalogue title and placeholder image.') },
  'art-three': { accession: 'ART COLLECTION / ERO 003', title: 'EROpel Study', visual: 'art-three', body: artDetails('EROpel / Zach Lepore', 'Year forthcoming', 'Medium forthcoming', 'Dimensions forthcoming', 'Artwork record awaiting installation.') },
  'film-one': { accession: 'FIELD RECORDING 008', title: 'Featured Film — Title Forthcoming', visual: 'film', body: filmDetails('Zach Lepore', '2026', 'Digital video', 'Runtime forthcoming'), links: [['Watch on YouTube (placeholder)', '#']] },
  'film-two': { accession: 'FIELD RECORDING 009', title: 'Field Dispatch — Title Forthcoming', visual: 'film', body: filmDetails('Zach Lepore', 'Year forthcoming', 'Digital video', 'Runtime forthcoming'), links: [['YouTube channel (placeholder)', '#']] },
  'film-three': { accession: 'FIELD RECORDING 010', title: 'Archive Film — Title Forthcoming', visual: 'film', body: filmDetails('Zach Lepore', 'Year forthcoming', 'Digital video', 'Runtime forthcoming') },
  enviroregindex: { accession: 'BUILT COLLECTION / SYSTEM 001', title: 'EnviroRegIndex', visual: 'terminal', body: `<p class="object-type">Interactive information system · 2026–Present</p><p>Built to make environmental regulations considerably less annoying to find.</p><dl><dt>Problem</dt><dd>Environmental regulatory information is unnecessarily difficult to find and navigate.</dd><dt>Objective</dt><dd>A cleaner, centralized way for environmental professionals to find regulatory resources.</dd><dt>Technologies</dt><dd>Technical details awaiting catalogue entry</dd></dl>`, links: [['Visit project ↗', 'https://enviroregindex.com']] },
  installation: { accession: 'FORTHCOMING / ROOM 02', title: 'Closed for Installation', visual: 'crate', body: `<p>Future projects will be installed here as physical objects in the collection.</p>` }
};

function artDetails(artist, year, medium, dimensions, note) { return `<dl><dt>Artist</dt><dd>${artist}</dd><dt>Year</dt><dd>${year}</dd><dt>Medium</dt><dd>${medium}</dd><dt>Dimensions</dt><dd>${dimensions}</dd><dt>Note</dt><dd>${note}</dd></dl>`; }
function filmDetails(artist, year, medium, runtime) { return `<dl><dt>Artist</dt><dd>${artist}</dd><dt>Year</dt><dd>${year}</dd><dt>Format</dt><dd>${medium}</dd><dt>Runtime</dt><dd>${runtime}</dd></dl><div class="video-slot">Video / thumbnail awaiting installation</div>`; }

const scenes = [...document.querySelectorAll('[data-scene]')];
const modal = document.querySelector('[data-modal]');
const modalPanel = modal.querySelector('.exhibit-modal');
const closeButton = modal.querySelector('.modal-close');
let activeScene = 'exterior';
let previousFocus;

function showScene(name, updateHistory = true) {
  const next = document.querySelector(`[data-scene="${name}"]`);
  if (!next || name === activeScene) return;
  document.body.classList.add('is-transitioning');
  window.setTimeout(() => {
    scenes.forEach(scene => { scene.hidden = scene !== next; scene.classList.toggle('is-active', scene === next); });
    activeScene = name;
    document.body.dataset.room = name;
    if (updateHistory) history.pushState({ room: name }, '', name === 'exterior' ? location.pathname : `#${name}`);
    next.querySelector('button, [href]')?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
    window.setTimeout(() => document.body.classList.remove('is-transitioning'), 80);
  }, 180);
}

document.querySelector('[data-enter]').addEventListener('click', event => {
  event.currentTarget.classList.add('is-opening');
  window.setTimeout(() => showScene('foyer'), 520);
});
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showScene(button.dataset.go)));

document.querySelectorAll('[data-artifact]').forEach(button => button.addEventListener('click', () => openExhibit(button.dataset.artifact, button)));
function openExhibit(id, trigger) {
  const exhibit = exhibits[id]; if (!exhibit) return;
  previousFocus = trigger;
  modal.querySelector('[data-modal-accession]').textContent = exhibit.accession;
  modal.querySelector('#modal-title').textContent = exhibit.title;
  modal.querySelector('[data-modal-body]').innerHTML = exhibit.body;
  const visual = modal.querySelector('[data-modal-visual]'); visual.className = `modal-object visual-${exhibit.visual}`;
  modal.querySelector('[data-modal-links]').innerHTML = (exhibit.links || []).map(([label, href]) => `<a href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''}>${label}</a>`).join('');
  modal.hidden = false; document.body.classList.add('modal-open'); modalPanel.focus();
}
function closeExhibit() { modal.hidden = true; document.body.classList.remove('modal-open'); previousFocus?.focus(); }
closeButton.addEventListener('click', closeExhibit);
modal.addEventListener('click', event => { if (event.target === modal) closeExhibit(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeExhibit(); });
window.addEventListener('popstate', event => showScene(event.state?.room || location.hash.slice(1) || 'exterior', false));
history.replaceState({ room: 'exterior' }, '', location.pathname);

// A restrained bit of museum surveillance.
const portrait = document.querySelector('.portrait-drawing');
window.addEventListener('pointermove', event => {
  if (!portrait || activeScene !== 'foyer' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (event.clientX / innerWidth - .5) * 4; const y = (event.clientY / innerHeight - .5) * 3;
  portrait.style.setProperty('--look-x', `${x}px`); portrait.style.setProperty('--look-y', `${y}px`);
}, { passive: true });
