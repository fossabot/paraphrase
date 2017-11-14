# paraphrase

Creates new paraphrase method instance

```js
const phraser = paraphrase(/\${([^{}]*)}/gm); // Create a new phraser function using a RegExp match

phraser('Hello, ${name}', {name: 'Martin'}); // Hello, Martin
```

Acceptable replacements (values) are strings and numbers
