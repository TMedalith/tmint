const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAX_WIDTH = 1920; // Max width for images
const QUALITY = 80; // WebP quality

async function getImageFiles() {
  const files = await fs.readdir(PUBLIC_DIR);
  return files.filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file)
  );
}

async function optimizeImage(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(PUBLIC_DIR, outputFilename);

  try {
    const inputStats = await fs.stat(inputPath);
    const inputSize = inputStats.size;

    // Get image metadata
    const metadata = await sharp(inputPath).metadata();

    // Process image
    let pipeline = sharp(inputPath);

    // Resize if too large
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const outputStats = await fs.stat(outputPath);
    const outputSize = outputStats.size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(2);

    return {
      filename,
      inputSize: (inputSize / 1024).toFixed(2) + ' KB',
      outputSize: (outputSize / 1024).toFixed(2) + ' KB',
      savings: savings + '%',
      success: true
    };
  } catch (error) {
    return {
      filename,
      error: error.message,
      success: false
    };
  }
}

async function main() {
  console.log('🖼️  Iniciando optimización de imágenes...\n');

  const imageFiles = await getImageFiles();
  console.log(`📁 Encontradas ${imageFiles.length} imágenes para optimizar\n`);

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    console.log(`[${i + 1}/${imageFiles.length}] Procesando: ${file}`);

    const result = await optimizeImage(file);

    if (result.success) {
      console.log(`  ✅ ${result.inputSize} → ${result.outputSize} (ahorro: ${result.savings})`);

      const inputKB = parseFloat(result.inputSize);
      const outputKB = parseFloat(result.outputSize);
      totalInputSize += inputKB;
      totalOutputSize += outputKB;
      successCount++;
    } else {
      console.log(`  ❌ Error: ${result.error}`);
    }
  }

  const totalSavings = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(2);

  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN DE OPTIMIZACIÓN');
  console.log('='.repeat(50));
  console.log(`Imágenes procesadas: ${successCount}/${imageFiles.length}`);
  console.log(`Tamaño original total: ${(totalInputSize / 1024).toFixed(2)} MB`);
  console.log(`Tamaño optimizado total: ${(totalOutputSize / 1024).toFixed(2)} MB`);
  console.log(`Ahorro total: ${totalSavings}%`);
  console.log(`Reducción: ${((totalInputSize - totalOutputSize) / 1024).toFixed(2)} MB`);
  console.log('='.repeat(50));
  console.log('\n✨ ¡Optimización completada!\n');
  console.log('⚠️  Las imágenes originales (.jpg, .png) aún están en /public');
  console.log('   Puedes eliminarlas manualmente después de verificar las nuevas .webp\n');
}

main().catch(console.error);
