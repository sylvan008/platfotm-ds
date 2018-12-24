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
            {{ $t('btns.login') }}
          </b-btn>

          <ds-modal-login v-show="!isLogin"/>
          <ds-profile-modal v-if="isLogin"/>

          <ds-join-modal
            v-if="isLogin && $store.state.user.status === 'success'"
            :input-values="joinProfile"
            :form-fields="joinForm"
            id-modal="join-modal"/>

          <ds-submit-modal
            id-modal="submit-modal"/>

        </b-navbar-nav>
      </b-collapse>

    </div>
  </b-navbar>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  import DsLangDd from '~/components/dsLangDd';
  import DsUserDd from './dsUserDd';
  import DsModalLogin from './dsModalLogin';
  import DsProfileModal from './dsProfileModal';
  import DsJoinModal from './DsJoinModal';
  import DsSubmitModal from './DsSubmitModal';

  export default {
    name: "DsNavbar",
    components: {
      'ds-lang-dd': DsLangDd,
      'ds-user-dd': DsUserDd,
      'ds-modal-login': DsModalLogin,
      'ds-profile-modal': DsProfileModal,
      'ds-join-modal': DsJoinModal,
      'ds-submit-modal': DsSubmitModal
    },
    data() {
      return {
        joinForm: [
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'surname', attrs: {id: 'surename-input-f'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'name', attrs: {id: 'name-input-f', type: 'text'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'patronymic', attrs: {id: 'lastname-input-f'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'birthday', attrs: {id: 'birthday-input-f', type: 'date'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'phone', attrs: {id: 'phone-input-f'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'country', attrs: {id: 'country-input-f'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'region', attrs: {id: 'region-input-f'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'city', attrs: {id: 'city-input-f'}},
          {phraseObject: 'joinForm', label: 'label', placeholder: 'placeholder', value: 'occupation', attrs: {id: 'occupation-input-f'}},
        ]
      }
    },
    computed: {
      ...mapGetters('auth', ['isAuthenticated']),
      ...mapState('user', { joinProfile: state => state.profile}),
      isLogin() {
        return this.isAuthenticated
      }
    }
  }
</script>

<style scoped>

</style>
