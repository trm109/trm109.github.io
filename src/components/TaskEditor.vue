<template>
  <form @submit="onSubmit" class="add-form">
    <div class="debug-label">
      <p>
        {{ id }}
      </p>
    </div>
    <FormInput
      label="Task Title"
      type="text"
      :value="titleValue"
      description="What is the title of your task?"
      placeholder="Task Title"
      v-model="title"
    />
    <FormInput
      label="Task Description"
      type="text"
      :value="descValue"
      description="What is the description of your task?"
      placeholder="Task Description"
      v-model="description"
    />
    <FormInput
      label="Task Deadline"
      type="date"
      :value="deadlineValue"
      description="What is the deadline of your task?"
      placeholder="Task Deadline"
      v-model="deadline"
    />
    <FormInput
      label="Task Priority"
      type="range"
      :value="rangeValue"
      step="1"
      min="1"
      max="3"
      v-model="priority"
    />
    <Button :text="editing ? 'Change' : 'Add'" @btn-click="debugPrint()" />
    <button class="modal-submit" @click="modalSubmit()">Submit</button>
  </form>
</template>
<script>
import Button from "./Button.vue";
import FormInput from "./FormInput.vue";
export default {
  created() {
    this.emitInterface();
  },
  expose: ["importFromExistingTask"],
  name: "TaskEditor",
  components: {
    Button,
    FormInput,
  },
  props: {
    editing: Boolean,
    id: Number,
  },
  data() {
    return {
      title: "",
      description: "",
      deadline: "",
      priority: "1",
      isComplete: false,
      titleValue: "",
      descValue: "",
      deadlineValue: "",
      rangeValue: 1,
      isActive: false,
    };
  },
  methods: {
    emitInterface() {
      this.$emit("interface", {
        importFromExistingTask: () => this.importFromExistingTask(),
      });
    },
    importFromExistingTask() {
      console.log("Run");
      if (this.editing == true) {
        const taskToImport = this.fetchTask(this.id);
        this.title = taskToImport.title;
      }
    },
    debugPrint() {
      console.log("TESTING");
      console.log("ID: " + this.id);
      console.log("Title: " + this.title);
      console.log("Description: " + this.description);
      console.log("Deadline: " + this.deadline);
      console.log("Priority: " + this.priority);
      console.log("isComplete: " + this.isComplete);
      console.log("Editing: " + this.editing);
    },
    modalSubmit() {
      console.log("submit");
      this.$emit("emittedSubmit", {
        id: this.id,
        title: this.title,
        description: this.description,
        deadline: this.deadline,
        priority: this.priority,
        isComplete: this.isComplete,
        editing: this.editing,
      });
    },
    async fetchTask(id) {
      const response = await fetch(`api/tasks/${id}`);
      const data = await response.json();
      return data;
    },
  },
  watch: {
    id(newVal, oldVal) {
      console.log("ID Changed");
    },
  },
};
</script>
<style scoped>
.form-control {
  outline: auto;
  display: block;
  margin: 10px;
}

input {
  display: block;
}
</style>
