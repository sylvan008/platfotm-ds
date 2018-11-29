<template>
  <b-modal
    id="login-modal"
    hide-footer
    @shown="clear">
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
      onSignUp() {
        return ''
      },
      clear() {
        for (let prop in this.form) {
          this.form[prop] = '';
        }
      }
    }
  }
</script>

<style scoped>

</style>
