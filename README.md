# everything-is-shit

> Browser utility to show annoying error messages.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save everything-is-shit
```

## Usage
[Try on CodePen](https://codepen.io/zsoltsimon97/pen/raNwBaG)

```js
import { showShitMessage, removeShitMessage } from 'everything-is-shit';
```

### Show message
```js
showShitMessage('szar az egész'); // use default options
```
### Hide message
```js
removeShitMessage(); // use default options
```

## API

```js
showShitMessage(message, isFullscreen, backgroundColor, fontColor);
```

| parameter name | type | required | default |
|----------------|------|----------|---------|
| message | string | true |   |
| isFullscreen | boolean | false | false  |
| backgroundColor | string (CSS color) | false |  yellow |
| fontColor | string (CSS color)  | false | red  |

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Author

**Zsolt Simon**

* [GitHub Profile](https://github.com/zsoltsimon97)

### License

Copyright © 2025, [Zsolt Simon](https://github.com/zsoltsimon97).
Released under the [MIT License](LICENSE).
