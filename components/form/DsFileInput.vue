<template>
  <div class="custom-file">
    <input
      id="customFile"
      type="file"
      class="custom-file-input"
      @change="onFileChange"
      @focusin="focusHandler"
      @focusout="focusHandler" >
    <label
      class="custom-file-label"
      for="customFile">
      {{ selectLabel }}
    </label>
    <span class="upload-icon">
      <i
        v-if="!uploadStart"
        :class="['fa', selectUploadIcon]" />
      <template v-else> {{ progressUpload + '%' }} </template>
    </span>
  </div>
</template>

<script>
  export default {
    name: "DsFileInput",
    props: {
      placeholder: {
        type: String,
        default: undefined
      },
      multiple: {
        type: Boolean,
        default: false
      },
      uploadIconStart: {
        type: String,
        default: 'fa-upload'
      },
      uploadIconEnd: {
        type: String,
        default: 'fa-check'
      },
      uploadStart: {
        type: Boolean,
        default: false
      },
      progressUpload: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        selectedFile: null,
        dragging: false,
        hasFocus: false
      }
    },
    computed: {
      selectLabel () {
        // No file choosen
        if (!this.selectedFile || this.selectedFile.length === 0) {
          return this.placeholder
        }

        // Multiple files
        if (this.multiple) {
          if (this.selectedFile.length === 1) {
            return this.selectedFile[0].name
          }
          return this.selectedFile.map(file => file.name).join(', ')
        }

        // Single file
        return this.selectedFile.name
      },
      selectUploadIcon() {
        if (this.progressUpload === 0) {
          return this.uploadIconStart
        }
        if (this.progressUpload === 100) {
          return this.uploadIconEnd
        }
      }
    },
    watch: {
      selectedFile (newVal, oldVal) {
        if (newVal === oldVal) {
          return
        }
        if (!newVal && this.multiple) {
          this.$emit('input', [])
        } else {
          this.$emit('input', newVal)
        }
      }
    },
    methods: {
      focusHandler(evt) {
        // Boostrap v4.beta doesn't have focus styling for custom file input
        // Firefox has a borked '[type=file]:focus ~ sibling' selector issue,
        // So we add a 'focus' class to get around these "bugs"
        if (this.plain || evt.type === 'focusout') {
          this.hasFocus = false
        } else {
          // Add focus styling for custom file input
          this.hasFocus = true
        }
      },
      reset() {
        try {
          // Wrapped in try in case IE < 11 craps out
          this.$refs.input.value = ''
        } catch (e) {
        }
        // IE < 11 doesn't support setting input.value to '' or null
        // So we use this little extra hack to reset the value, just in case
        // This also appears to work on modern browsers as well.
        this.$refs.input.type = '';
        this.$refs.input.type = 'file';
        this.selectedFile = this.multiple ? [] : null
      },
      onFileChange(evt) {
        // Always emit original event
        this.$emit('change', evt);
        // Check if special `items` prop is available on event (drop mode)
        // Can be disabled by setting no-traverse
        const items = evt.dataTransfer && evt.dataTransfer.items;
        if (items && !this.noTraverse) {
          const queue = [];
          for (let i = 0; i < items.length; i++) {
            const item = items[ i ].webkitGetAsEntry();
            if (item) {
              queue.push(this.traverseFileTree(item))
            }
          }
          Promise.all(queue).then(filesArr => {
            this.setFiles(arrayFrom(filesArr))
          });
          return
        }
        // Normal handling
        this.setFiles(evt.target.files || evt.dataTransfer.files)
      },
      setFiles(files) {
        if (!files) {
          this.selectedFile = null;
          return
        }
        if (!this.multiple) {
          this.selectedFile = files[ 0 ];
          return
        }
        // Convert files to array
        const filesArray = [];
        for (let i = 0; i < files.length; i++) {
          if (files[ i ].type.match(this.accept)) {
            filesArray.push(files[ i ])
          }
        }
        this.selectedFile = filesArray
      }
    }
  }
</script>

<style scoped>
  .upload-icon {
    position: absolute;
    right: 1rem;
    top: -0.3rem;
    z-index: 1;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: white;
    background-color: rebeccapurple;
    /*background-color: green;*/
    text-align: center;
    line-height: 3rem;
  }

  .custom-file-label {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
  }

  .custom-file-label:after {
    content: none;
  }
</style>
