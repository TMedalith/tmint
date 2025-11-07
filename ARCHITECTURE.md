# 🏗️ Arquitectura del Proyecto

Este documento describe la arquitectura clean y escalable del portfolio.

## 📁 Estructura de Carpetas

```
tmint/
├── app/                          # Next.js App Router
│   ├── about/                    # Página de experiencias
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página home
│
├── components/
│   ├── features/                # Módulos por funcionalidad (Feature-based)
│   │   ├── hero/
│   │   │   ├── Hero.tsx
│   │   │   └── index.ts         # Barrel export
│   │   ├── projects/
│   │   │   ├── Projects.tsx
│   │   │   └── index.ts
│   │   ├── experiences/
│   │   │   ├── About.tsx
│   │   │   └── index.ts
│   │   └── contact/
│   │       ├── Contact.tsx
│   │       └── index.ts
│   │
│   ├── ui/                      # Componentes UI reutilizables
│   │   └── SectionHeader.tsx
│   │
│   ├── widgets/                 # Componentes específicos de negocio
│   │   ├── ExperienceCard.tsx
│   │   └── ProjectCard.tsx
│   │
│   └── layout/                  # Componentes de layout
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── SocialMedia.tsx
│
├── config/                      # Configuración centralizada
│   └── site.ts                  # Configuración del sitio
│
├── constants/                   # Datos de la aplicación
│   └── index.ts                # Experiences, projects, categories
│
├── lib/                        # Utilidades y helpers
│   ├── hooks/                  # Custom React hooks
│   │   └── useGsapAnimations.ts
│   └── utils.ts                # Funciones auxiliares
│
├── types/                      # Definiciones TypeScript
│   └── index.ts                # Tipos centralizados
│
├── scripts/                    # Scripts de utilidad
│   ├── optimize-images.js
│   ├── update-image-refs.js
│   └── README.md
│
└── public/                     # Assets estáticos
    └── *.webp                  # Imágenes optimizadas
```

## 🎯 Principios Aplicados

### 1. **Feature-Based Organization**
Los componentes están organizados por funcionalidad, no por tipo técnico:
- ✅ `components/features/hero/`
- ❌ `components/sections/`

**Beneficios:**
- Fácil localización del código relacionado
- Escalabilidad horizontal
- Bajo acoplamiento entre features

### 2. **Separation of Concerns**
Cada carpeta tiene una responsabilidad única:
- `features/` → Lógica de negocio específica
- `ui/` → Componentes reutilizables sin lógica
- `widgets/` → Componentes con lógica específica
- `layout/` → Estructura de la app

### 3. **Single Responsibility Principle (SRP)**
Cada componente tiene una única razón para cambiar:
```typescript
// ✅ BIEN: Un componente, una responsabilidad
const Hero = () => { /* Solo hero logic */ }

// ❌ MAL: Múltiples responsabilidades
const HeroWithProjectsAndContact = () => { /* Too much */ }
```

### 4. **DRY (Don't Repeat Yourself)**
- Tipos centralizados en `types/`
- Configuración en `config/`
- Hooks reutilizables en `lib/hooks/`

### 5. **KISS (Keep It Simple, Stupid)**
- Sin componentes innecesarios
- Sin dependencias no utilizadas
- Imports limpios y directos

## 📦 Barrel Exports (index.ts)

Cada feature tiene un archivo `index.ts` que exporta sus componentes:

```typescript
// components/features/hero/index.ts
export { default as Hero } from './Hero';
```

**Beneficios:**
```typescript
// ✅ Imports limpios
import { Hero } from '@/components/features/hero';

// ❌ Antes (verboso)
import Hero from '@/components/section/Hero';
```

## 🔧 Dependencias

### Producción (7 dependencias)
```json
{
  "clsx": "Construcción condicional de clases",
  "gsap": "Animaciones",
  "lucide-react": "Iconos",
  "next": "Framework",
  "react": "UI library",
  "react-dom": "React renderer",
  "react-icons": "Iconos adicionales",
  "tailwind-merge": "Fusión de clases Tailwind"
}
```

### Eliminadas (57 paquetes)
- ❌ @tsparticles/* (sistema de partículas innecesario)
- ❌ framer-motion (no utilizado)
- ❌ @headlessui/react (no utilizado)
- ❌ @heroicons/react (reemplazado por lucide-react)
- ❌ react-intersection-observer (no necesario)
- ❌ d3, recharts (no utilizados)

## 📄 Archivos Eliminados

### Componentes no utilizados (6 archivos)
- ❌ `components/section/Skills.tsx`
- ❌ `components/ui/shooting-stars.tsx`
- ❌ `components/ui/sparkles.tsx`
- ❌ `components/ui/infinite-moving-cards.tsx`
- ❌ `components/widgets/ImageModal.tsx`
- ❌ `components/ui/button.tsx`

### Otros
- ❌ `utils/motion.ts` (no utilizado)
- ❌ `app/project/` (ruta no activa)
- ❌ `hooks/` (movido a `lib/hooks/`)

## 🎨 Tipos Centralizados

Todo en `types/index.ts`:

```typescript
// Experiencias
export interface Experience { /* ... */ }
export interface ExperienceCategory { /* ... */ }

// Proyectos
export interface Project { /* ... */ }
export interface Technology { /* ... */ }

// Contacto
export interface ContactLink { /* ... */ }

// Skills
export enum SkillLevel { /* ... */ }
export interface Skill { /* ... */ }
```

## 🚀 Ventajas de esta Arquitectura

### Escalabilidad
✅ Agregar nuevas features es simple:
```bash
mkdir components/features/nueva-feature
touch components/features/nueva-feature/{NuevaFeature.tsx,index.ts}
```

### Mantenibilidad
✅ Todo el código relacionado está junto:
```
features/projects/
├── Projects.tsx          # Componente principal
├── ProjectCard.tsx       # Si es exclusivo
├── useProjects.ts        # Hook si es necesario
└── index.ts              # Export
```

### Testabilidad
✅ Cada feature es independiente y fácil de testear

### Performance
✅ Solo 25 archivos TypeScript (vs 35 antes)
✅ Solo 7 dependencias de producción (vs 20 antes)
✅ Bundle más pequeño y rápido

## 📝 Convenciones de Código

### Nombres de Archivos
```
PascalCase  → Componentes React (Hero.tsx)
camelCase   → Hooks (useGsapAnimations.ts)
kebab-case  → Scripts (optimize-images.js)
lowercase   → Config (site.ts)
```

### Imports
```typescript
// 1. Externos
import { useState } from 'react';

// 2. Internos con alias
import { Experience } from '@/types';

// 3. Relativos (evitar si es posible)
import { SomeComponent } from '../ui/SomeComponent';
```

### Exports
```typescript
// ✅ Named exports (preferido)
export const Hero = () => { /* ... */ }

// ✅ Default export con nombre
const Hero = () => { /* ... */ }
export default Hero;

// ❌ Default export anónimo
export default () => { /* ... */ }
```

## 🔄 Flujo de Datos

```
User Interaction
      ↓
  Component (feature)
      ↓
  Hook (if needed)
      ↓
  Constants/Config
      ↓
  Re-render
```

## 🛠️ Scripts Disponibles

```bash
npm run dev              # Desarrollo
npm run build            # Producción
npm run lint             # Linting
npm run optimize-images  # Optimizar imágenes
npm run update-image-refs # Actualizar referencias
```

## 📊 Métricas

### Antes de Clean Architecture
- 📁 35 archivos TypeScript
- 📦 20 dependencias producción
- 📦 374 paquetes totales
- 🖼️ 59 MB de imágenes
- ⚠️ Código duplicado
- ⚠️ Imports desorganizados

### Después de Clean Architecture
- 📁 25 archivos TypeScript (-29%)
- 📦 7 dependencias producción (-65%)
- 📦 270 paquetes totales (-28%)
- 🖼️ 12 MB de imágenes (-80%)
- ✅ DRY aplicado
- ✅ Imports limpios
- ✅ Feature-based
- ✅ Tipos centralizados

## 🎓 Aprendizajes Clave

1. **Menos es más**: Eliminar código no utilizado mejora el rendimiento
2. **Organización por features**: Más escalable que por tipos técnicos
3. **Tipos centralizados**: Evita duplicación y mantiene consistencia
4. **Barrel exports**: Mejora la experiencia de desarrollo
5. **Clean dependencies**: Solo lo necesario, nada más

---

**Mantenido por**: Tatiana Paucar
**Última actualización**: 2025-11-06
