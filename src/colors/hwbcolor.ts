import { CMYKColor, HexColor, HSBColor, HSLColor, RGBColor } from './index';

/** A color in HWB format. */
export class HWBColor {
  private h: number;
  private w: number;
  private b: number;
  private a?: number;

  /** Creates a new HWB color. */
  constructor(h: number, w: number, b: number, a?: number) {
    this.h = h;
    this.w = w;
    this.b = b;
    this.a = a;
  }

  /** Converts the HWB color to a HSB color. */
  public toHSB(): HSBColor {
    const s = 1 - this.whiteness / (1 - this.blackness);
    const b = 1 - this.blackness;

    return new HSBColor(this.hue, s, b, this.alpha);
  }

  /** Converts the HWB color to a RGB color. */
  public toRGB(): RGBColor {
    return this.toHSB().toRGB();
  }

  /** Converts the HWB color to a hex color. */
  public toHex(): HexColor {
    return this.toRGB().toHex();
  }

  /** Converts the HWB color to a HSL color. */
  public toHSL(): HSLColor {
    return this.toHSB().toHSL();
  }

  /** Converts the HWB color to a CMYK color. */
  public toCMYK(): CMYKColor {
    return this.toRGB().toCMYK();
  }

  /** Gets the hue value of the color in degrees. */
  public get hue(): number {
    return this.h;
  }

  /** Gets the whiteness value of the color in percent. */
  public get whiteness(): number {
    return this.w;
  }

  /** Gets the blackness value of the color in percent. */
  public get blackness(): number {
    return this.b;
  }

  /** Gets the alpha value of the color if set. */
  public get alpha(): number | undefined {
    return this.a;
  }

  /** Gets the HWBColor object as string. */
  public toString(): string {
    if (this.alpha) {
      return `hwba(${this.hue.toFixed(0)}°, ${(this.whiteness * 100).toFixed(
        1,
      )}%, ${(this.blackness * 100).toFixed(1)}%, ${this.alpha})`;
    } else {
      return `hwb(${this.hue.toFixed(0)}°, ${(this.whiteness * 100).toFixed(
        1,
      )}%, ${(this.blackness * 100).toFixed(1)}%)`;
    }
  }
}
