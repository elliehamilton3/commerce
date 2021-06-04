export const brandColors = {
  /**
   * Named brand* to ensure we don't accidentally use CSS color names
   */
  brandBlue: '#1F3554',
  brandBlueDark: '#1D2733',

  brandEmerald: '#345855',
  brandEmeraldDark: '#1B2D2B',

  brandTurquoise: '#038279',
  brandCoral: '#F87A54',

  brandShinyShamrock: '#4ca375',
  brandSunflower: '#fbbf62',
  brandWisteria: '#b35fa5',
  brandBerries: '#67668b',
  brandRedSalsa: '#ff5258',
  brandLava: '#D0011B',

  brandChalk: '#C9D5E2',
  brandAcorn: '#CAE0DC',
  brandDusk: '#5B626B',
  brandSage: '#5A6866',
  brandBasalt: '#272D33',

  // Neutral grays, not really branded
  brandBackground: '#FBFBFB',
  brandLightGrey: '#F8F8F8',
  brandGrey: '#C8C8C8',
  brandDarkerGrey: '#797979',
  brandDarkestGrey: '#333333',
  brandWhite: '#FFFFFF',
}

export const flowerColors: Record<string, string | undefined> = {
  black: '#000000',
  blue: '#62bfe2',
  brown: '#8d3c02',
  cream: '#fff9e2',
  green: '#c0d86f',
  pink: '#ff77a6',
  red: brandColors.brandRedSalsa,
  purple: brandColors.brandWisteria,
  orange: brandColors.brandCoral,
  white: brandColors.brandLightGrey,
  yellow: brandColors.brandSunflower,
}

export const seasonColors: Record<string, string | undefined> = {
  spring: brandColors.brandShinyShamrock,
  summer: brandColors.brandSunflower,
  autumn: '#b27e59',
  winter: '#8fbebb',
}
