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
      :href="rusRoute">
      Русский
    </b-dropdown-item>
    <b-dropdown-item
      :href="englishRoute">
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
        return this.sliceLangPath()
      },
      englishRoute: function() {
        return '/en' + this.sliceLangPath()
      }
    },
    methods: {
      sliceLangPath: function() {
        let path = this.$route.fullPath;
        if (path.includes('/en')) {
          path = path.slice(3);
        }
        return path;
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
