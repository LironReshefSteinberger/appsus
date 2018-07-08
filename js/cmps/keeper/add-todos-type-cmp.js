console.log('add-todos-type-cmp');

import keeperService from '../../services/keeper-service.js'
// import editNote from '../../pages/keeper/edit-note-cmp.js'

export default {
  props: ['type', 'note'],
        template: `<section >
                        <h1>This is ADD todos cmp</h1>
                        <ul class="todos-list clean-list flex flex-wrap space-between">
                            <li class="todo flex align-center" v-for="(todo, idx) in todos" :key="idx">
                                <input v-model="todo" @input="updateTodo($event,idx)"></input>
                                <!-- @change="note.bgColor = $event.target.value"/> -->
                                <!-- <div class="btns-todo-container flex">
                                    <router-link class="btn btn-edit-todo" tag="button" :to="'/keeper-app/edit/' + note.id"><i class="fa fa-edit"></i></router-link>
                                    <button class="btn btn-delete-todo" @click="removeTodo(note.id, idx)">X</button> 
                                </div> -->
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
        // console.log('this not in ADD txt type', this.note);
        // this.note.type = 'txtType';
        // console.log('this not in ADD txt this.note.type', this.note.type);
        // console.log('this not in ADD txt this.selectedType', this.type); //?????
    },
    components: {
        // editNote
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
