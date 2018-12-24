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
      </b-form>
    </b-modal>
  </div>

</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapMutations } = createNamespacedHelpers('user');

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
      initForm() {
        this.form = Object.assign({}, this.inputValues)
      }
    }
  }

</script>

<style scoped>

</style>
