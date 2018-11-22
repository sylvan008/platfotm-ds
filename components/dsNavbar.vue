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

          <b-dropdown
            text="Lang"
            right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

    </div>
  </b-navbar>
</template>

<script>
  export default {
    name: "DsNavbar"
  }
</script>

<style scoped>

</style>
