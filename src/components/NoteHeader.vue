<template>
<div class="page-NoteEdit-header">
  <input aria-label="タイトル" ref="title" type="text" :value="note.title" data-page-title />
    <div class="page-NoteEdit-buttons">
    </div>
</div>
</template>

<script>
export default {
  name: 'noteheader',
  props: {
    note: Object
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
