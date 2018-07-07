// console.log('todos-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section v-if="note">
                    <!-- <h1>This is txt cmp, note type is {{note.type}}</h1> -->
                    <ul class="notes-list clean-list flex flex-wrap">
                    <li class="note flex column align-center space-between" v-for="(todo, idx) in todos" :key="idx">
                        {{todo}}
                        <router-link class="btn btn-edit" tag="button" :to="'/keeper-app/edit/' + note.id">Edit</router-link>
                        <button class="btn btn-delete" @click="removeTodo(note.id, idx)">X</button> 

                        </li>
                    <!-- <button class="btn btn-edit" @click="editNote">Edit</button>
                    <button class="btn btn-delete">Delete</button> -->
                    <router-link class="btn btn-edit" tag="button" :to="'/keeper-app/edit/' + note.id">Edit</router-link>
                        <button class="btn btn-delete" @click="removeNote">{{deleteLabel}}</button> 
                    </ul>
                </section>
                `,
    data() {
        return {
            deleteLabel : 'Delete',
            todos: this.note.data.todos,
        }
    },
    created() {
        console.log('note.data.todos ',this.note.data.todos);
    },
    methods: {
        removeNote() {
            this.deleteLabel ='Deleting...';
            keeperService.removeNote(this.note.id)
                .then(() => {
                    console.log('note in edit-delete ', this.note);
                    this.deleteLabel = 'Delete'
                })
                    // console.log('note in edit-delete', this.note.type);
               
                .catch(err=>{
					console.log('Failed to delete');
					this.deleteLabel = 'Delete'
				})
            this.$router.push(`/keeper-app`) //???? moving to white page
        },
        removeTodo(noteId, todoIdx) {
            console.log('TODO -noteId) ', noteId);
            console.log('TODO -todoIdx) ', todoIdx);
            keeperService.removeTodo(noteId, todoIdx)
            .then(() => {
                console.log('TODO -delete ', this.note);
                this.deleteLabel = 'Delete'
            })
            //     // console.log('note in edit-delete', this.note.type);
           
            // .catch(err=>{
            //     console.log('Failed to delete todo');
            //     this.deleteLabel = 'Delete'
            // })
        }

    }
    
}