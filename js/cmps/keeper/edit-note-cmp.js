console.log('edit-note-cmp');
import keeperService from '../../services/keeper-service.js'
import imgType from '../keeper/img-type-cmp.js'
import txtType from '../keeper/txt-type-cmp.js'

export default {
    template: `
                <section class="edit-note" v-if="note">
                    <h2>edit note cmp</h2>
                    <component :is="note.type" :note="note" :key="note.id">
                        
                    </component>
                </section>`,
    data() {
        return {
            note: null,
        }
    },
    created() {
        console.log('$route.', this.$route.params.noteId);
        console.log('note in edit created ', this.note);
        
        keeperService.getNoteById(this.$route.params.noteId)
            .then(note => {
                this.note = note;
                console.log('note in edit', this.note);
            })
    },     
    components: {
        imgType,
        txtType,
    }
}