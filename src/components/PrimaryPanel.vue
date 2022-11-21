<template>
  <div class="PrimaryPanel">
    <div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          Panel with panel-primary class
          <Button
            class="button"
            @btn-click="openModelAdd"
            text="Add New Task"
          />

          <TaskEditorModal
            v-if="showEditorModal"
            :toggleModal="() => toggleModal()"
          >
            <h2>My Modal</h2>
            <p>Some content</p>
            <TaskEditor
              ref="taskEditor"
              :editing="editing"
              :id="editingTaskId"
              @interface="getEditorInterface"
              @emittedSubmit="modalSubmit"
              :isActive="showEditorModal"
            />
          </TaskEditorModal>
        </div>
        <div class="panel-body">
          <TaskTable
            :tasks="tasks"
            @editClick="openModalEdit"
            @deleteClick="deleteTask"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskTable from "./TaskTable.vue";
import Button from "./Button.vue";
import TaskEditorModal from "./TaskEditorModal.vue";
import TaskEditor from "./TaskEditor.vue";

export default defineComponent({
  name: "PrimaryPanel",
  editorInterface: {
    importFromExistingTask: (task) => {},
  },
  data() {
    return {
      tasks: [],
      showEditorModal: false,
      editing: false, //if not editing, then adding.
      editingTaskId: -1, //default to -1.
    };
  },
  props: {},
  components: {
    TaskTable,
    Button,
    TaskEditorModal,
    TaskEditor,
  },
  methods: {
    getEditorInterface(editorInterface) {
      this.$options.editorInterface = editorInterface;
    },
    toggleModal() {
      this.showEditorModal = !this.showEditorModal;
    },
    openModelAdd() {
      this.editing = false;
      this.editingTaskId = -1;
      this.toggleModal();
    },
    openModalEdit(id) {
      console.log("PrimaryPanel editClick");
      this.editing = true;
      this.editingTaskId = id;
      this.$options.editorInterface.importFromExistingTask(
        this.tasks.find((task) => task.id === id)
      );
      this.toggleModal();
    },
    modalSubmit(object) {
      console.log(object);
      //Determine whether to update or create.
      if (object.editing === true) {
        //safety check:
        if (object.id === -1) {
          console.log("Error: Editing task with id -1.");
          console.log(object);
        }
        //Update
      } else {
        //Create
        //Assign an id
        delete object["id"];
        this.addTask(object);
      }
    },
    async fetchTasks() {
      const response = await fetch("api/tasks");
      const data = await response.json();
      return data;
    },
    async fetchTask(id) {
      const response = await fetch(`api/tasks/${id}`);
      const data = await response.json();
      return data;
    },
    async addTask(task) {
      const response = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();

      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      console.log("PPanel delclick " + id);
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error Deleting This Task");
      }
    },
  },

  async created() {
    this.tasks = await this.fetchTasks();
  },
});
</script>
<style scoped>
.button {
  float: right;
  color: white;
}
</style>
