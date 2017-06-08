# tabs

[![NPM version](https://img.shields.io/npm/v/vue-slim-tabs.svg?style=flat)](https://npmjs.com/package/vue-slim-tabs) [![NPM downloads](https://img.shields.io/npm/dm/vue-slim-tabs.svg?style=flat)](https://npmjs.com/package/vue-slim-tabs) [![CircleCI](https://circleci.com/gh/egoist/vue-slim-tabs/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-slim-tabs/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add vue-slim-tabs
```

## Usage

```vue
<template>
  <tabs>
    <tab title="Vue">
      This is Vue
    </tab>
    <tab title="React">
      This is React
    </tab>
    <tab title="Svelte">
      This is Svelte
    </tab>
  </tabs>
</template>

<script>
  import { Tabs, Tab } from 'vue-slim-tabs'

  export default {
    components: {
      Tabs, Tab
    }
  }
</script>

<!-- optionally use our default style -->
<style src="vue-slim-tabs/themes/default.css"></style>
```

You can use it as a plugin if you don't mind registering components globally:

```js
import * as Tabs from 'vue-slim-tabs'

Vue.use(Tabs)
```

## Props

### `<Tabs>`

#### defaultIndex

Type: `Number`<br>
Default: `0`

Index of selected tab on the first render.

#### onSelect

Type: `function`<br>
Default: `undefined`

The function to invoke as user selects a tab by clicking:

```js
function onSelect(e, index) {
  // e: click event
  // index: index of selected tab
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-slim-tabs** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-slim-tabs/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
