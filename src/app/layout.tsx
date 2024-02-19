import type { Metadata } from 'next'
import {
  Antic_Didone,
  Rajdhani,
  Annie_Use_Your_Telescope,
} from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import './globals.css'

const antic_didone = Antic_Didone({
  weight: '400',
  variable: '--display-font',
  subsets: ['latin'],
})

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--body-font',
  subsets: ['latin'],
})

const annie_use_your_telescope = Annie_Use_Your_Telescope({
  weight: '400',
  variable: '--cursive-font',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Le Reflet de Gaja - Massage Bien-Être à Domicile | Rambouillet, Chartres, Dreux',
  description:
    'Découvrez Le Reflet de Gaja, où votre bien-être est notre priorité. Offrant une variété de massages bien-être à domicile dans la région de Rambouillet, Chartres, Dreux, et leurs environs. Planifiez votre session de relaxation dès aujourd&apos;hui.',
  keywords: [
    'Le Reflet de Gaja',
    'massage bien-être à domicile',
    'massage Rambouillet',
    'massage Chartres',
    'massage Dreux',
    'massage bien-être',
    'massage Californien',
    'massage Kobido',
    'massage Lomi-Lomi',
    'massage Ayurvédique',
    'réflexologie plantaire thaï',
    'massage Suédois',
    'massage Balinais',
    'massage femme enceinte',
    'bien-être à domicile',
    'relaxation à domicile',
    'services de massage',
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
      className={`${antic_didone.variable} ${rajdhani.variable} ${annie_use_your_telescope.variable}`}
    >
      <body className='font-body subpixel-antialiased'>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
