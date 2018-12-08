<template>
  <b-modal
    id="profile-modal"
    hide-footer>
    <b-form>
      <b-form-group
        label="Email"
        label-for="email-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="email-input-form"
          type="email"
          disabled />
      </b-form-group>
      <b-form-group
        label="Full name"
        label-for="name-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="name-input-form"
          type="text"
          required
          placholder="Input full name" />
      </b-form-group>
      <b-form-group
        label="Phone"
        label-for="phone-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="phone-input-form"
          type="text"
          placeholder="Input phone number" />
      </b-form-group>
      <b-form-group
        label="Bio"
        label-for="input-bio-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-textarea
          id="input-bio-form"
          v-model="form.bio"
          :rows="3"
          placeholder="Input something" />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
  export default {
    name: "DsProfileModal",
    data() {
      return {
        form: {
          bio: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
