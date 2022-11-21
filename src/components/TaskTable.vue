<template>
  <div class="TTable">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Priority</th>
          <th>Is Complete</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="task.id" v-for="task in tasks">
          <TaskObject
            :task="task"
            :id="task.id"
            @editClickOrigin="editClick"
            @deleteClickOrigin="deleteClick"
            @updateIsCompleteOrigin="updateIsComplete"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskObject from "./TaskObject.vue";

export default defineComponent({
  name: "TaskTable",
  props: {
    tasks: Array,
  },
  components: {
    TaskObject,
  },
  methods: {
    editClick(id) {
      console.log("Tasktable editClick");
      this.$emit("editClick", id);
    },
    deleteClick(id) {
      console.log("TTable delclick");
      this.$emit("deleteClick", id);
    },
    updateIsComplete(id) {
      console.log("updateIsComplete");
      this.$emit("updateIsComplete", id);
    },
  },
});
</script>

<style scoped>
th {
  text-align: center;
}
button {
  display: inline;
  width: 25%;
}
</style>
