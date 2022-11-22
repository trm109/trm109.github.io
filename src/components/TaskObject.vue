<template>
  <td>{{ task.title }}</td>
  <td>{{ task.description }}</td>
  <td>{{ task.deadline }}</td>
  <td>
    {{ task.priority == 1 ? "low" : task.priority == 2 ? "med" : "high" }}
  </td>
  <td>
    {{ task.isComplete }}
    <input
      type="checkbox"
      id="isCompelete"
      name="isComplete"
      :checked="task.isComplete"
      @change="updateIsComplete"
    />
  </td>
  <!-- Convert to checkbox. -->
  <td style="display: block">
    <button v-show="!this.task.isComplete" class="btn btn-primary" @click="editClick">Update</button>
    <button class="btn btn-danger" @click="deleteClick">Delete</button>
  </td>
</template>

<script>
export default {
  name: "TaskObject",
  props: {
    task: Object,
    id: Number,
  },
  methods: {
    editClick() {
      console.log("Object editClick");
      this.$emit("editClickOrigin", this.id);
    },
    deleteClick() {
      console.log("Tobject delclick");
      this.$emit("deleteClickOrigin", this.id);
    },
    updateIsComplete() {
      console.log("updateIsComplete");
      this.$emit("updateIsCompleteOrigin", this.task);
    },
  },
};
</script>

<style scoped>
td {
  outline: auto;
  outline-color: red;
}
</style>
