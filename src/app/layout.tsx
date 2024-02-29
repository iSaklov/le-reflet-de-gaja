import type { Metadata, Viewport } from 'next'
import {
  antic_didone,
  rajdhani,
  annie_use_your_telescope,
  lighthaus,
} from '@/fonts'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import './globals.css'

export const metadata: Metadata = {
  title:
    'Le Reflet de Gaja - massage bien-être à domicile | Rambouillet, Chartres, Dreux',
  description:
    "Découvrez Le Reflet de Gaja, où votre bien-être est notre priorité. Offrant une variété de massages bien-être à domicile dans la région de Rambouillet, Chartres, Dreux, et leurs environs. Planifiez votre session de relaxation dès aujourd'hui.",
  keywords: [
    'Le Reflet de Gaja',
    'massage à domicile',
    'bien-être à domicile',
    'relaxation à domicile',
    'services de massage',
    'massage Rambouillet',
    'massage Chartres',
    'massage Dreux',
    'massage Épernon',
    'massage Maintenon',
    'massage Gallardon',
    'massage Hanches',
    'massage Droue-sur-Drouette',
    'massage Saint-Hilarion',
    'massage Raizeux',
    'massage Gazeran',
    'massage bien-être',
    'massage Californien',
    'massage Kobido',
    'massage Lomi-Lomi',
    'massage Ayurvédique',
    'réflexologie plantaire thaï',
    'massage Suédois',
    'massage Balinais',
    'massage Thaïlandais',
    'massage femme enceinte',
    'massage bébé',
  ],
  robots: 'index, follow',
  generator: 'Next.js',
  applicationName: 'Le Reflet de Gaja',
  referrer: 'no-referrer-when-downgrade',
  authors: [
    { name: 'iSaklov', url: 'https://www.linkedin.com/in/oleg-smaliakou/' },
  ],
  creator: 'iSaklov',
  publisher: 'iSaklov',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.refletdegaja.fr'),
  alternates: {
    canonical: '/',
    // languages: {
    //   'fr-FR': '/fr-FR',
    //   'en-US': '/en-US',
    // },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      new URL('/icon.png', 'https://www.refletdegaja.fr'),
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: ['/favicon-32x32.png'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/mstile-144x144.png', sizes: '144x144', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#611554' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='fr'
      className={`${antic_didone.variable} ${rajdhani.variable} ${annie_use_your_telescope.variable} ${lighthaus.variable}`}
    >
      <body className='select-none font-body subpixel-antialiased'>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
