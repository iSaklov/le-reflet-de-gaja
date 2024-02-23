import type { Metadata } from 'next'
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
