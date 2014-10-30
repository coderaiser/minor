# Minor

Semantic versioning tool. Apply major, minor and patch to version.

## Install

`npm i minor --save`

## How to use?

```js
var minor = require('minor'),
    
console.log(minor('patch', '1.0.0'));
/* 1.0.1*/
console.log(minor('minor', '1.0.0'));
/* 1.1.0 */
console.log(minor('major', '1.0.0'));
/* 2.0.0 */
```

## License

MIT
