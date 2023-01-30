import { CMYKColor, HexColor, HSLColor, HWBColor, RGBColor } from './index';

/** A color in HSB/HSV format. */
export class HSBColor {
  private h: number;
  private s: number;
  private b: number;
  private a?: number;

  /** Creates a new HSB color. */
  constructor(h: number, s: number, b: number, a?: number) {
    this.h = h;
    this.s = s;
    this.b = b;
    this.a = a;
  }

  /** Converts the HSB Color to a RGB color. */
  public toRGB(): RGBColor {
    const c = this.brightness * this.saturation;
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

    const m = this.brightness - c;
    return new RGBColor(
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255),
      this.alpha,
    );
  }

  public toCMYK(): CMYKColor {
    return this.toRGB().toCMYK();
  }

  /** Converts the HSB color to a hex color. */
  public toHex(): HexColor {
    return this.toRGB().toHex();
  }

  /** Converts the HSB color to a HSL color. */
  public toHSL(): HSLColor {
    const h = this.hue;
    const l = this.brightness * (1 - this.saturation / 2);
    let s = 0;
    if (l !== 0 && l !== 1) {
      s = (this.brightness - l) / Math.min(l, 1 - l);
    }

    return new HSLColor(h, s, l, this.alpha);
  }

  /** Converts the HSB Color to a HSL color. */
  public toHWB(): HWBColor {
    const h = this.hue;
    let w = this.brightness * (1 - this.saturation);
    let b = 1 - this.brightness;
    if (w + b > 100) {
      w /= 100;
      b /= 100;
    }

    return new HWBColor(h, w, b, this.alpha);
  }

  /** Gets the hue value of the color in degrees. */
  public get hue(): number {
    return this.h;
  }

  /** Gets the saturation value of the color in percent. */
  public get saturation(): number {
    return this.s;
  }

  /** Gets the brightness (value) value of the color in percent. */
  public get brightness(): number {
    return this.b;
  }

  /** Gets the alpha value of the color if set. */
  public get alpha(): number | undefined {
    return this.a;
  }

  /** Gets the HSBColor object as string. */
  public toString(): string {
    if (this.alpha) {
      return `hsba(${this.hue.toFixed(0)}°, ${(this.saturation * 100).toFixed(
        1,
      )}%, ${(this.brightness * 100).toFixed(1)}%, ${this.alpha})`;
    } else {
      return `hsb(${this.hue.toFixed(0)}°, ${(this.saturation * 100).toFixed(
        1,
      )}%, ${(this.brightness * 100).toFixed(1)}%)`;
    }
  }
}
