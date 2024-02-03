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
  weight: '400',
  variable: '--body-font',
  subsets: ['latin'],
})

const annie_use_your_telescope = Annie_Use_Your_Telescope({
  weight: '400',
  variable: '--cursive-font',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Portfolio réalisé par iSac - Concepteur Développeur d'Applications",
  description:
    "Actuellement en recherche d'une alternance et disponible dès maintenant. Je suis à la recherche d'une entreprise qui me permettra de mettre en pratique mes compétences full stack en JavaScript & TypeScript et d'en acquérir de nouvelles. Localisation : Eure-et-Loir, Région Centre-Val de Loire, ou partout en Île-de-France, notamment à Paris. Mon site portfolio a été réalisé avec Next.js, Tailwind CSS, Airtable et déployé sur Vercel.",
  keywords: [
    'iSac',
    'portfolio',
    'alternance',
    'développeur',
    'web',
    'full stack',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Material UI',
    'Airtable',
    'Vercel',
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
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
