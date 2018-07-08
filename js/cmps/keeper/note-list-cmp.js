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
            <section v-if="notes">>
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
                        <!-- <router-link :to="'/keeper-app/'+note.id"> -->
                            <component :is="note.type" :note="note"></component>
                        <!-- </router-link> -->
                        <!-- <router-link class="btn btn-edit" tag="button" :to="'/keeper-app/edit/' + note.id">Edit</router-link>
                        <button class="btn btn-delete" @click="removeNote">{{deleteLabel}}</button>  -->
                        <router-link class="btn btn-edit-note" tag="button" :to="'/keeper-app/edit/' + note.id"><i class="fa fa-edit"></i></router-link>
                        <button class="btn btn-delete-note" @click="removeNote(note.id)"><i class="fa fa-trash"></i></button> 
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
        },
        removeNote(noteId) {
            this.deleteLabel ='Deleting...';
            keeperService.removeNote(noteId)
                .then(() => {
                    // console.log('note in edit-delete ', this.note);
                    this.deleteLabel = 'Delete'
                })
                    // console.log('note in edit-delete', this.note.type);
               
                .catch(err=>{
					console.log('Failed to delete');
					this.deleteLabel = 'Delete'
				})
            this.$router.push(`/keeper-app`) //???? moving to white page
        },
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


