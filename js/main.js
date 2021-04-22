const app = new Vue({
    el: '#root',

    data: {
        todos: [
            {text: 'Fare la spesa', completed: false, visibility: false,},
            {text: 'Seguire la lezione', completed: false, visibility: false,},
            {text: 'Punchare Checco', completed: false, visibility: false,},
        ],
        newTask: '',
        editTask: {
            text: '',
            index: null,
        },
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
            this.editTask.text = this.todos[index].text;
            this.editTask.index = index;
            this.todos[index].visibility = true;
        },

        // Update tasks in edit mode
        updateTask(index) {
            // Validation and update the selected task
            if (this.editTask.text != '' && this.editTask != null) {
                this.todos[this.editTask.index].text = this.editTask.text;
            }

            // Reset
            this.editTask.text = '';
            this.editTask.index = null;
            this.todos[index].visibility = false;
        },


    },
});