<template>
  <b-modal
    id="login-modal"
    hide-footer
    @shown="clear(form)">
    <b-form @submit.prevent="onSignUp">
      <b-form-group
        label="Email:"
        label-for="user-name-input">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="user-name-input"
          v-model="form.email"
          type="email"
          required
          placeholder="Введите email"/>
      </b-form-group>

      <b-form-group
        label="Пароль:"
        label-for="user-password-input">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="user-password-input"
          v-model="form.password"
          type="password"
          required
          placeholder="Введите пароль"/>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary">
        Войти
      </b-button>
    </b-form>
  </b-modal>
</template>

<script>
  import { mapActions } from 'vuex';
  import {AUTH_REQUEST} from "../assets/constants/auth";

  export default {
    name: "DsModalLogin",
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions({
        [AUTH_REQUEST]: `auth/${AUTH_REQUEST}`
      }),
      onSignUp() {
        const { email, password } = this.form;
        this.AUTH_REQUEST ({ email, password })
          .then(() => {
            const lang = this.$store.state.locale;
            this.$router.push({ name: 'index', params: {lang} });
          })
          .catch((err) => console.log(err));
      },
      clear(form) {
        for (let prop in form) {
          if (Object.prototype.hasOwnProperty.call(form, prop)) {
            form[prop] = '';
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
