const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'assets', 'img', 'products');
const outputDir = path.join(inputDir, 'ecommerce');

const imagesToProcess = [
  'bullcart2.jpg',
  'bullcart3.jpg',
  'bullcart4.jpg',
  'bullcart6.jpg',
  'marriagepair2.jpg',
  'marriagepair3.jpg',
  'marriagemandapam2.jpg',
  'marriagemandapam3.jpg'
];

async function processImages() {
  for (const file of imagesToProcess) {
    const inputPath = path.join(inputDir, file);
    if (!fs.existsSync(inputPath)) {
        // try lowercase or other cases
        const files = fs.readdirSync(inputDir);
        const actualFile = files.find(f => f.toLowerCase() === file.toLowerCase());
        if (actualFile) {
            console.log(`Found ${actualFile} instead of ${file}`);
            file = actualFile;
        } else {
            console.log(`Could not find ${file}`);
            continue;
        }
    }
    const actualInputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `ecommerce_${file.toLowerCase()}`);
    
    try {
      await sharp(actualInputPath)
        .resize(1024, 1024, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toFormat('jpeg')
        .toFile(outputPath);
      console.log(`Processed ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processImages();
