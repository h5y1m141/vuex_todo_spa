<template>
  <button class="button-main" @click="onClick">
    {{ buttonLabel }}
  </button>
</template>
<script>
export default {
  name: 'button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    buttonLabel: String
  }
}
</script>
