/**
 * This script helps reorganize the project structure
 * Run with: node scripts/restructure.js
 */

const fs = require('fs');
const path = require('path');

console.log('🏗️  Restructuring project...\n');

// Move hooks
const hooksSource = path.join(__dirname, '..', 'hooks', 'index.ts');
const hooksDestin = path.join(__dirname, '..', 'lib', 'hooks', 'useGsapAnimations.ts');

if (fs.existsSync(hooksSource)) {
  const content = fs.readFileSync(hooksSource, 'utf8');
  fs.writeFileSync(hooksDestin, content);
  console.log('✅ Moved hooks/index.ts → lib/hooks/useGsapAnimations.ts');
}

console.log('\n✨ Restructure complete!');
