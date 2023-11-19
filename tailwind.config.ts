import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        museoModernoLight: ['MuseoModernoLight'],
        museoModernoBold: ['MuseoModernoBold'],
        museoModernoMedium: ['MuseoModernoMedium'],
        museoModernoRegular: ['MuseoModernoRegular'],
        museoModernoBlack: ['MuseoModernoBlack'],
        spaceGroteskRegular: ['SpaceGroteskRegular'],
        spaceGroteskBold: ['SpaceGroteskBold'],
        spaceGroteskMedium: ['SpaceGroteskMedium'],
        spaceGroteskLight: ['SpaceGroteskLight'],
      },
    },
  },
  plugins: [],
}
export default config
