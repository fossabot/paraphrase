# paraphrase [![npm version](https://img.shields.io/npm/v/paraphrase.svg)](https://www.npmjs.com/package/paraphrase)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fomrilotan%2Fparaphrase.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fomrilotan%2Fparaphrase?ref=badge_shield)

## String template interpolation

```js
npm i -S paraphrase
```

Creates new paraphrase method instance

```js
const paraphrase = require('paraphrase');
const phrase = paraphrase(/\${([^{}]*)}/gm); // Create a new phrase function using a RegExp match

phrase('Hello, ${name}', {name: 'Martin'}); // Hello, Martin
```

Acceptable replacements (values) are strings and numbers

## Examples
### Objects

```js
phrase('Hello, ${name}', {name: 'Martin'}); // Hello, Martin
```

### Objects with dot notation

```js
const user = {
    name: {first: 'Martin', last: 'Prince'}
};
phrase('Hello, ${name.first} ${name.last}', user); // Hello, Martin Prince
```

### Arrays

```js
phrase('Hello, ${0} ${1}', ['Martin', 'Prince']); // Hello, Martin Prince
```

### Spread arguments

```js
phrase('Hello, ${0} ${1}', 'Martin', 'Prince'); // Hello, Martin Prince
```


## Premade

### dollar `${...}`
```js
const phrase = require('paraphrase/dollar');

phrase('Hello, ${name}', {name: 'Martin'}); // Hello, Martin
```

### double `{{...}}`
```js
const phrase = require('paraphrase/double');

phrase('Hello, {{name}}', {name: 'Martin'}); // Hello, Martin
```

### percent `%{...}` (i18n style)
```js
const phrase = require('paraphrase/percent');

phrase('Hello, %{name}', {name: 'Martin'}); // Hello, Martin
```

### hash `#{...}` (ruby style)
```js
const phrase = require('paraphrase/hash');

phrase('Hello, #{name}', {name: 'Martin'}); // Hello, Martin
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fomrilotan%2Fparaphrase.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fomrilotan%2Fparaphrase?ref=badge_large)