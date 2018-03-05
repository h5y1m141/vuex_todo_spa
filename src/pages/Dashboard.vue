<template>
  <div class="page-Dashboard">
    <div class="page-Dashboard-list">
      <div class="page-Dashboard-listHeader">
        <ButtonElement :button-label="label" :onClick="alertCheck" />
      </div>
      <div role="navigation">
        <NoteList :notes="notes"></NoteList>
      </div>
    </div>
    <div v-show="currentNote.body" class="page-Dashboard-main" role="form">
      <NoteBody :body="currentNote.body"></NoteBody>
    </div>
  </div>
</template>
<script>
import ButtonElement from '@/components/ButtonElement'
import NoteList from '@/components/NoteList'
import NoteBody from '@/components/NoteBody'
import store from '@/stores/main'

export default {
  name: 'dashboard',
  store: store,
  components: {
    ButtonElement,
    NoteList,
    NoteBody
  },
  methods: {
    alertCheck () {
      this.$store.dispatch('addToNote', this.label)
    }
  },
  data: function () {
    return {
      label: 'ノート作成'
    }
  },
  computed: {
    notes () {
      return this.$store.state.notes
    },
    currentNote () {
      return this.$store.state.note
    }
  }
}
</script>
<style>
.page-Dashboard {
  display: flex;
}

.page-Dashboard-list {
  width: 260px;
  height: calc(100vh - 45px);
  border-right: 1px solid #CCC;
  overflow: auto;
}

.page-Dashboard-listHeader {
  padding: 10px;
  height: 49px;
  box-sizing: border-box;
}

.page-Dashboard-main {
  flex: 1;
  width: 0;
}
</style>
