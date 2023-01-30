import {
  CMYKColor,
  HexColor,
  HSLColor,
  HSBColor,
  HWBColor,
  RGBColor,
} from './colors/index';

/**
 * Gets a hex color object.
 * @param hex The hex color.
 * @returns A hex color object.
 */
export function hex(hex: string): HexColor {
  return new HexColor(hex);
}

/**
 * Gets a RGB color object.
 * @param r The red value.
 * @param g The green value.
 * @param b The blue value.
 * @param a The alpha value.
 * @returns A RGB color object.
 */
export function rgb(r: number, g: number, b: number, a?: number): RGBColor {
  return new RGBColor(r, g, b, a);
}

/**
 * Gets a HSL color object.
 * @param h The hue value.
 * @param s The saturation value.
 * @param l The lightness value.
 * @param a The alpha value.
 * @returns A HSL color object.
 */
export function hsl(h: number, s: number, l: number, a?: number): HSLColor {
  return new HSLColor(h, s, l, a);
}

/**
 * Gets a HSB/HSV color object.
 * @param h The hue value.
 * @param s The saturation value.
 * @param b The brightness (value) value.
 * @param a The alpha value.
 * @returns A HSB/HSV color object.
 */
export function hsb(h: number, s: number, b: number, a?: number): HSBColor {
  return new HSBColor(h, s, b, a);
}

/**
 * Gets a HWB color object.
 * @param h The hue value.
 * @param w The whiteness value.
 * @param b The blackness value.
 * @param a The alpha value.
 * @returns A HWB color object.
 */
export function hwb(h: number, w: number, b: number, a?: number): HWBColor {
  return new HWBColor(h, w, b, a);
}

/**
 * Gets a CMYK color object.
 * @param c The cyan value.
 * @param m The magenta value.
 * @param y The yellow value.
 * @param k The key (black) value.
 */
export function cmyk(c: number, m: number, y: number, k: number): CMYKColor {
  return new CMYKColor(c, y, m, k);
}

/** Generates a random RGB color. */
export function randomRGB(): RGBColor {
  return rgb(
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  );
}

/** Generates a random hex color. */
export function randomHex(): HexColor {
  return randomRGB().toHex();
}

/** Generates a random HSL color. */
export function randomHSL(): HSLColor {
  return hsl(
    Math.round(Math.random() * 360),
    Number(Math.random().toFixed(2)),
    Number(Math.random().toFixed(2)),
  );
}

/** Generates a random HSL color. */
export function randomHSB(): HSBColor {
  return hsb(
    Math.round(Math.random() * 360),
    Number(Math.random().toFixed(2)),
    Number(Math.random().toFixed(2)),
  );
}

/** Generates a random HSL color. */
export function randomHWB(): HWBColor {
  return hwb(
    Math.round(Math.random() * 360),
    Number(Math.random().toFixed(2)),
    Number(Math.random().toFixed(2)),
  );
}

/** Generates a random CMYK color. */
export function randomCMYK(): CMYKColor {
  return cmyk(
    Number(Math.random().toFixed(2)),
    Number(Math.random().toFixed(2)),
    Number(Math.random().toFixed(2)),
    Number(Math.random().toFixed(2)),
  );
}

export * from './colors/index';
