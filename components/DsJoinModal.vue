<template>
  <b-modal
    :id="idModal"
    hide-footer>
    <b-form>
      <template v-for="(item, index) in joinForm">
        <b-form-group
          :label="item.label"
          :label-for="item.id"
          :key="++index">
          <b-form-input
            :value="$data.form[item.model] || getValue(inputValues, item.model)"
            v-bind="item.inputAttr"
            @input="update($event, form, item.model)"/>
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
      }
    },
    data() {
      return {
        joinForm: [
          {label: 'Surename', model: 'surename', inputAttr: {id: 'surename-input-f', placeholder: 'Фамилия'}},
          {label: 'Name', model: 'name', inputAttr: {id: 'name-input-f', type: 'text', placeholder: 'Имя'}},
          {label: 'Last Name', model: 'lastName',    inputAttr: {id: 'lastname-input-f', placeholder: 'Отчество'}},
          {label: 'Birthday', model: 'birthday', inputAttr: {id: 'birthday-input-f', type: 'date', placeholder: 'Дата рождения'}},
          {label: 'Phone number', model: 'phone', inputAttr: {id: 'phone-input-f', placeholder: 'Телефон'}},
          {label: 'Country', model: 'country', inputAttr: {id: 'country-input-f', placeholder: 'Страна проживания'}},
          {label: 'Region', model: 'region', inputAttr: {id: 'region-input-f', placeholder: 'Регион'}},
          {label: 'City', model: 'city', inputAttr: {id: 'city-input-f', placeholder: 'Город проживания'}},
          {label: 'Occupation', model: 'occupation', inputAttr: {id: 'occupation-input-f', placeholder: 'Место работы или учёбы', }},
        ],
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
