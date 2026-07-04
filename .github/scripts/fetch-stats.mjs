import { writeFileSync } from 'fs';

const CHANNEL_ID = 'UCZmzSBCQsgUdoTum6lVzOEQ';
const HANDLE = '@aakkoou';

async function fetchFromSocialCounts() {
  const url = `https://socialcounts.org/youtube-channel-analytics/${CHANNEL_ID}`;
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' }
  });
  const html = await response.text();

  const patterns = [
    /Subscribers?\s*(\d{1,15})(?:\s|\||<|,)/i,
    /"subscribers?"\s*:\s*(\d+)/i,
    /subscriber[- ]?count[^0-9]*(\d+)/i,
    /LiveSub\s*(\d{1,15})/i,
    /(\d{1,15})\s*subscribers?/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      const count = parseInt(match[1].replace(/,/g, ''));
      if (count > 0) return count;
    }
  }
  return null;
}

async function fetchFromYouTubeAbout() {
  const url = `https://www.youtube.com/@${HANDLE.replace('@', '')}/about`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    }
  });
  const html = await response.text();

  const patterns = [
    /"subscriberCountText":\s*\{\s*"simpleText":\s*"([^"]+)"/,
    /"subscriberCountText":\s*\{\s*"runs":\s*\[\s*\{\s*"text":\s*"([^"]+)"/,
    /(\d[\d,]*)\s*subscriber/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      const raw = match[1].replace(/[^0-9]/g, '');
      const count = parseInt(raw);
      if (count > 0) return count;
    }
  }
  return null;
}

async function main() {
  let subCount = await fetchFromSocialCounts();

  if (!subCount) {
    console.log('SocialCounts failed, trying YouTube about page...');
    subCount = await fetchFromYouTubeAbout();
  }

  if (subCount && subCount > 0) {
    const stats = { youtube: subCount };
    writeFileSync('stats.json', JSON.stringify(stats, null, 4) + '\n');
    console.log(`Updated stats: ${subCount} subscribers`);
    process.exit(0);
  } else {
    console.error('Could not parse subscriber count from any source');
    process.exit(1);
  }
}

main();
