<template>
  <b-navbar
    toggleable="md"
    type="light"
    variant="light">
    <div class="container">
      <b-navbar-brand href="#">DataSoul</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse
        id="nav_collapse"
        is-nav>

        <b-nav pills>
          <b-nav-item
            :to="$i18n.path('contest')"
            tag="nuxt-link">
            {{ $t('links.contest') }}
          </b-nav-item>
          <b-nav-item
            :to="$i18n.path('problem')"
            tag="nuxt-link">
            {{ $t('links.problem') }}
          </b-nav-item>
          <b-nav-item
            :to="$i18n.path('forum')"
            tag="nuxt-link">
            {{ $t('links.forum') }}
          </b-nav-item>
          <b-nav-item
            :to="$i18n.path('leaderboard')"
            tag="nuxt-link">
            {{ $t('links.leaderboard') }}
          </b-nav-item>
          <b-nav-item
            :to="$i18n.path('team')"
            tag="nuxt-link">
            {{ $t('links.team') }}
          </b-nav-item>
        </b-nav>

        <b-navbar-nav class="ml-auto">

          <ds-lang-dd />

        </b-navbar-nav>
      </b-collapse>

    </div>
  </b-navbar>
</template>

<script>
  import DsLangDd from '~/components/DsLangDd';
  export default {
    name: "DsNavbar",
    components: {
      'ds-lang-dd': DsLangDd
    }
  }
</script>

<style scoped>

</style>
