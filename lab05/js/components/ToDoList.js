const ToDoList = {
  name: 'ToDoList',
  data() {
    return {
      newTaskText: '',
      tasks: [],
      nextId: 1
    };
  },
  methods: {
    addTask() {
      const text = this.newTaskText.trim();
      if (text === '') {
        return;
      }
      const task = {
        id: this.nextId,
        text: text,
        highPriority: false
      };
      this.nextId = this.nextId + 1;
      this.tasks.unshift(task);
      this.newTaskText = '';
    },
    deleteTask(id) {
      const next = [];
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id !== id) {
          next.push(this.tasks[i]);
        }
      }
      this.tasks = next;
    },
    togglePriority(task) {
      task.highPriority = !task.highPriority;
    },
    prioritySuffix(task) {
      if (task.highPriority) {
        return '(High Priority)';
      }
      return '(Low Priority)';
    },
    priorityButtonText(task) {
      if (task.highPriority) {
        return 'Mark as Low Priority';
      }
      return 'Mark as High Priority';
    },
    priorityButtonClass(task) {
      if (task.highPriority) {
        return 'btn btn-sm btn-warning';
      }
      return 'btn btn-sm btn-success';
    },
    priorityTextClass(task) {
      if (task.highPriority) {
        return 'fw-bold text-warning';
      }
      return 'fw-bold text-success';
    }
  },
  template: `
    <div class="border rounded p-3">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="newTaskText"
          placeholder="New task"
          @keyup.enter="addTask"
        />
        <button class="btn btn-primary" type="button" @click="addTask">Add</button>
      </div>
      <ul class="list-group">
        <li
          v-for="task in tasks"
          :key="task.id"
          class="list-group-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2"
        >
          <span>
            {{ task.text }}
            <span :class="priorityTextClass(task)">{{ prioritySuffix(task) }}</span>
          </span>
          <div class="d-flex gap-2">
            <button type="button" :class="priorityButtonClass(task)" @click="togglePriority(task)">
              {{ priorityButtonText(task) }}
            </button>
            <button type="button" class="btn btn-sm btn-danger" @click="deleteTask(task.id)">Delete</button>
          </div>
        </li>
      </ul>
      <p v-if="tasks.length === 0" class="text-muted mb-0 small">No tasks yet. Add one above.</p>
    </div>
  `
};
