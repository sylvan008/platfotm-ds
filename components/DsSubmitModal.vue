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
                  v-model="uploadForm.file"
                  :placeholder="$t('submitModal.ml.placeholder.load')"
                  :upload-start="uploadForm.uploadStart"
                  :progress-upload="uploadForm.progressCurrent"/>
              </b-form-group>

              <b-form-group>
                <b-input
                  v-model="uploadForm.comment"
                  :placeholder="$t('submitModal.ml.placeholder.comment')"/>
              </b-form-group>

              <b-btn :disabled="readyToUpload || uploadForm.uploadStart">
                {{ $t('submitModal.btns.submit') }}
              </b-btn>

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
          uploadStart: false,
          progressCurrent: 0
        },
        prototypeForm: {
          name: '',
          description: '',
          link:''
        }
      }
    },
    computed: {
      readyToUpload() {
        return (this.uploadForm.file === null ||
          (this.uploadForm.comment === '' || this.uploadForm.comment.length < 3))
      }
    },
    methods: {
      async getSignedRequest(file) {
        let validateFile;

        try {
          // Sends a request to validate file
          validateFile = await this.$axios({
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
        } catch (error) {
          console.log(error);
          alert("Невозможно проверить файл. Пожалуйста, повторите попытку.")
        }
        // Start upload file
        this.uploadFile(file, validateFile.data);
      },
      async uploadFile(file, s3Data) {
        // Added the generate file name and file
        const postData = new FormData();
        for (let key in s3Data.fields) {
          if (s3Data.fields.hasOwnProperty(key)) {
            postData.append(key, s3Data.fields[key])
          }
        }
        postData.append('file', file);

        try {
          await this.$axios({
            method: 'post',
            url: s3Data.url,
            data: postData,
            onUploadProgress(progressEvent) {
              if (this.uploadForm.readyToUpload) {
                this.uploadForm.readyToUpload = false;
                this.uploadForm.uploadStart = true;
              }

              this.uploadForm.progressCurrent = Math.round(100 * progressEvent.loaded / progressEvent.total);
            },
            validateStatus(status) {
              return status === 200 || status === 204
            }
          });
        } catch (error) {
          console.log(error);
          alert('Невозможно загрузить файл. Пожалуйста, повторите попытку.');
        }

        this.uploadFile.uploadStart = false;
      }
    }
  }
</script>

<style>


</style>
