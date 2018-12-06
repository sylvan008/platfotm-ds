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
      :to="{ name: this.$router.name, params: {lang: 'ru'}}"
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
        return this.switchLang('ru')
      },
      englishRoute: function() {
        return this.switchLang('en')
      }
    },
    methods: {
      switchLang: function(lang) {
        let path = this.$route.fullPath;
        if (this.$route.params.lang) {
          return `/${lang}${path.slice(3)}`;
        }
        return `/${lang}${path}`;
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
