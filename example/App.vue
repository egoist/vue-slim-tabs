<template>
  <div id="app">
    <github slug="egoist/vue-slim-tabs" />
    <h1>vue-slim-tabs</h1>
    <p>
      <strong>A slim tab component for Vue.js, brought by
        <a href="https://github.com/egoist">EGOIST</a>
      </strong>
    </p>
    <p class="fade">
      > 1.3 kB minified (418 bytes gzipped).
    </p>
    <tabs class="my-tabs">
      <tab title="Vue">
        <p>Vue (pronounced /vjuː/, like
          <strong>view</strong>) is a
          <strong>progressive framework</strong> for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
      </tab>
      <tab title="React">
        <p>React and Vue share many similarities. They both:</p>
        <ul>
          <li>utilize a virtual DOM</li>
          <li>provide reactive and composable view components</li>
          <li>maintain focus in the core library, with concerns such as routing and global state management handled by companion libraries</li>
        </ul>
        <p>Being so similar in scope, we’ve put more time into fine-tuning this comparison than any other. We want to ensure not only technical accuracy, but also balance. We point out where React outshines Vue, for example in the richness of their ecosystem and abundance of their custom renderers.</p>
      </tab>
      <tab title="Svelte">
        <p>If you've ever built a JavaScript application, the chances are you've encountered – or at least heard of – frameworks like React, Angular, Vue and Ractive. Like Svelte, these tools all share a goal of making it easy to build slick interactive user interfaces.</p>
        <p>But Svelte has a crucial difference: rather than interpreting your application code at
          <em>run time</em>, your app is converted into ideal JavaScript at
          <em>build time</em>. That means you don't pay the performance cost of the framework's abstractions, or incur a penalty when your app first loads.</p>
        <p>And because there's no overhead, you can easily adopt Svelte in an existing app incrementally, or ship widgets as standalone packages that work anywhere.</p>
      </tab>
      <tab title="Angular" disabled>
        No, not angular.
      </tab>
    </tabs>
  </div>
</template>

<script>
import GitHub from 'vue-github-badge'
import {
  Tabs,
  Tab
} from '../src'

export default {
  components: {
    Tabs,
    Tab,
    Github: GitHub
  }
}
</script>

<style src="../themes/default.css"></style>

<style>
body {
  font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
</style>

<style scoped src="./App.css"></style>
