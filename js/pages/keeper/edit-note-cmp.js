console.log('edit-note-cmp');

import keeperService from '../../services/keeper-service.js'
// import addNote from '../../cmps/keeper/add-note-cmp.js'
import eventBus, {SAVE_NOTE_MSG} from '../../services/event-bus-service.js'
import addtxtType from '../../cmps/keeper/add-txt-type-cmp.js'
import addimgType from '../../cmps/keeper/add-img-type-cmp.js'
import addtodosType from '../../cmps/keeper/add-todos-type-cmp.js'
// import addTexttype from '../../cmps/keeper/add-txt-type-cmp.js'


export default {
    props:['type', 'noteData'],
    template: `<section v-if="note">EDIT/ADD CMP
                    <div>{{selectedType}} props in edit</div>
                    <section v-if="note">
                    <input ref="updatedInput" type="text" v-model="note.title">
                    <div> let's edit</div>
                    <!-- if there is txt => true -->
                    <!-- <addtxt-type v-if="txt"> -->
                        <!-- <textarea ref="updatedTxt" v-model="note.data.txt"></textarea> -->
                        <!-- <textarea ref="updatedTxt" v-model="note.data.txt" @input="changeTxt"></textarea> -->
                    <!-- </addtxt-type> -->
                    <!-- <add-Texttype></add-Texttype> -->
                    <!-- <add-txttype></add-txttype> -->

                    <!-- <component :is="selectedType" v-if="selectedType" :note="note"></component> -->
                    <component :is="'add'+selectedType" v-if="selectedType" :note="note"></component>

                    <!-- TODO:if there is url => true -->

                    <!-- TODO:if there is todos => true -->
                    <button  class="btn btn-color">
                        <input type="color" id="colorValue" name="color" value="#ffffff" @change="note.bgColor = $event.target.value"/>
                        <label for="colorValue"></label>
                    </button>
                    <button class="btn btn-save" @click="saveNote">Save</button>
                    <button class="btn btn-cancel-edit" @click="cancelEditNote">Cancel</button>
                    <!-- <button ref="myBtn" @click="saveNote">Save</button> -->
                    </section>
                </section>
                `,
    data() {
        return {
            note: null,
            // url: null,
            // txt: null,
            // todos: null,
            editedNote: keeperService.createEmptyNote(),
            selectedType: null,
            // newTitle: null,
            // newTxt: null,
            // newUrl: null,
            // newTodos: null
        }
    },
    components: {
        // addNote,
        // addTexttype,
        addtxtType,
        addimgType,
        addtodosType

    },

    created() {
        console.log('hey world')
        console.log(this.type)
        // this.selectedType = this.type;
        // console.log('selectedType in edit', this.selectedType);
        // console.log('selectedType', type);
    //     keeperService.getNoteById(this.$route.params.noteId)
    //     .then(note => {
    //         // to edit a copy of the obj, so if we want to cancel edit
    //         this.note =  JSON.parse(JSON.stringify(note));
    //         this.url = this.note.data.url;
    //         this.txt = this.note.data.txt;
    //         this.todos - this.note.data.todos;
    //         // console.log('note in edit', this.note);
    //         // console.log('note in edit', this.note.type);
    //     })
    // },
    // eventBus.$on('selected-type', selectedType => {
    //     console.log(selectedType)
    //     this.selectedType = selectedType;
    // })
    // console.log('this.$route.params in edit', this.$route);
    // console.log('this.$route.params in edit', this.$route.params);
    const {noteId} = this.$route.params;
    
    if (noteId) {
        keeperService.getNoteById(noteId)
        .then(note => {
            // to edit a copy of the obj, so if we want to cancel edit
            console.log({note})
            this.note = JSON.parse(JSON.stringify(note));
            this.selectedType = this.note.type;
            console.log('this.selectedType if it old', this.selectedType);
            // this.url = this.note.data.url;
            // this.txt = this.note.data.txt;
            // this.todos = this.note.data.todos;
            // console.log('note in edit', this.note);
            // console.log('note in edit', this.note.type);
            })
            
    // } else this.note = this['noteData']
    } else {
        this.note = this.editedNote;
        this.selectedType = this.type;
        console.log('this.selectedType if it new', this.selectedType);
    }
    // console.log('this.editedNote', this.editedNote);
    // else {

    // }
},
    mounted() {
        // this.selectedType = this.type;
        // console.log('selectedType in edit', this.selectedType);
    //     // console.log('this.$refs', this.$refs);
    //     console.log('updatedInput mounted', this.$refs.updatedInput);
    },
    methods: {
        saveNote() {
            //TODO: for img and todos also
            // if (!this.newTitle) this.note.title = 
            // console.log('this.editedNote', this.editedNote);
            console.log('savingggg this.editedNote', this.editedNote);
            console.log('savingggg this.note', this.note);


            this.editedNote.id = this.note.id;
            this.editedNote.type = this.note.type;
            this.editedNote.title = this.note.title;
            this.editedNote.bgColor = this.note.bgColor;
            // if (this.editedNote.data.url) this.editedNote.data.url = this.note.data.url;
            // // console.log('changeTitle', this.note.title);

            if (this.editedNote.type === 'txtType') this.editedNote.data.txt = this.note.data.txt;
            else if (this.editedNote.type === 'imgType') this.editedNote.data.url = this.note.data.url;
            else if (this.editedNote.type === 'todosType') this.editedNote.data.todos = this.note.data.todos;

            console.log('this.editedNote', this.editedNote);
            keeperService.saveNote(this.editedNote)
                .then(savedNote => {
                    console.log(`Note ${savedNote.id} succesfuly saved`);
                    eventBus.$emit(SAVE_NOTE_MSG, 'Your note was saved!')
                    this.$router.push(`/keeper-app`)
                })
            
            //restart editedNote 
            this.editedNote = keeperService.createEmptyNote();
            this.note = null;
            // console.log('this.editedNote.data.txt', this.editedNote.data.txt);
            //TODO: for todos

        },
        cancelEditNote() {
            this.$router.push(`/keeper-app`)
        },
    },
    // watch : {
    //     show() {
    //         console.log('Show Changed!');
    //     },
    // }
}




   
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