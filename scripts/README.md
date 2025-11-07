# Scripts de Optimización

Este directorio contiene scripts útiles para el mantenimiento del proyecto.

## 📸 optimize-images.js

Optimiza automáticamente todas las imágenes JPG y PNG en la carpeta `/public`, convirtiéndolas a formato WebP con calidad 80%.

### Uso

```bash
npm run optimize-images
```

### Características

- Convierte JPG, JPEG y PNG a WebP
- Calidad: 80% (balance entre tamaño y calidad)
- Redimensiona imágenes muy grandes (max width: 1920px)
- Mantiene aspect ratio original
- Muestra estadísticas de ahorro

### Ejemplo de salida

```
🖼️  Iniciando optimización de imágenes...
📁 Encontradas 76 imágenes para optimizar

[1/76] Procesando: hackathon_ayni_2.jpg
  ✅ 9349.69 KB → 479.34 KB (ahorro: 94.87%)

==================================================
📊 RESUMEN DE OPTIMIZACIÓN
==================================================
Imágenes procesadas: 76/76
Tamaño original total: 58.53 MB
Tamaño optimizado total: 11.68 MB
Ahorro total: 80.04%
Reducción: 46.85 MB
==================================================
```

---

## 🔄 update-image-refs.js

Actualiza automáticamente todas las referencias de imágenes en el código, reemplazando extensiones `.jpg`, `.jpeg` y `.png` con `.webp`.

### Uso

```bash
npm run update-image-refs
```

### Características

- Busca en directorios: `constants/`, `components/`, `app/`
- Actualiza archivos: `.ts`, `.tsx`, `.js`, `.jsx`
- No modifica referencias a GIF o SVG
- Muestra qué archivos fueron modificados

### Ejemplo de salida

```
🔄 Actualizando referencias de imágenes...
📁 Encontrados 21 archivos para procesar

✅ Actualizado: constants\index.ts
✅ Actualizado: components\section\Hero.tsx

==================================================
📊 RESUMEN
==================================================
Archivos procesados: 21
Archivos modificados: 2
Errores: 0
==================================================
```

---

## 🎯 Flujo de trabajo recomendado

1. **Agrega nuevas imágenes** (JPG, PNG) a `/public`
2. **Ejecuta optimización**: `npm run optimize-images`
3. **Actualiza referencias**: `npm run update-image-refs`
4. **Elimina originales**: `cd public && rm *.jpg *.png`
5. **Verifica los cambios**: Revisa las imágenes en la aplicación

---

## 📝 Notas

- **GIF y SVG**: No se optimizan, se mantienen en su formato original
- **Backups**: Considera hacer backup antes de eliminar las imágenes originales
- **Calidad**: Puedes ajustar la calidad en `optimize-images.js` (línea 6)
- **Max width**: Puedes ajustar el ancho máximo en `optimize-images.js` (línea 5)
