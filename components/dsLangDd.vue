<template>
  <b-dropdown
    variant="link"
    size="lg">
    <template slot="button-content">
      <img
        :src="flagSrc"
        alt="flag"
        class="lang-flag">
    </template>
    <b-dropdown-item
      :to="rusRoute"
      replace>
      Русский
    </b-dropdown-item>
    <b-dropdown-item
      :to="englishRoute"
      replace>
      English
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
  export default {
    name: "DsLangDd",
    computed: {
      flagSrc: function() {
        return '/flags/flag_' + this.$i18n.locale + '.png'
      },
      rusRoute: function() {
        // $route.fullPath.replace(/^\/[^\/]+/, '')
        return { name: `${this.$route.name}`, params: {lang: 'ru'}};
      },
      englishRoute: function() {
        if ( this.$store.state.locale !== this.$i18n.fallbackLocale ) {
          return this.$route.fullPath;
        }
        return { name: `lang-${this.$route.name}`, params: {lang: 'en'}};
      }
    }
  }
</script>

<style scoped>
.lang-flag {
  width: 25px;
  height: 15px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.5);
}
</style>
