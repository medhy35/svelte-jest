# Svelte-jest

> Unit testing Svelte projet in Jest

[![Build Status](https://travis-ci.org/medhy35/svelte-jest.svg?branch=master)](https://travis-ci.org/medhy35/svelte-jest)
[![install size](https://packagephobia.now.sh/badge?p=svelte)](https://packagephobia.now.sh/result?p=svelte)



# Install

 Install [Svelte](https://svelte.dev/).
```sh
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
```
 Install [Jest](https://jestjs.io/).
```sh
npm install --save-dev jest
or 
yarn add --dev jest
```

## Configuration

After installation configure babel to support ES2015 modules  

### Step 1 :

Add your test environment to .babelrc in the root of your project:

```js
/// <reference types="babel" />
{
    "env":{
        "test":{
            "plugins":["transform-es2015-modules-commonjs"]
        }
    }
}
```
### Step 2 :
```sh
npm install --save-dev babel-plugin-transform-es2015-modules-commonjs
```
And that's it. Jest will enable compilation from ES modules to CommonJS automatically, without having to inform additional options to your jest property inside package.json

