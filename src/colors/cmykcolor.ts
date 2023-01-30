import { HexColor, HSBColor, HSLColor, HWBColor, RGBColor } from './index';

/** A color in CMYK format. */
export class CMYKColor {
  private c: number;
  private m: number;
  private y: number;
  private k: number;

  /** Creates a new CMYK color. */
  constructor(c: number, m: number, y: number, k: number) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
  }

  /** Converts the CMYK color to a RGB color. */
  public toRGB(): RGBColor {
    const r = 255 * (1 - this.cyan) * (1 - this.k);
    const g = 255 * (1 - this.magenta) * (1 - this.k);
    const b = 255 * (1 - this.yellow) * (1 - this.k);

    return new RGBColor(r, g, b);
  }

  /** Converts the CMYK color the a hex color. */
  public toHex(): HexColor {
    return this.toRGB().toHex();
  }

  /** Converts a CMYK coolor to a HSL color. */
  public toHSL(): HSLColor {
    return this.toRGB().toHSL();
  }

  /** Converts a CMYK coolor to a HSB color. */
  public toHSB(): HSBColor {
    return this.toRGB().toHSB();
  }

  /** Converts a CMYK coolor to a HWB color. */
  public toHWB(): HWBColor {
    return this.toRGB().toHWB();
  }

  /** Gets the cyan value of the color. */
  public get cyan(): number {
    return this.c;
  }

  /** Gets the magenta value of the color. */
  public get magenta(): number {
    return this.m;
  }

  /** Gets the yellow value of the color. */
  public get yellow(): number {
    return this.y;
  }

  /** Gets the key (black) value of the color. */
  public get key(): number {
    return this.k;
  }

  /** Gets the CMYKColor object as string. */
  public toString(): string {
    return `cmyk(${Math.round(this.cyan * 100)}%, ${Math.round(
      this.magenta * 100,
    )}%, ${Math.round(this.yellow * 100)}%, ${Math.round(this.key * 100)}%)`;
  }
}
