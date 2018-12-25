<template>
  <div>
    <b-btn
      v-b-modal="'join-modal'">
      {{ $t('btns.join') }}
    </b-btn>

    <b-modal
      :id="idModal"
      hide-footer
      @shown="initForm()">
      <b-form>
        <template v-for="(item, index) in formFields">
          <b-form-group
            :label="$t(`${item.phraseObject}.${item.label}.${item.value}`)"
            :label-for="item.id"
            :key="++index">
            <b-form-input
              v-model="$data.form[item.value]"
              :placeholder="$t(`${item.phraseObject}.${item.placeholder}.${item.value}`)"
              v-bind="item.attrs"/>
          </b-form-group>
        </template>
        <b-btn @click="join()">Присоединиться</b-btn>
      </b-form>
    </b-modal>
  </div>

</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapMutations, mapActions } = createNamespacedHelpers('user');

  export default {
    name: "DsJoinModal",
    props: {
      inputValues: {
        type: Object,
        required: true
      },
      idModal: {
        type: String,
        required: true
      },
      formFields: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        form: {},
      }
    },
    created() {
      this.initForm()
    },
    methods: {
      ...mapActions(['USER_JOIN']),
      initForm() {
        this.form = Object.assign({}, this.inputValues)
      },
      join() {
        this.USER_JOIN(this.form)
      }
    }
  }

</script>

<style scoped>

</style>
