<template>
  <div>
    <div v-html="compiledHTML"></div>
  </div>
</template>
<script>
import marked from 'marked'
export default {
  name: 'notebody',
  props: {
    body: String
  },
  computed: {
    compiledHTML () {
      if (this.body !== undefined) {
        return marked(this.body)
      }
    }
  }
}
</script>
