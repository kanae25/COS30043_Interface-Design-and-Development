import { ref } from "../../assets/js/lib/vue.esm-browser.prod.js";

export default {
  name: "ToDoList",
  setup() {
    const newTask = ref("");
    const tasks = ref([
      { id: 1, text: "Read all job details", highPriority: false },
      { id: 2, text: "Prepare portfolio links", highPriority: true },
    ]);

    const addTask = () => {
      const value = newTask.value.trim();
      if (!value) {
        return;
      }

      tasks.value.unshift({
        id: Date.now(),
        text: value,
        highPriority: false,
      });
      newTask.value = "";
    };

    const deleteTask = (id) => {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    };

    const togglePriority = (task) => {
      task.highPriority = !task.highPriority;
    };

    const formatTaskLabel = (task) =>
      `${task.text} (${task.highPriority ? "High Priority" : "Low Priority"})`;

    const toggleButtonLabel = (task) =>
      task.highPriority ? "Mark as Low Priority" : "Mark as High Priority";

    return {
      newTask,
      tasks,
      addTask,
      deleteTask,
      togglePriority,
      formatTaskLabel,
      toggleButtonLabel,
    };
  },
  template: `
    <section class="card border-0 shadow-sm">
      <div class="card-body">
        <h4 class="mb-3">To-Do List</h4>

        <div class="input-group mb-3">
          <input
            v-model="newTask"
            @keyup.enter="addTask"
            type="text"
            class="form-control"
            placeholder="Enter a new task"
          />
          <button @click="addTask" class="btn btn-primary" type="button">
            Add
          </button>
        </div>

        <p v-if="tasks.length === 0" class="text-muted mb-0">No tasks yet.</p>

        <ul v-else class="list-unstyled mb-0 d-grid gap-2">
          <li
            v-for="task in tasks"
            :key="task.id"
            class="todo-item p-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2"
          >
            <span :class="task.highPriority ? 'todo-priority-high' : 'todo-priority-low'">
              {{ formatTaskLabel(task) }}
            </span>
            <div class="d-flex gap-2">
              <button
                @click="togglePriority(task)"
                class="btn btn-sm btn-outline-primary"
                type="button"
              >
                {{ toggleButtonLabel(task) }}
              </button>
              <button
                @click="deleteTask(task.id)"
                class="btn btn-sm btn-outline-danger"
                type="button"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `,
};
