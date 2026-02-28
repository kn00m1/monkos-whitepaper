const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf-8');

const checks = [
  // Structure
  ['Has progress bar', html.includes('id="progress-bar"')],
  ['Has TOC sidebar', html.includes('id="toc-sidebar"')],
  ['Has TOC list container', html.includes('id="toc-list"')],
  ['Has mobile toggle button', html.includes('id="toc-toggle"')],
  ['Has mobile overlay', html.includes('id="toc-overlay"')],
  // Diagram templates
  ['Has pipeline diagram template', html.includes('tmpl-event-pipeline')],
  ['Has policy gate template', html.includes('tmpl-policy-gate')],
  ['Has topology template', html.includes('tmpl-topology')],
  ['Has FSM template', html.includes('tmpl-fsm')],
  // Content
  ['Has 10+ h2 headings', (html.match(/<h2/g) || []).length >= 10],
  ['Has 20+ h3 headings', (html.match(/<h3/g) || []).length >= 20],
  ['Has architecture table', html.includes('<table>')],
  ['Has blockquotes', html.includes('<blockquote>')],
  // Diagrams
  ['Pipeline has 8 steps', (html.match(/pipe-step-/g) || []).length >= 8],
  ['Gate has 5 bars', (html.match(/gate-\d-bar/g) || []).length >= 5],
  ['FSM has 6 states', (html.match(/fsm-s\d/g) || []).length >= 6],
  ['Topology has 3 tiers', (html.match(/tier-(phone|network|vps)/g) || []).length >= 3],
  // JS core
  ['JS event listeners exist', html.includes('addEventListener')],
  ['JS TOC generation code', html.includes('querySelectorAll')],
  ['JS diagram insertion code', html.includes('insertDiagramAfter')],
  ['JS pipeline animation', html.includes('animatePipeline')],
  ['JS gate animation', html.includes('animateGate')],
  ['JS topology animation', html.includes('animateTopology')],
  ['JS FSM animation', html.includes('animateFSM')],
  // Pagination JS
  ['JS page section splitting', html.includes('page-section')],
  ['JS navigateToPage function', html.includes('navigateToPage')],
  ['JS page-based progress', html.includes('currentPage / (totalPages - 1)')],
  ['JS keyboard navigation', html.includes('ArrowLeft')],
  ['JS wheel auto-advance', html.includes('wheel')],
  // Pagination CSS
  ['CSS page-section styles', html.includes('.page-section')],
  ['CSS page-section active', html.includes('.page-section.active')],
  ['CSS exit-up animation', html.includes('.page-section.exit-up')],
  ['CSS exit-down animation', html.includes('.page-section.exit-down')],
  ['CSS page-nav styles', html.includes('.page-nav')],
  // Responsive
  ['CSS responsive 1024px breakpoint', html.includes('@media (max-width: 1024px)')],
  ['CSS responsive 600px breakpoint', html.includes('@media (max-width: 600px)')],
  ['CSS print styles', html.includes('@media print')],
  ['CSS print shows all sections', html.includes('position: static !important')],
  // Meta / content
  ['Template placeholder replaced', html.indexOf('{{CONTENT}}') === -1],
  ['Meta og:title present', html.includes('og:title')],
  ['Meta og:url correct', html.includes('monkos.failsafesolutions.org')],
  ['Title tag present', html.includes('<title>Monk OS')],
  ['No empty article', html.indexOf('<article class="container" id="content">\n  </article>') === -1],
  ['Content has Abstract', html.includes('Abstract')],
  ['Content has Conclusion', html.includes('Conclusion')],
  ['Content has References', html.includes('References')],
];

let pass = 0;
let fail = 0;
const failures = [];

for (const [name, result] of checks) {
  if (result) {
    pass++;
    console.log('PASS  ' + name);
  } else {
    fail++;
    failures.push(name);
    console.log('FAIL  ' + name);
  }
}

console.log('\n' + pass + ' passed, ' + fail + ' failed');
if (failures.length > 0) {
  console.log('\nFailures:');
  failures.forEach(f => console.log('  - ' + f));
  process.exit(1);
}
