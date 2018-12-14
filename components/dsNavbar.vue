<template>
  <b-navbar
    toggleable="md"
    type="light"
    variant="light">
    <div class="container">
      <b-navbar-brand href="#">DataSoul</b-navbar-brand>
      <!--suppress CheckEmptyScriptTag -->
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
          <ds-user-dd v-if="isLogin" />
          <b-btn
            v-b-modal="'login-modal'"
            v-show="!isLogin">
            Войти
          </b-btn>

          <b-btn
            v-b-modal="'join-modal'"
            v-if="isLogin">
            Присоединиться
          </b-btn>

          <ds-modal-login v-show="!isLogin"/>
          <ds-profile-modal v-if="isLogin"/>
          <ds-join-modal v-if="isLogin"/>

        </b-navbar-nav>
      </b-collapse>

    </div>
  </b-navbar>
</template>

<script>
  import { mapGetters } from 'vuex';

  import DsLangDd from '~/components/dsLangDd';
  import DsUserDd from './dsUserDd';
  import DsModalLogin from './dsModalLogin';
  import DsProfileModal from './dsProfileModal';
  import DsJoinModal from './DsJoinModal';

  export default {
    name: "DsNavbar",
    components: {
      'ds-lang-dd': DsLangDd,
      'ds-user-dd': DsUserDd,
      'ds-modal-login': DsModalLogin,
      'ds-profile-modal': DsProfileModal,
      'ds-join-modal': DsJoinModal
    },
    computed: {
      ...mapGetters('auth', ['isAuthenticated']),
      isLogin() {
        return this.isAuthenticated
      }
    }
  }
</script>

<style scoped>

</style>
