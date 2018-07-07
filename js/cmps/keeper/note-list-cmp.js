// console.log('note-list-cmp');

import keeperService from '../../services/keeper-service.js'
import imgType from '../../cmps/keeper/img-type-cmp.js'
import txtType from '../../cmps/keeper/txt-type-cmp.js'
import todosType from '../../cmps/keeper/todos-type-cmp.js'

import addNote from '../../cmps/keeper/add-note-cmp.js'
// import previewNote from '../../pages/keeper/preview-note-cmp.js'
import editNote from '../../pages/keeper/edit-note-cmp.js'

export default {
    props: ['notes'],
    template: `
            <section>
                <!-- <note-filter v-on:filtered="setFilter"></note-filter> 
                <note-list :notes="booksToShow" ></book-list> -->
                <!-- <div>KEEPER COMP</div> -->
                <add-note></add-note>
            
                <ul class="notes-list clean-list flex flex-wrap" v-if="notes">
                    <li class="note flex column space-between" v-for="(note, idx) in notes" :key="note.id" :style="{'background-color':note.bgColor}">
                        <!-- {{note.id}} -->
                        <!-- {{note.type}} -->
                        <div class="note-title">
                            <h2>{{note.title}}</h2>
                        </div>
                        <router-link :to="'/keeper-app/'+note.id">
                            <component :is="note.type" :note="note"></component>
                        </router-link>
                        <!-- <router-link class="btn btn-edit" tag="button" :to="'/keeper-app/edit/' + note.id">Edit</router-link> -->
                        <!-- <button class="btn btn-delete" @click="removeNote">{{deleteLabel}}</button>  -->
                        <button class="btn btn-pin" @click="pinNote(note.id)"><i class="fa fa-map-pin"></i></button>
                    </li>
                </ul>

            </section>
            `,
    data() {
        return {
            // deleteLabel : 'Delete',
            bgColor:null,
 
        }
    },
    methods: {

        removeNote() {
        //     this.deleteLabel ='Deleting...';
        //     console.log('$route.', this.$route.params.noteId);
        //     keeperService.removeNote(this.$route.params.noteId)
        //         .then(note => {
        //             this.note = note;
        //             console.log('note in edit-delete ', this.note);
        //             // console.log('note in edit-delete', this.note.type);
        //         })
        },
        pinNote(noteId) {
            keeperService.pinNote(noteId)
                .then(() => {
                    console.log('note was pinned ');
                    // console.log('note in edit-delete', this.note.type);
                })
        }
    },
    components: {
        imgType,
        txtType,
        todosType,
        addNote,
        // previewNote,
        editNote
    }
}


