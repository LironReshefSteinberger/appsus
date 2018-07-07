// console.log('txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section v-if="note">
                    <h1>This is txt cmp, note type is {{note.type}}</h1>
                    <div>{{note.data.txt}}
                    <!-- <button class="btn btn-edit" @click="editNote">Edit</button>
                    <button class="btn btn-delete">Delete</button> -->
                    <router-link class="btn btn-edit" tag="button" :to="'/keeper-app/edit/' + note.id">Edit</router-link>
                        <button class="btn btn-delete" @click="removeNote">{{deleteLabel}}</button> 
                    </div>
                </section>
                `,
    data() {
        return {
            deleteLabel : 'Delete',
        }
    },
    methods: {
        removeNote() {
            console.log('deleteLabel', this.deleteLabel);
            this.deleteLabel ='Deleting...';
            console.log('$route.', this.$route.params.noteId);
            keeperService.removeNote(this.$route.params.noteId)
                .then(note => {
                    this.note = note;
                    console.log('note in edit-delete ', this.note);
                    // console.log('note in edit-delete', this.note.type);
                })
            this.$router.push(`/keeper-app`)
        }

    }
    
}