import {
  Antic_Didone,
  Rajdhani,
  Annie_Use_Your_Telescope,
} from 'next/font/google'
import localFont from 'next/font/local'

export const antic_didone = Antic_Didone({
  weight: '400',
  variable: '--display-font',
  subsets: ['latin'],
  display: 'swap',
})

export const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--body-font',
  subsets: ['latin'],
  display: 'swap',
})

export const annie_use_your_telescope = Annie_Use_Your_Telescope({
  weight: '400',
  variable: '--cursive-font',
  subsets: ['latin'],
  display: 'swap',
})

export const lighthaus = localFont({
  src: [
    {
      path: '/assets/fonts/lighthaus/lighthaus.woff2',
    },
    {
      path: '/assets/fonts/lighthaus/lighthaus.woff',
    },
    {
      path: '/assets/fonts/lighthaus/lighthaus.ttf',
    },
  ],
  weight: '400',
  style: 'normal',
  variable: '--header-font',
  display: 'swap',
  preload: true,
  fallback: [
    'Playfair Display',
    'Merriweather',
    'Zilla Slab',
    'Tangerine',
    'Lora',
    'Bitter',
    'serif',
  ],
})
