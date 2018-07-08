console.log('add-todos-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
  props: ['type', 'note'],
        template: `<section >
                        <h1>This is ADD todos cmp</h1>
                        <ul class="todos-list clean-list flex flex-wrap space-between">
                            <li class="todo flex align-center" v-for="(todo, idx) in todos" :key="idx">
                                <input v-model="todo" @input="updateTodo($event,idx)"></input>
                            </li>
                        </ul>
                        <button class="btn btn-add-todo" @click="onAddTodo">+</button>
                        <input v-if="isAddTodo" type="text" v-model="addTodo">
                    </section>
    `,
    data() {
        return {
            todos: this.note.data.todos,
            addTodo: null,
            isAddTodo: false,
        }
    },
    created() {
    },
    components: {
    },
    methods: {
        updateTodo(ev, todoIdx) {
			this.todos[todoIdx] = ev.target.value;
        },
        onAddTodo() {
            this.isAddTodo = true;
            this.todos.push(this.addTodo);

            console.log('this.todos in ADD.todo', this.todos);
        }
    }
}
