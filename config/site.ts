/**
 * Site-wide configuration
 * This file contains global settings for the application
 */

export const siteConfig = {
  name: 'Tatiana Paucar',
  title: 'Tatiana Paucar | Portfolio',
  description: 'Portfolio de Tatiana Medalith Paucar De La Cruz - Software Engineering Student @UPC',
  url: 'https://tatianapaucar.com', // Update with your actual domain
  author: {
    name: 'Tatiana Medalith Paucar De La Cruz',
    email: 'tatiana.paucard@email.com',
    phone: '+51 906829019',
    linkedin: 'https://www.linkedin.com/in/tatiana-paucar-de-la-cruz/',
    github: 'https://github.com/TMedalith',
  },
  social: {
    email: 'mailto:tatiana.paucard@email.com',
    whatsapp: 'https://wa.me/906829019',
    linkedin: 'https://www.linkedin.com/in/tatiana-paucar-de-la-cruz/',
    github: 'https://github.com/TMedalith',
  },
} as const;

export const navLinks = [
  { href: '/#home', label: 'Inicio' },
  { href: '/#about', label: 'Sobre mí' },
  { href: '/#projects', label: 'Proyectos' },
  { href: '/#contact', label: 'Contacto' },
] as const;
