<template>
  <div>
    <b-btn
      v-b-modal="'submit-modal'">
      {{ $t('submitModal.btns.modal') }}
    </b-btn>

    <b-modal
      id="submit-modal"
      :body-class="['submit-body']"
      hide-header
      hide-footer>
      <b-card no-body>
        <b-tabs
          pills
          card>
          <b-tab
            :title="$t('submitModal.ml.title')"
            active>
            <b-form>
              <b-form-group>
                <b-form-file
                  v-model="form.file"
                  :state="Boolean(form.file)"
                  :placeholder="$t('submitModal.ml.placeholder.load')"/>
              </b-form-group>
              <b-form-group>
                <b-input
                  :placeholder="$t('submitModal.ml.placeholder.comment')"/>
              </b-form-group>
              <b-btn>{{ $t('submitModal.btns.submit') }}</b-btn>
            </b-form>
            Selected file: {{ form.file && form.file.name }}<br>
            File size: {{ form.file && form.file.type }}
          </b-tab>

          <b-tab :title="$t('submitModal.prototype.title')">
            <b-form-group>
              <b-input
                :placeholder="$t('submitModal.prototype.placeholder.name')"/>
            </b-form-group>
            <b-form-group>
              <b-input
                :placeholder="$t('submitModal.prototype.placeholder.description')"/>
            </b-form-group>
            <b-form-group>
              <b-input
                :placeholder="$t('submitModal.prototype.placeholder.link')"/>
            </b-form-group>
            <b-btn>{{ $t('submitModal.btns.submit') }}</b-btn>
          </b-tab>
        </b-tabs>
      </b-card>
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
    },
    data() {
      return {
        form: {
          file: null
        }
      }
    }
  }
</script>

<style>
.submit-body {
  padding: 0;
}

</style>
