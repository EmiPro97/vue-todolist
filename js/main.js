const app = new Vue({
    el: '#root',

    data: {
        todos: [
            {text: 'Fare la spesa', completed: false, visibility: false,},
            {text: 'Seguire la lezione', completed: false, visibility: false,},
            {text: 'Andare a pranzo fuori', completed: false, visibility: false,},
        ],
        newTask: '',
        editTask: {
            text: '',
            // index: null,
        },
        prevIndex: 0,
    },

    methods: {
        // Add a new task
        addTask() {
            // Validation and push the new task
            if (this.newTask != '' && this.newTask != null) {
                this.todos.push({text: this.newTask, completed: false});
                // Reset
                this.newTask = '';
                this.$refs.addInput.focus();
            }
        },
        // Remove selected task
        removeTask(index) {
            this.todos.splice(index, 1);
        },
        // Update completed key status
        updateCompletedKey(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },
        // Enter in edit mode
        showEdit(index) {
            if (this.prevIndex != index) {
                this.todos[this.prevIndex].visibility = false;
            }
            this.editTask.text = this.todos[index].text;
            this.todos[index].visibility = !this.todos[index].visibility;
            // this.editTask.index = index;
            setTimeout(() => {
                this.$refs.editFocus[index].focus();
            }, 100);
            this.prevIndex = index;
        },
        // Update tasks in edit mode
        updateTask(index) {
            // Validation and update the selected task
            if (this.editTask.text != '' && this.editTask != null) {
                this.todos[/*this.editTask.*/index].text = this.editTask.text;
            }
            // Reset
            this.editTask.text = '';
            this.editTask.index = null;
            this.todos[index].visibility = false;
        },
    },
});