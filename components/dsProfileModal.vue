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
          :value="mail"
          type="email"
          disabled />
      </b-form-group>
      <b-form-group
        label="Full name"
        label-for="name-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="name-input-form"
          v-model="form.name"
          type="text"
          required
          placholder="Input full name">
          {{ name }}
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Phone"
        label-for="phone-input-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-input
          id="phone-input-form"
          v-model="form.phone"
          type="text"
          placeholder="Input phone number" >
          {{ phone }}
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Bio"
        label-for="input-bio-form">
        <!--suppress CheckEmptyScriptTag -->
        <b-form-textarea
          id="input-bio-form"
          v-model="form.bio"
          :rows="3"
          placeholder="Input something">
          {{ bio }}
        </b-form-textarea>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapMutations } = createNamespacedHelpers('user');


  export default {
    name: "DsProfileModal",
    props: {
      // mail: {
      //   type: String,
      //   required: true
      // },
      name: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        default: ''
      },
      bio: {
        type: String,
        default: ''
      }
    },
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
      ...mapState('user', {
        mailState: state => state.profile.email
      }),
      mail: {
        get() {
          return this.$store.state.user.profile.email;
        },
        // set(value) {
        //   this.setName(value)
        // }
      }
    },
    methods: {
      // ...mapMutations([
      //   'setName'
      // ])
    }
  }
</script>

<style scoped>

</style>
