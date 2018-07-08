console.log('add-txt-type-cmp');

import keeperService from '../../services/keeper-service.js'
// import editNote from '../../pages/keeper/edit-note-cmp.js'

export default {
  props: ['type', 'note'],
    template: `<section v-if="note">
                    <!-- <router-link class="add" tag="button" to="/keeper-app/edit">edit txt type added -->
                    
                    <h1>This is ADD txt cmp</h1>
                    <div>
                        <!-- <button class="btn btn-edit" @click="editNote">Edit</button>
                        <button class="btn btn-delete">Delete</button> -->
                        <!-- <edit-note :note-data="note" :type="type"></edit-note> -->
                        <textarea ref="updatedTxt" v-model="note.data.txt"></textarea>

                    </div>
                </section>
                `,
    data() {
        return {
            // note: keeperService.createEmptyNote(),
        }
    },
    created() {
        // console.log('this not in ADD txt type', this.note);
        // this.note.type = 'txtType';
        // console.log('this not in ADD txt this.note.type', this.note.type);
        // console.log('this not in ADD txt this.selectedType', this.type); //?????
    },
    components: {
        // editNote
    }
}
