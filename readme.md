# world-heritage-image

[![npm version](https://img.shields.io/npm/v/world-heritage-image.svg)](https://www.npmjs.com/package/world-heritage-image)
[![Build Status](https://travis-ci.org/juliuste/world-heritage-image.svg?branch=master)](https://travis-ci.org/juliuste/world-heritage-image)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/world-heritage-image.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/world-heritage-image.svg)](https://david-dm.org/juliuste/world-heritage-image)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/world-heritage-image.svg)](https://david-dm.org/juliuste/world-heritage-image#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/world-heritage-image.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install world-heritage-image
```

## Usage

### `image(id)`

```js
const heritageImage = require('world-heritage-image')

heritage(heritageID).then(…)
```

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that will resolve in a wikimedia commons photo file name:

```js
heritage(3).then(console.log) // => 'Aachener Dom.jpg'
heritage(402384).then(console.log) // => null
```

### Workflow example

You can combine this module with `[world-heritage](https://github.com/juliuste/world-heritage)` and `[commons-photo-url](https://github.com/derhuerst/commons-photo-url):

```js
const heritage = require('world-heritage')
const image = require('world-heritage-image')
const commons = require('commons-photo-url')

heritage()
.then((list) => list.map(x => x.id)) // UNESCO heritage ids
.then((ids) => Promise.all(
    ids.map(image)
))
.then((fileNames) => fileNames.filter((f) => !!f)) // remove heritage sites that lack a wikimedia commons image
.then((fileNames) => fileNames.map((f) => commons(f, commons.sizes.medium)))
.then(console.log)

// => [url1, url2, …]

```

## See also

- [world-heritage](https://github.com/juliuste/world-heritage) - UNESCO world heritage sites
- [commons-photo-url](https://github.com/derhuerst/commons-photo-url) - Generate the Wikimedia Commons URL of a photo
- [world-heritage-twitter-bot](https://github.com/juliuste/world-heritage-twitter-bot) - UNESCO world heritage twitter bot

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/world-heritage-image/issues).
