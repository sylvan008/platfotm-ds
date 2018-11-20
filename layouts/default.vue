<template>

  <div>
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
              tag="nuxt-link"
              to="/contest">Contest
            </b-nav-item>
            <b-nav-item
              tag="nuxt-link"
              to="/problem">Problem
            </b-nav-item>
            <b-nav-item
              tag="nuxt-link"
              to="/forum">Forum
            </b-nav-item>
            <b-nav-item
              tag="nuxt-link"
              to="/leaderboard">Leaderboard
            </b-nav-item>
            <b-nav-item
              tag="nuxt-link"
              to="/team">My team
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

    <h1>Я порабощу мир Веба!</h1>
    <nuxt/>

    <footer>
      <h2>Its footer time!</h2>
    </footer>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
