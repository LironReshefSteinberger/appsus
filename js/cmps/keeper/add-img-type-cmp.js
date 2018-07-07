console.log('add-img-type-cmp');

import keeperService from '../../services/keeper-service.js'
import editNote from '../../pages/keeper/edit-note-cmp.js'

export default {
    props: ['selectedType'],
    template: `<section>
                    <!-- <router-link class="add" tag="button" to="/keeper-app/edit">edit txt type added -->
                    
                    <h1>This is ADD img cmp</h1>
                    <div>
                        <!-- <button class="btn btn-edit" @click="editNote">Edit</button>
                        <button class="btn btn-delete">Delete</button> -->
                        <edit-note :note="note"></edit-note>
                    </div>
                    </router-link>
                </section>
                `,
    data() {
        return {
            note: keeperService.createEmptyNote(),
        }
    },
    created() {
        console.log('this not in ADD txt type', this.note);
        this.note.type = 'txtType';
        console.log('this not in ADD txt this.note.type', this.note.type);
        console.log('this not in ADD txt this.selectedType', this.selectedType); //?????
    },
    components: {
        editNote
    }
}
