import { CMYKColor, HexColor, HSBColor, HSLColor, HWBColor } from './index';

/** A color in RGB format. */
export class RGBColor {
  private r: number;
  private g: number;
  private b: number;
  private a?: number | undefined;

  /**
   * Creates a new RGB color.
   * @param r The red value.
   * @param g The green value.
   * @param b The blue value.
   * @param a The alpha value.
   */
  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  /** Converts the RGB color to a CMYK color. */
  public toCMYK(): CMYKColor {
    const r = this.red / 255;
    const g = this.green / 255;
    const b = this.blue / 255;

    const k = 1 - Math.max(r, g, b);
    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k);

    return new CMYKColor(c, m, y, k);
  }

  /** Converts the RGB Color to a hex color. */
  public toHex(): HexColor {
    return new HexColor(
      `#${((1 << 24) + (this.red << 16) + (this.green << 8) + this.blue)
        .toString(16)
        .slice(1)}`,
    );
  }

  /** Converts the RGB Color to a HSL color. */
  public toHSL(): HSLColor {
    const r1 = this.red / 255;
    const g1 = this.green / 255;
    const b1 = this.blue / 255;

    const cMax = Math.max(r1, g1, b1);
    const cMin = Math.min(r1, g1, b1);
    const cDelta = cMax - cMin;

    let h = 0;
    if (cDelta !== 0) {
      switch (cMax) {
        case r1:
          h = 60 * ((g1 - b1) / cDelta + (g1 < b1 ? 6 : 0));
          break;

        case g1:
          h = 60 * ((b1 - r1) / cDelta + 2);
          break;

        case b1:
          h = 60 * ((r1 - g1) / cDelta + 4);
          break;
      }
    }

    const l = (cMax + cMin) / 2;

    let s = 0;
    if (cDelta !== 0) {
      s = cDelta / (1 - Math.abs(2 * l - 1));
    }

    return new HSLColor(h, s, l, this.alpha);
  }

  /** Converts the RGB Color to a HSB color. */
  public toHSB(): HSBColor {
    const hsl = this.toHSL();
    const cMax = Math.max(this.red / 255, this.green / 255, this.blue / 255);
    const delta =
      cMax - Math.min(this.red / 255, this.green / 255, this.blue / 255);
    const s = cMax === 0 ? 0 : delta / cMax;

    return new HSBColor(hsl.hue, s, cMax);
  }

  /** Converts the RGB color to a HWB color. */
  public toHWB(): HWBColor {
    return this.toHSB().toHWB();
  }

  /** Gets the red value. */
  public get red(): number {
    return this.r;
  }

  /** Gets the green value. */
  public get green(): number {
    return this.g;
  }

  /** Gets the blue value. */
  public get blue(): number {
    return this.b;
  }

  /** Gets the alpha value if set. */
  public get alpha(): number | undefined {
    return this.a;
  }

  /** Gets the RGBColor object as string. */
  public toString(): string {
    if (this.alpha) {
      return `rgba(${Math.round(this.red)}, ${Math.round(
        this.green,
      )}, ${Math.round(this.blue)}, ${Math.round(this.alpha)})`;
    } else {
      return `rgb(${Math.round(this.red)}, ${Math.round(
        this.green,
      )}, ${Math.round(this.blue)})`;
    }
  }
}
