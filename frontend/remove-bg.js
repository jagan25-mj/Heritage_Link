const sharp = require('sharp');
const path = require('path');

async function processLogo() {
  try {
    const logoPath = path.join(__dirname, 'public', 'assets', 'img', 'logo.png');
    
    // Process the image to convert black pixels to transparent
    const { data, info } = await sharp(logoPath)
      .raw()
      .toBuffer({ resolveWithObject: true });

    // The image has 3 or 4 channels (RGB or RGBA)
    const channels = info.channels;
    
    // We'll create a new buffer for the output (always RGBA)
    const outputData = Buffer.alloc(info.width * info.height * 4);
    
    for (let i = 0; i < info.width * info.height; i++) {
      const srcIdx = i * channels;
      const dstIdx = i * 4;
      
      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const a = channels === 4 ? data[srcIdx + 3] : 255;
      
      outputData[dstIdx] = r;
      outputData[dstIdx + 1] = g;
      outputData[dstIdx + 2] = b;
      
      // If color is close to black, make it fully transparent
      if (r < 40 && g < 40 && b < 40) {
        outputData[dstIdx + 3] = 0;
      } else {
        outputData[dstIdx + 3] = a; // keep original alpha
      }
    }
    
    await sharp(outputData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(logoPath);
    
    console.log('Successfully made logo background completely transparent with Sharp!');
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}

processLogo();
