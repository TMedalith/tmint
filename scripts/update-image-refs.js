const fs = require('fs').promises;
const path = require('path');

const DIRECTORIES = ['constants', 'components', 'app'];
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];

async function getAllFiles(dir, fileList = []) {
  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        if (file !== 'node_modules' && file !== '.git') {
          await getAllFiles(filePath, fileList);
        }
      } else {
        const ext = path.extname(file);
        if (EXTENSIONS.includes(ext)) {
          fileList.push(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }

  return fileList;
}

async function updateImageReferences(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    const originalContent = content;

    // Replace .jpg, .jpeg, and .png with .webp (excluding GIF and SVG)
    content = content.replace(/(['"`])([^'"`]*?)\.(jpg|jpeg|png)(['"`])/gi, '$1$2.webp$4');

    if (content !== originalContent) {
      await fs.writeFile(filePath, content, 'utf8');
      return {
        file: filePath,
        changed: true
      };
    }

    return {
      file: filePath,
      changed: false
    };
  } catch (error) {
    return {
      file: filePath,
      error: error.message
    };
  }
}

async function main() {
  console.log('🔄 Actualizando referencias de imágenes...\n');

  const rootDir = path.join(__dirname, '..');
  let allFiles = [];

  for (const dir of DIRECTORIES) {
    const dirPath = path.join(rootDir, dir);
    try {
      const files = await getAllFiles(dirPath);
      allFiles = allFiles.concat(files);
    } catch (error) {
      console.log(`⚠️  Directorio ${dir} no encontrado, saltando...`);
    }
  }

  console.log(`📁 Encontrados ${allFiles.length} archivos para procesar\n`);

  let changedCount = 0;
  let errorCount = 0;

  for (const file of allFiles) {
    const result = await updateImageReferences(file);

    if (result.error) {
      console.log(`❌ Error en ${result.file}: ${result.error}`);
      errorCount++;
    } else if (result.changed) {
      console.log(`✅ Actualizado: ${path.relative(rootDir, result.file)}`);
      changedCount++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN');
  console.log('='.repeat(50));
  console.log(`Archivos procesados: ${allFiles.length}`);
  console.log(`Archivos modificados: ${changedCount}`);
  console.log(`Errores: ${errorCount}`);
  console.log('='.repeat(50));
  console.log('\n✨ ¡Referencias actualizadas!\n');
}

main().catch(console.error);
