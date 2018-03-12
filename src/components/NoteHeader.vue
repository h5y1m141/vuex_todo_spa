<template>
<div class="page-NoteEdit-header">
  <input aria-label="タイトル" ref="title" type="text" v-model="note.title" data-page-title />
    <div class="page-NoteEdit-buttons">
      <ButtonElement :button-label="label" :onClick="save" />
    </div>
</div>
</template>

<script>
import ButtonElement from '@/components/ButtonElement'
import store from '@/stores/main'
export default {
  name: 'noteheader',
  store,
  components: {
    ButtonElement
  },
  props: {
    note: Object
  },
  data: function () {
    return {
      label: 'ノート保存'
    }
  },
  methods: {
    save () {
      this.$store.dispatch('updateNote', this.note)
    }
  }
}
</script>

<style>
.page-NoteEdit {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 45px);
  overflow: hidden;
}

.page-NoteEdit-header {
  position: relative;
  border-bottom: 1px solid #CCC;
  padding: 5px;
  height: 50px;
  box-sizing: border-box;
}

.page-NoteEdit-header > input[type="text"] {
  font-size: 24px;
  padding: 5px;
  border: none;
  font-weight: bold;
  width: calc(100% - 200px);
  outline: none;
}

.page-NoteEdit-buttons {
  position: absolute;
  right: 0;
  top: 10px;
}
</style>
