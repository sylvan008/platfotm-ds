<template>
  <b-modal
    :id="idModal"
    hide-footer>
    <b-form>
      <template v-for="(item, index) in formFields">
        <b-form-group
          :label="$t(`${item.phraseObject}.${item.label}`)"
          :label-for="item.id"
          :key="++index">
          <b-form-input
            :value="$data.form[item.value] || getValue(inputValues, item.value)"
            :placeholder="$t(`${item.phraseObject}.${item.placeholder}`)"
            v-bind="item.attrs"
            @input="update($event, form, item.value)"/>
        </b-form-group>
      </template>
    </b-form>
  </b-modal>
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
    methods: {
      getValue(inputObj, prop) {
        return inputObj[prop] || ''
      },
      update(value, object, key) {
        this.$set(object, key, value)
      }
    }
  }

</script>

<style scoped>

</style>
