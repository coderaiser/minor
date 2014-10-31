# Minor [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/minor.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/minor/master.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/minor "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/minor  "Build Status""
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

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
