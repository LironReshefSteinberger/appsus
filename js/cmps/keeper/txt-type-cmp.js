// console.log('txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section v-if="note">
                    <!-- <h1>This is txt cmp, note type is {{note.type}}</h1> -->
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
            this.deleteLabel ='Deleting...';
            keeperService.removeNote(this.note.id)
                .then(() => {
                    console.log('note in edit-delete ', this.note);
                })
                    // console.log('note in edit-delete', this.note.type);
               
                .catch(err=>{
					console.log('Failed to delete');
					this.deleteLabel = 'Delete'
				})
            this.$router.push(`/keeper-app`)
        },

    }
    
}