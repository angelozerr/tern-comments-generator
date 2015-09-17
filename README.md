tern-comments-generator
=========

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-comments-generator.png)](http://travis-ci.org/angelozerr/tern-comments-generator)
[![NPM version](https://img.shields.io/npm/v/tern-comments-generator.svg)](https://www.npmjs.org/package/tern-comments-generator)

# Usage

[tern-comments-generator](https://github.com/angelozerr/tern-comments-generator) is a [tern plugin](http://ternjs.net/) which can `create JSDoc comments` for JavaScript `functions, variables declaration`. Takes a sample:

```javascript
function sum(x1, x2) {
  return x1 + x2;
}
sum(1, 1)
sum("", true)
```

This tern plugin is able to generates JSDoc for `sum` function by `guessing types`, to generate this JSDoc comments:

```javascript
/**
	@param {Number|String} x1
	@param {Number|Boolean} x2
	@returns {Number|String}
**/
function sum(x1, x2) {
  return x1 + x2;
}
sum(1, 1)
sum("", true)
```

In other words, you can use this tern plugin to generate JSDoc for the function (after typing Enter after a comments start):

![Generate comments](https://github.com/angelozerr/tern-comments-generator/wiki/images/CodeMirrorGenerateJSDocComments.gif)

You can play with [online demo](http://demo-angelozerr.rhcloud.com/CodeMirror-Java/comments-generator.html). 

# Editors / IDE

## CodeMirror

You can play with [online demo](http://demo-angelozerr.rhcloud.com/CodeMirror-Java/comments-generator.html). 

## Eclipse

TODO

## Other editors

TODO explain JSON request/response.
