# Minor

Semantic versioning tool. Apply major, minor and patch to version.

## Install

`npm i minor -g`


## Use example

You can update version in `package.json` with:

```
minor <version>
```

For example: `minor patch` would increment patch section of version.
Get version from current `package.json`: `minor version`.

## Use as module

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

## Version in package.json

You could update version in `package.json` with:
```js
var minor = require('minor');

minor.update('1.1.1' [,dir], function(error) {
    if (error)
        console.error(error.message);
});
```

## License

MIT
