const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const markdown = fs.readFileSync(path.join(__dirname, 'src', 'whitepaper.md'), 'utf-8');
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');

marked.setOptions({
  gfm: true,
  breaks: false,
});

const html = marked.parse(markdown);
const output = template.replace('{{CONTENT}}', html);

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

fs.writeFileSync(path.join(distDir, 'index.html'), output);
console.log('Built dist/index.html');
