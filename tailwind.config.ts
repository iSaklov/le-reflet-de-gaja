import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: 'var(--display-font)',
      body: 'var(--body-font)',
      cursive: 'var(--cursive-font)',
      header: 'var(--header-font)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gaja-gradient': 'linear-gradient(0deg, #470960, #7C2248 50%, #470960)',
      },
      colors: {
        'deep-purple': '#470960',
        'burgundy-sunset': '#7C2248',
      },
      fontSize: {
        none: ['0px', '0px'],
      },
    },
  },
  plugins: [],
}
export default config
