import { writeFileSync } from 'fs';

const CHANNEL_ID = 'UCZmzSBCQsgUdoTum6lVzOEQ';
const URL = `https://socialcounts.org/youtube-channel-analytics/${CHANNEL_ID}`;

const response = await fetch(URL, {
  headers: { 'User-Agent': 'Mozilla/5.0' }
});
const html = await response.text();

// Try multiple patterns in case the page layout changes
const patterns = [
  /Subscribers\s+(\d{1,10})(?:\s|\||<)/,
  /"subscribers?"\s*:\s*(\d+)/i,
  /subscriber[- ]?count[^0-9]*(\d+)/i
];

let subCount = null;
for (const pattern of patterns) {
  const match = html.match(pattern);
  if (match) {
    subCount = parseInt(match[1]);
    break;
  }
}

if (subCount && subCount > 0) {
  const stats = { youtube: subCount };
  writeFileSync('stats.json', JSON.stringify(stats, null, 4) + '\n');
  console.log(`Updated stats: ${subCount} subscribers`);
  process.exit(0);
} else {
  console.error('Could not parse subscriber count from socialcounts.org');
  process.exit(1);
}
