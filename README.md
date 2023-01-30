# 🎨 NodeJS color utils
Hey there! This library an adapted NodeJS version of our color utils library for Deno. If you encounter any issues, 
feel free to report them on our Discord or open an issue on GitHub directly.

# ⚙️ Usage
To use this library in your project, you'll need to import the node module. To do so, use this command:
```
npm i color-util-nodejs
```

Here is a quick example of how to convert a hex color to a RGB color in TypeScript:
```ts
import { hex, RGBColor } from 'color-util-nodejs';

const rgbColor: RGBColor = hex('#ff0000').toRGB();
console.log(rgbColor.toString()); // => rgb(255, 0, 0) 
```

You can find more examples in the examples directory.

# 📚 Contribution
If you want to contribute to this project, feel free to choose an issue and create a pull request. 

# 🤷‍♀️ Support
If you need help with this library, check out our [Discord server](https://discord.metahond.codes) for help!

# ⚖️ License
This project is licensed under the [Apache 2.0 license](./LICENSE).