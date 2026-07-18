const sharp = require('sharp');
const fs = require('fs');

async function generateFavicons() {
  const input = 'public/logo.png';
  
  // 192x192 for favicon.png (Google search likes multiple of 48)
  await sharp(input)
    .resize(192, 192, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toFile('public/favicon.png');

  // 192x192 as .ico (just a copy is often fine, but let's just make it a png with .ico extension)
  await sharp(input)
    .resize(192, 192, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toFile('public/favicon.ico');

  // 512x512 for webmanifest
  await sharp(input)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toFile('public/favicon-512.png');
    
  console.log('Favicons generated successfully.');
}

generateFavicons().catch(console.error);
