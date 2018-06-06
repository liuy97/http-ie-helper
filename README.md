<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/liuy97/http-ie-helper/master/demo/src/assets/logo.svg">
</p>

# http-ie-helper - Get request will be sent with no-cache in IE 11.

[![npm version](https://badge.fury.io/js/http-ie-helper.svg)](https://badge.fury.io/js/http-ie-helper),
[![Build Status](https://travis-ci.org/liuy97/http-ie-helper.svg?branch=master)](https://travis-ci.org/liuy97/http-ie-helper)
[![Coverage Status](https://coveralls.io/repos/github/liuy97/http-ie-helper/badge.svg?branch=master)](https://coveralls.io/github/liuy97/http-ie-helper?branch=master)
[![dependency Status](https://david-dm.org/liuy97/http-ie-helper/status.svg)](https://david-dm.org/liuy97/http-ie-helper)
[![devDependency Status](https://david-dm.org/liuy97/http-ie-helper/dev-status.svg?branch=master)](https://david-dm.org/liuy97/http-ie-helper#info=devDependencies)

## Demo

View all the directives in action at https://liuy97.github.io/http-ie-helper

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 4.3 or higher, tested with 4.3.0)

## Installation
Install above dependencies via *npm*. 

Now install `http-ie-helper` via:
```shell
npm install --save http-ie-helper
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `http-ie-helper`:
```js
map: {
  'http-ie-helper': 'node_modules/http-ie-helper/bundles/http-ie-helper.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { HttpIEHelperModule } from 'http-ie-helper';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { HttpIEHelperModule } from 'http-ie-helper';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` HttpIEHelperModule `:

```js
import { HttpIEHelperModule } from 'http-ie-helper';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [HttpIEHelperModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Yong Liu. Licensed under the MIT License (MIT)

