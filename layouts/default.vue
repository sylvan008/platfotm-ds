<template>

  <div>
    <ds-navbar />

    <nuxt/>

    <ds-footer />
  </div>
</template>

<script>
  import DsNavbar from '~/components/dsNavbar';
  import DsFooter from '~/components/dsFooter';
  export default {
    components: {
      'ds-navbar': DsNavbar,
      'ds-footer': DsFooter,
    }
  }
</script>

<style>

</style>
