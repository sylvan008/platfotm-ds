<template>
  <b-modal
    id="join-modal"
    hide-footer>
    <b-form>
      <b-form-group
        v-for="(item, index) in joinForm"
        :label="item.label"
        :label-for="item.id"
        :key="index + 1">
        <b-form-input
          :value="$data[item.model]"
          v-bind="item.inputAttr" />
      </b-form-group>
    </b-form>
    {{ joinForm[0].model }}
  </b-modal>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapMutations } = createNamespacedHelpers('user');

  export default {
    name: "DsJoinModal",
    data() {
      return {
        form: {
          surename: 'Ork',
          firstName: 'Draks',
        },
        joinForm: [
          {label: 'Surename', model: 'form.surename', inputAttr: {id: 'surename-input-f',  type: 'text', placeholder: 'Фамилия'}},
          {label: 'Name', model: 'this.form.firstName', inputAttr: {id: 'name-input-f', type: 'text', placeholder: 'Имя'}},
          // {label: 'Last Name',    inputAttr: {id: 'lastname-input-f', 'v-model': 'lastName', type: 'text', placeholder: 'Отчество'}},
          // {label: 'Birthday',     inputAttr: {id: 'birthday-input-f', 'v-model': 'birthday', type: 'date', placeholder: 'Дата рождения'}},
          // {label: 'Phone number', inputAttr: {id: 'phone-input-f', 'v-model': 'phone', type: 'text', placeholder: 'Телефон'}},
          // {label: 'Country',      inputAttr: {id: 'country-input-f', 'v-model': 'country', type: 'text', placeholder: 'Страна проживания'}},
          // {label: 'Region',       inputAttr: {id: 'region-input-f', 'v-model': 'region', type: 'text', placeholder: 'Регион'}},
          // {label: 'City',         inputAttr: {id: 'city-input-f', 'v-model': 'city', type: 'text', placeholder: 'Город проживания'}},
          // {label: 'Occupation',   inputAttr: {id: 'occupation-input-f', 'v-model': 'occuption', type: 'text', placeholder: 'Место работы или учёбы', }},
        ]
      }
    },
    computed: {
      ...mapState({
        nameState: state => state.profile.name,
      }),
      surename: {
        get() {
          return this.nameState || 'No surename'
        }
      }
    },
     computed: {
      getName() {
        return this.form.surename + ' ' + this.form.firstName
      }
     }
  }

</script>

<style scoped>

</style>
