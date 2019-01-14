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
                <b-form-file
                  v-model="uploadForm.file"
                  :state="Boolean(uploadForm.file)"
                  :placeholder="$t('submitModal.ml.placeholder.load')"/>
                <span :class="['upload-icon', 'fa', uploadForm.uploadIcon]" />
              </b-form-group>
              <b-form-group>
                <b-input
                  v-model="uploadForm.comment"
                  :placeholder="$t('submitModal.ml.placeholder.comment')"/>
              </b-form-group>
              <b-btn>{{ $t('submitModal.btns.submit') }}</b-btn>
            </b-form>
            Selected file: {{ uploadForm.file && uploadForm.file.name }}<br>
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
        uploadForm: {
          file: null,
          comment: '',
          uploadIcon: 'fa-upload'
        },
        prototypeForm: {
          name: '',
          description: '',
          link:''
        }
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
.upload-icon {
  width: 40px;
  height: 40px;
  font-size: 15px;
  border-radius: 50%;
  color: white;
  background-color: green;
  text-align: center;
  vertical-align: center;
  padding: 0;
}

</style>
