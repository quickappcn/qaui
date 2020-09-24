<template>
  <div class="preview-wrap">
    <iframe class="preview"
            sandbox="allow-scripts allow-forms allow-same-origin"
            :src="url"
            frameborder="0"
    ></iframe>
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style scoped>
  .preview-wrap {
    border-radius: 25px;
    border: 1px solid #DEDEDE;
    padding: 10px 5px;
    width: 375px;
    background: #DEDEDE;
    margin: 10px auto;
  }
  .preview {
    height: 720px;
    width: 375px;
    border-radius: 30px;
  }
</style>

