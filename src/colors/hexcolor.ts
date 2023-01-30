import { CMYKColor, HSLColor, HSBColor, RGBColor, HWBColor } from './index';

/** A color in hex format. */
export class HexColor {
  /** The hex string */
  private hex: string;

  /** Creates a new hex color class. */
  constructor(hex: string) {
    this.hex = hex.replace('0x', '#');
  }

  /** Converts a hex color to a RGB color. */
  public toRGB(): RGBColor {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);

      return new RGBColor(r, g, b);
    }

    throw new Error('Invalid hex string found.');
  }

  /** Converts a hex color to a CMYK color. */
  public toCMYK(): CMYKColor {
    return this.toRGB().toCMYK();
  }

  /** Converts a hex color to a HSL color. */
  public toHSL(): HSLColor {
    return this.toRGB().toHSL();
  }

  /** Converts a hex color to a HSB color. */
  public toHSB(): HSBColor {
    return this.toRGB().toHSB();
  }

  /** Converts a hex color to a HWB color. */
  public toHWB(): HWBColor {
    return this.toRGB().toHWB();
  }

  /** Gets the hex value as string. */
  public toString(): string {
    return this.hex;
  }

  /** Gets the red value of color. */
  public get red(): number {
    return this.toRGB().red;
  }

  /** Gets the green value of color. */
  public get green(): number {
    return this.toRGB().green;
  }

  /** Gets the blue value of color. */
  public get blue(): number {
    return this.toRGB().blue;
  }
}
