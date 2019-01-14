<template>
  <b-modal
    id="profile-modal"
    hide-footer
    @shown="initForm()">
    <b-form>
      <b-form-group
        label="Email"
        label-for="email-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="email-input-form"
          :value="form.email"
          :placeholder="$t('profileModal.placeholder.email')"
          type="email"
          disabled />
      </b-form-group>
      <b-form-group
        label="Full name"
        label-for="name-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="name-input-form"
          v-model="form.username"
          :placeholder="$t('profileModal.placeholder.name')"
          type="text"
          required/>
      </b-form-group>
      <b-form-group
        label="Phone"
        label-for="phone-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="phone-input-form"
          v-model="form.phone"
          :placeholder="$t('profileModal.placeholder.phone')"
          type="text"/>
      </b-form-group>
      <b-form-group
        label="Bio"
        label-for="input-bio-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-textarea
          id="input-bio-form"
          v-model="form.bio"
          :rows="3"
          :placeholder="`${profile.name || 'Друг'} , ${ $t('profileModal.placeholder.bio') }`" />

      </b-form-group>
      <b-btn @click="update()">
        Обновить
      </b-btn>
    </b-form>
  </b-modal>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapMutations, mapActions } = createNamespacedHelpers('user');


  export default {
    name: "DsProfileModal",
    props: {
      profile: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        form: {
        }
      }
    },
    created() {
      this.initForm();
    },
    methods: {
      ...mapActions(['UPDATE_PROFILE']),
      initForm() {
        this.form = Object.assign({}, this.profile)
      },
      update() {
        this.UPDATE_PROFILE(this.form)
      }
    }
  }
</script>

<style scoped>

</style>
