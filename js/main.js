const app = new Vue({
    el: '#root',

    data: {
        todos: [
            {text: 'Fare la spesa', completed: false,},
            {text: 'Seguire la lezione', completed: false,},
            {text: 'Punchare Checco', completed: false,},
        ],
        newTask: '',
    },

    methods: {
        // Add a new task
        addTask() {
            // Validation
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
    },
});