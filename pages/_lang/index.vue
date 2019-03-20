<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ $t('title') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('greetings') }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
        <nuxt-link to="/about">About</nuxt-link>
      </div>

      <p>competitions items: {{ competitionsItems }}</p>
    </div>
  </section>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapActions, mapState } = createNamespacedHelpers('competitionsPreview');

  export default {
    name: 'Index',
    computed: {
      ...mapState(['competitionsItems'])
    },
    created() {

      this.getCompetitionsItems({offset: 0, limit: 0});
    },
    methods: {
      ...mapActions(['getCompetitionsItems'])
    }
  }
</script>

<style>

</style>
