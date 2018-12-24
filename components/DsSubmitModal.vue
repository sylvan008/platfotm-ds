<template>
  <div>
    <b-btn
      v-b-modal="'submit-modal'">
      Отправить решение
    </b-btn>

    <b-modal
      id="submit-modal"
      hide-footer>

      <b-tabs>
        <b-tab>
          <b-form>
            <b-form-group>
              <b-input />
            </b-form-group>
            <b-form-group>
              <b-input />
            </b-form-group>
            <b-btn>Load</b-btn>
          </b-form>
        </b-tab>

        <b-tab>
          <b-form-group>
            <b-input />
          </b-form-group>
          <b-form-group>
            <b-input />
          </b-form-group>
          <b-btn>Send</b-btn>
        </b-tab>
      </b-tabs>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: "DsSubmitModal",
    props: {
      idModal: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
