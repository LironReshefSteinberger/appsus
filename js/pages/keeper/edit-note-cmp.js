console.log('-edit-txt-type-cmp');

import keeperService from '../../services/keeper-service.js'
import eventBus, {SAVE_NOTE_MSG} from '../../services/event-bus-service.js'

export default {
    template: `<section v-if="note">
                    <input ref="updatedInput" type="text" v-model="note.title">
                    <div> let's edit</div>
                    <!-- if there is txt => true -->
                    <div v-if="txt">
                        <textarea ref="updatedTxt" v-model="note.data.txt"></textarea>
                        <!-- <textarea ref="updatedTxt" v-model="note.data.txt" @input="changeTxt"></textarea> -->
                    </div>
                    <!-- TODO:if there is url => true -->

                    <!-- TODO:if there is todos => true -->

                    <button @click="saveNote">Save</button>
                    <!-- <button ref="myBtn" @click="saveNote">Save</button> -->
                </section>
                `,
    data() {
        return {
            note: null,
            url: null,
            txt: null,
            todos: null,
            editedNote: keeperService.createEmptyNote(),
            // newTitle: null,
            // newTxt: null,
            // newUrl: null,
            // newTodos: null
        }
    },
    created() {
        keeperService.getNoteById(this.$route.params.noteId)
        .then(note => {
            // to edit a copy of the obj, so if we want to cancel edit
            this.note =  JSON.parse(JSON.stringify(note));
            this.url = this.note.data.url;
            this.txt = this.note.data.txt;
            this.todos - this.note.data.todos;
            // console.log('note in edit', this.note);
            // console.log('note in edit', this.note.type);
        })
    },
    // mounted() {
    //     // console.log('this.$refs', this.$refs);
    //     console.log('updatedInput mounted', this.$refs.updatedInput);
    // },
    methods: {
        saveNote() {
            //TODO: for img and todos also
            // if (!this.newTitle) this.note.title = 
            // console.log('this.editedNote', this.editedNote);
            this.editedNote.id = this.note.id;
            this.editedNote.type = this.note.type;
            this.editedNote.title = this.note.title;

            // console.log('changeTitle', this.note.title);
            if (this.note.type === 'txtType') this.editedNote.data.txt = this.note.data.txt;
            else if (this.note.type === 'imgType') this.editedNote.data.url = this.note.data.url;
            console.log('this.editedNote', this.editedNote);
            keeperService.saveNote(this.editedNote)
                .then(savedNote => {
                    console.log(`Note ${savedNote.id} succesfuly saved`);
                    eventBus.$emit(SAVE_NOTE_MSG, 'Your note was saved!')
                    this.$router.push(`/keeper-app/${savedNote.id}`)
                })

            // console.log('this.editedNote.data.txt', this.editedNote.data.txt);
            //TODO: for todos

        },
        // changeTitle () {
        //     console.log('changeTitle', this.note.title);
        //     this.newTitle = this.note.title;
        //     // console.log('newTitle', this.newTitle);

        // },
        // changeTxt() {
        //     // console.log('changeTitle', this.note.data.txt);
        //     this.newTxt = this.note.data.txt;
        //     // console.log('newTitle', this.newTxt);
        // }
    },
    // watch : {
    //     show() {
    //         console.log('Show Changed!');
    //     },
    // }
}