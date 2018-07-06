// console.log('keeper-cmp');

import keeperService from '../../services/keeper-service.js'
import imgType from '../../cmps/keeper/img-type-cmp.js'
import txtType from '../../cmps/keeper/txt-type-cmp.js'
// import addNote from '../../pages/keeper/add-note-cmp.js'
// import previewNote from '../../pages/keeper/preview-note-cmp.js'

export default {
    template: `
            <section>
                <!-- <note-filter v-on:filtered="setFilter"></note-filter> 
                <note-list :notes="booksToShow" ></book-list> -->
                <!-- <div>KEEPER COMP</div> -->
                <div class="add-container">
                <!-- <div class="add-container" v-if="selectedType"> -->
                    <router-link class="add" tag="button" to="/keeper-app/edit">Add new note
                        <div class="radio-btns-container flex">
                            <button class="btn btn-txt-selected" @click="selectedTxtType" :type="selectedType">Text</button>
                            <button class="btn btn-img-selected" @click="selectedImgType" :type="selectedType">Image</button>
                            <button class="btn btn-todos-selected" @click="selectedTodosType" :type="selectedType">Todos</button>
                        </div>
                    </router-link>
                </div>
            
                <ul class="notes-list clean-list flex flex-wrap" v-if="notes">
                    <li class="note flex column align-center space-between" v-for="(note, idx) in notes" :key="note.id" :style="{'background-color':note.bgColor}">
                        <!-- {{note.id}} -->
                        <!-- {{note.type}} -->
                        <h2 class="title">{{note.title}}</h2>
                        <router-link :to="'/keeper-app/'+note.id">
                            <component :is="note.type" :note="note"></component>
                        </router-link>
                        <router-link class="btn btn-edit" tag="button" :to="'/keeper-app/edit/' + note.id">Edit</router-link>
                        <button class="btn btn-delete" @click="removeNote">{{deleteLabel}}</button> 
                    </li>
                </ul>

            </section>
            `,
    data() {
        return {
            notes: null,  
            selectedType: null, //TODO: FOR EMPTY NOTE TO ADD DATA
            deleteLabel : 'Delete',
            bgColor:null,
 
        }
    },
    created() {
        keeperService.query()
            .then(notes => {
                console.log('Parent notes', notes);
                this.notes = notes;
            })
    },
    methods: {
        selectedTxtType() {
            this.selectedType = 'txtType';
            console.log('this.selectedType txt', this.selectedType);
        },
        selectedImgType() {
            this.selectedType = 'imgType';
            console.log('this.selectedType img', this.selectedType);
        },
        selectedTodosType() {
            this.selectedType = 'todosType';
            console.log('this.selectedType todos', this.selectedType);
        },
        removeNote() {
            // this.deleteLabel ='Deleting...';
            // console.log('$route.', this.$route.params.noteId);
            // keeperService.removeNote(this.$route.params.noteId)
            //     .then(note => {
            //         this.note = note;
            //         console.log('note in edit-delete ', this.note);
            //         // console.log('note in edit-delete', this.note.type);
            //     })
        }
    },
    components: {
        imgType,
        txtType,
        // addNote,
        // previewNote
    }
}