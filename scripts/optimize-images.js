const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const QUALITY = 80;
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase().slice(1);
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  const outputPath = inputPath.replace(/(\.[\w\d_-]+)$/i, '.webp');
  
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    // Create responsive versions
    const sizes = [640, 750, 828, 1080, 1200, 1920];
    for (const width of sizes) {
      const responsiveOutputPath = outputPath.replace('.webp', `-${width}.webp`);
      await sharp(inputPath)
        .resize(width)
        .webp({ quality: QUALITY })
        .toFile(responsiveOutputPath);
    }

    console.log(`✓ Optimized: ${path.relative(PUBLIC_DIR, inputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to optimize: ${path.relative(PUBLIC_DIR, inputPath)}`);
    console.error(error);
  }
}

async function optimizeImages() {
  const images = glob.sync(`${PUBLIC_DIR}/**/*.{${IMAGE_EXTENSIONS.join(',')}}`);
  
  console.log(`Found ${images.length} images to optimize...`);
  
  for (const image of images) {
    await optimizeImage(image);
  }
}

optimizeImages().catch(console.error); 