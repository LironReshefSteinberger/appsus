// console.log('keeper-cmp');

import keeperService from '../../services/keeper-service.js'
import imgType from '../../cmps/keeper/img-type-cmp.js'
import txtType from '../../cmps/keeper/txt-type-cmp.js'
// import addNote from '../../pages/keeper/add-note-cmp.js'
import previewNote from '../../pages/keeper/preview-note-cmp.js'

export default {
    template: `
            <section>
                <div>KEEPER COMP</div>
                <ul class="notes-list clean-list" v-if="notes">
                    <li v-for="(note, idx) in notes" :key="note.id">
                        <!-- {{note.id}} -->
                        <!-- {{note.type}} -->
                        <h2 class="title">{{note.title}}</h2>
                        <router-link :to="'/keeper-app/'+note.id">
                            <component :is="note.type" :note="note"></component>
                        </router-link>
                    </li>
                </ul>
            </section>
            `,
    data() {
        return {
            notes: null,   
        }
    },
    created() {
        keeperService.query()
            .then(notes => {
                console.log('Parent notes', notes);
                this.notes = notes;
            })
    },
    components: {
        imgType,
        txtType,
        // addNote,
        previewNote
    }
}