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
          :value="mailState"
          type="email"
          disabled />
      </b-form-group>
      <b-form-group
        label="Full name"
        label-for="name-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="name-input-form"
          v-model="userName"
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
          v-model="userPhone"
          type="text"
          placeholder="Input phone number" />
      </b-form-group>
      <b-form-group
        label="Bio"
        label-for="input-bio-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-textarea
          id="input-bio-form"
          v-model="userBio"
          :rows="3"
          :placeholder="`${nameState || 'Друг'} , расскажи немного о себе`" />

      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapMutations } = createNamespacedHelpers('user');


  export default {
    name: "DsProfileModal",
    data() {
      return {
        form: {
          name: '',
          phone: '',
          bio: ''
        }
      }
    },
    computed: {
      ...mapState({
        mailState: state => state.profile.email,
        nameState: state => state.profile.name,
        phoneState: state => state.profile.phone,
        bioState: state => state.profile.bio
      }),
      userBio: {
        get() {
          return this.form.bio || this.bioState
        },
        set(value) {
          this.form.bio = value
        }
      },
      userPhone: {
        get() {
          return this.form.phone || this.phoneState
        },
        set(value) {
          this.form.phone = value
        }
      },
      userName: {
        get() {
          return this.form.name || this.nameState
        },
        set(value) {
          this.form.name = value
        }
      }
    }
  }
</script>

<style scoped>

</style>
