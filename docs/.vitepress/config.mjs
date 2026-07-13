import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote' // 1. Importamos el plugin
// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: 'es-ES', // O simplemente 'es'
  title: "H.ª de la Filosofía Medieval",
  description: "Asignatura virtual",
  base: '/hfmd/',  
  srcExclude: ['**/base.md'],
  head: [
  [
    'link',
    {
      rel: 'icon',
      href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><style>text{font-family:Georgia,serif;font-size:75px;fill:rgb(44,62,80)}@media(prefers-color-scheme:dark){text{fill:rgb(255,255,255)}}</style><text y='75' x='50' text-anchor='middle'>φ</text></svg>"
      }
      ]
    ],
  lastUpdated: false,
  cleanUrls: true, // Cambia /introduccion.html por simplemente /introduccion
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Lectura', 
        items: [
          { text: 'Actual', link: '/1-actual' },
          { text: 'Pasadas', link: '/2-pasadas' },
          { text: '¿Cómo leer?', link: '/0-leer' },
		]
		},
      { text: 'Información', 
        items: [
          { text: 'Plan de asignatura', link: '/3-plan' },
          { text: 'Iconografía', link: '/4-icono' },
		]
		},
    ],

    sidebar: [
      { text: 'Lectura',
		collapsed: false, // 'true' inicia cerrado, 'false' inicia abierto con la flecha activa
        items: [
          { text: 'Actual', link: '/1-actual' },
          { text: 'Pasadas', link: '/2-pasadas' },
          { text: '¿Cómo leer?', link: '/0-leer' },
        ]
      },
	  
      { text: 'Información',
		collapsed: false, // 'true' inicia cerrado, 'false' inicia abierto con la flecha activa
        items: [
          { text: 'Plan de asignatura', link: '/3-plan' },
          { text: 'Iconografía', link: '/4-icono' },
        ]
      },
	  
    ],

	outline: {
      label: 'Índice'
    },

    // 2. Traducir los botones de navegación inferior ("Previous / Next")
    docFooter: {
      prev: 'Página anterior',
      next: 'Siguiente página'
    },

    // 3. Traducir el texto de última actualización (si lo usas)
    lastUpdated: {
      text: 'Actualizado'
    },

    // 4. Traducir textos de la interfaz y modo oscuro
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Aspecto',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 2h3v5h6v3h-6v12h-3V10h-6V7h6V2z" fill="currentColor"/></svg>'
        },
        link: 'https://teologia.cba.ucb.edu.bo/'
      }
    ]

  }
})
