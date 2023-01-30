import { CMYKColor, HexColor, HSBColor, HWBColor, RGBColor } from './index';

/** A color in HSL format. */
export class HSLColor {
  private h: number;
  private s: number;
  private l: number;
  private a?: number;

  /** Creates a new HSL color. */
  constructor(h: number, s: number, l: number, a?: number) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }

  /** Converts the HSL Color to a RGB color. */
  public toRGB(): RGBColor {
    const c = (1 - Math.abs(2 * this.lightness - 1)) * this.saturation;
    const h1 = this.hue / 60;
    const x = c * (1 - Math.abs((h1 % 2) - 1));

    let r = 0,
      g = 0,
      b = 0;
    if (h1 >= 0 && h1 < 1) {
      r = c;
      g = x;
      b = 0;
    } else if (h1 >= 1 && h1 < 2) {
      r = x;
      g = c;
      b = 0;
    } else if (h1 >= 2 && h1 < 3) {
      r = 0;
      g = c;
      b = x;
    } else if (h1 >= 3 && h1 < 4) {
      r = 0;
      g = x;
      b = c;
    } else if (h1 >= 4 && h1 < 5) {
      r = x;
      g = 0;
      b = c;
    } else if (h1 >= 5 && h1 < 6) {
      r = c;
      g = 0;
      b = x;
    }

    const m = this.lightness - c / 2;
    return new RGBColor(
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255),
      this.alpha,
    );
  }

  /** Converts a HSL color to a hex color. */
  public toHex(): HexColor {
    return this.toRGB().toHex();
  }

  /** Convers the HSL color to a CMYK color. */
  public toCMYK(): CMYKColor {
    return this.toRGB().toCMYK();
  }

  /** Converts a HSL color to a HSB color. */
  public toHSB(): HSBColor {
    const h = this.hue;
    const b =
      this.lightness +
      this.saturation * Math.min(this.lightness, 1 - this.lightness);
    let s = 0;
    if (b !== 0) {
      s = 2 * (1 - this.lightness / b);
    }

    return new HSBColor(h, s, b, this.alpha);
  }

  /** Converts the HSL color to a HWB color. */
  public toHWB(): HWBColor {
    return this.toHSB().toHWB();
  }

  /** Gets the hue value of the color in degrees. */
  public get hue(): number {
    return this.h;
  }

  /** Gets the saturation value of the color in percent. */
  public get saturation(): number {
    return this.s;
  }

  /** Gets the lightness value of the color in percent. */
  public get lightness(): number {
    return this.l;
  }

  /** Gets the alpha value of the color if set. */
  public get alpha(): number | undefined {
    return this.a;
  }

  /** Gets the HSLColor object as string. */
  public toString(): string {
    if (this.alpha) {
      return `hsla(${this.hue.toFixed(0)}°, ${(this.saturation * 100).toFixed(
        1,
      )}%, ${(this.lightness * 100).toFixed(1)}%, ${this.alpha})`;
    } else {
      return `hsl(${this.hue.toFixed(0)}°, ${(this.saturation * 100).toFixed(
        1,
      )}%, ${(this.lightness * 100).toFixed(1)}%)`;
    }
  }
}
