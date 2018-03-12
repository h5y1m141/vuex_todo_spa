<template>
<div>
  <div class="page-NoteEdit-body">
    <textarea v-model="note.body" />
  </div>
  <div class="page-NoteEdit-preview">
    <div class="NoteBody" v-html="compiledHTML"></div>
  </div>
</div>
</template>
<script>
import marked from 'marked'
export default {
  name: 'notebody',
  props: {
    note: Object
  },
  computed: {
    compiledHTML () {
      if (this.note.body !== undefined) {
        return marked(this.note.body)
      }
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

.page-NoteEdit-buttons > .Button {
  margin: 0 5px;
}

.page-NoteEdit-body {
  border-bottom: 1px solid #CCC;
}

.page-NoteEdit-body textarea {
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 10px;
  resize: vertical;
  height: 260px;
  max-height: calc(100vh - 45px - 50px);
  display: block;
}

.page-NoteEdit-preview {
  flex: 1 1 auto;
  overflow: auto;
  padding: 20px 10px 10px 10px;
  position: relative;
}

.page-NoteEdit-preview:before {
  content: 'Preview';
  display: inline-block;
  background-color: #F5F5F5;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  font-size: 12px;
  border-right: 1px solid #CCC;
  border-bottom: 1px solid #CCC;
}
.NoteBody pre {
  border: 1px solid #CCC;
  padding: 10px;
  background: #FAFAFA;
  margin: 10px 0;
}

.NoteBody blockquote {
  border-left: 5px solid #CCC;
  padding: 10px 10px 10px 20px;
}

.NoteBody blockquote > *:first-child {
  margin-top: 0;
}

.NoteBody blockquote > *:last-child {
  margin-bottom: 0;
}
</style>
