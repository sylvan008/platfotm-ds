<template>

  <div>
    <ds-navbar />

    <nuxt/>

    <footer>
      <h2>Its footer time!</h2>
    </footer>
  </div>
</template>

<script>
  import DsNavbar from '~/components/dsNavbar'
  export default {
    components: {
      'ds-navbar': DsNavbar
    }
  }
</script>

<style>

</style>
