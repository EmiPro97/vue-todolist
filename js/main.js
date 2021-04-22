const app = new Vue({
    el: '#root',

    data: {
        todos: [
            {text: 'Fare la spesa', completed: false,},
            {text: 'Seguire la lezione', completed: false,},
            {text: 'Punchare Checco', completed: false,},
        ],
    },

    newTask: '',

    methods: {
        // Add a new task
        addTask() {
            // Validation
            if (this.newTask != '' && this.newTask != null) {
                this.todos.push({text: this.newTask, completed: false});

                // Reset
                this.newTask = '';
            }
        },
    },
});