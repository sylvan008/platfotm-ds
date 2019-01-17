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

          <!-- File upload form -->
          <b-tab
            :title="$t('submitModal.ml.title')"
            active>
            <b-form>

              <b-form-group>
                <ds-file-input
                  v-model="dsFile"
                  :upload-icon="uploadForm.uploadIcon"
                  :placeholder="$t('submitModal.ml.placeholder.load')"/>
              </b-form-group>

              <b-form-group>
                <b-input
                  v-model="uploadForm.comment"
                  :placeholder="$t('submitModal.ml.placeholder.comment')"/>
              </b-form-group>

              <b-btn>{{ $t('submitModal.btns.submit') }}</b-btn>

            </b-form>
            Selected file: {{ dsFile && dsFile.name }}<br>
            File size: {{ uploadForm.file && uploadForm.file.type }}
          </b-tab>

          <!-- Form to send links -->
          <b-tab :title="$t('submitModal.prototype.title')">
            <b-form-group>
              <b-input
                v-model="prototypeForm.name"
                :placeholder="$t('submitModal.prototype.placeholder.name')"/>
            </b-form-group>
            <b-form-group>
              <b-input
                v-model="prototypeForm.description"
                :placeholder="$t('submitModal.prototype.placeholder.description')"/>
            </b-form-group>
            <b-form-group>
              <b-input
                v-model="prototypeForm.link"
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
  import DsFileInput from './form/DsFileInput';

  export default {
    name: "DsSubmitModal",
    components: {
      DsFileInput
    },
    props: {
      idModal: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        uploadForm: {
          file: null,
          comment: '',
          uploadIcon: 'fa-upload'
        },
        prototypeForm: {
          name: '',
          description: '',
          link:''
        },
        dsFile: null
      }
    },
    computed: {
      fileUploadIndicateClasses() {
        return {
          uploadIndicate: true,

        }
      }
    },
    methods: {
      async getSignedRequest(file){
        try {

          const validateFile = await this.$axios({
            method: 'get',
            url: '/sign_s3',
            params: {
              'file_name': file.name,
              'file_type': file.type
            },
            withCredentials: true,
            validateStatus(status) {
              return status === 200
            }
          });

          this.uploadFile(file, validateFile.data);

        } catch (error) {
          console.log(error);
          alert("Невозможно проверить файл. Пожалуйста, повторите попытку.")
        }


      },
      async uploadFile(file, s3Data) {
        const postData = new FormData();
        for (let key in s3Data.fields) {
          if (s3Data.fields.hasOwnProperty(key)) {
            postData.append(key, s3Data.fields[key])
          }
        }
        postData.append('file', file);

        await this.$axios({
          method: 'post',
          url: s3Data.url,
          data: postData,
          onUploadProgress(progressEvent) {

          }
        })
      }
    }
  }
</script>

<style>


</style>
