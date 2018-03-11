<template>
  <div>
    <div class="NoteList">
      <ul v-for="note in notes" :key="note.id + '-note'">
        <li class="NoteList-item" @click="select(note)">
          <router-link :to="{ path: `/notes/${note.id}/edit` }">
            <span class="NoteList-title">{{ note.title }}</span>
            <span class="NoteList-updated">{{ note.updated }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notelist',
  props: {
    notes: Array
  },
  methods: {
    select (note) {
      this.$store.dispatch('selectNote', note)
    }
  }
}
</script>
<style>
.NoteList {
}

.NoteList ul {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #CCC;
}

.NoteList li {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #CCC;
}

.NoteList li > a {
  padding: 10px;
  display: block;
  color: #333;
  font-size: 15px;
  text-decoration: none;
  border-left: 5px solid transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.NoteList li > a:hover {
  border-left-color: #2673E8;
  background-color: #F5F5F5;
}

.NoteList li.is-selected > a {
  color: #FFF;
  background-color: #2673E8;
}

.NoteList-updated {
  display: block;
  font-size: 11px;
  margin-top: 10px;
  color: #999;
}

.NoteList li.is-selected > a .NoteList-updated {
  color: #FFF;
}

</style>
