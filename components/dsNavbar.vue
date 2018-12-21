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

          <b-btn
            v-b-modal="'join-modal'"
            v-if="isLogin">
            {{ $t('btns.join') }}
          </b-btn>

          <ds-modal-login v-show="!isLogin"/>
          <ds-profile-modal v-if="isLogin"/>
          <ds-join-modal
            v-if="isLogin"
            :input-values="joinProfile"
            :form-fields="joinForm"
            id-modal="join-modal"/>

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

  export default {
    name: "DsNavbar",
    components: {
      'ds-lang-dd': DsLangDd,
      'ds-user-dd': DsUserDd,
      'ds-modal-login': DsModalLogin,
      'ds-profile-modal': DsProfileModal,
      'ds-join-modal': DsJoinModal
    },
    data() {
      return {
        joinForm: [
          {label: this.$t('joinForm.label.surname'), value: 'surname', attrs: {id: 'surename-input-f', placeholder: this.$t('joinForm.placeholder.surname')}},
          {label: this.$t('joinForm.label.name'), value: 'name', attrs: {id: 'name-input-f', type: 'text', placeholder: this.$t('joinForm.placeholder.name')}},
          {label: this.$t('joinForm.label.patronymic'), value: 'patronymic', attrs: {id: 'lastname-input-f', placeholder: this.$t('joinForm.placeholder.patronymic')}},
          {label: this.$t('joinForm.label.birthday'), value: 'birthday', attrs: {id: 'birthday-input-f', type: 'date', placeholder: this.$t('joinForm.placeholder.birthday')}},
          {label: this.$t('joinForm.label.phone'), value: 'phone', attrs: {id: 'phone-input-f', placeholder: this.$t('joinForm.placeholder.phone')}},
          {label: this.$t('joinForm.label.country'), value: 'country', attrs: {id: 'country-input-f', placeholder: this.$t('joinForm.placeholder.country')}},
          {label: this.$t('joinForm.label.region'), value: 'region', attrs: {id: 'region-input-f', placeholder: this.$t('joinForm.placeholder.region')}},
          {label: this.$t('joinForm.label.city'), value: 'city', attrs: {id: 'city-input-f', placeholder: 'joinForm.placeholder.city'}},
          {phraseObject: 'joinForm', label: 'label.occupation', placeholder: 'placeholder.occupation', value: 'occupation', attrs: {id: 'occupation-input-f'}},
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
