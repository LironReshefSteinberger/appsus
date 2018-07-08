console.log('add-img-type-cmp');

import keeperService from '../../services/keeper-service.js'
// import editNote from '../../pages/keeper/edit-note-cmp.js'

export default {
    props: ['selectedType','note'],
    template: `<section v-if="note">
                    <!-- <router-link class="add" tag="button" to="/keeper-app/edit">edit txt type added -->
                    
                    <h1>This is ADD img cmp</h1>
                    <div>
                        <!-- <button class="btn btn-edit" @click="editNote">Edit</button>
                        <button class="btn btn-delete">Delete</button> -->
                        <!-- <edit-note :note="note"></edit-note> -->
                        <input ref="updatedInput" type="text" v-model="url" @input="changeUrl">
                        <!-- <input ref="updatedInput" type="text" v-model="note.data.url" @change="changeUrl"> -->

                    </div>
                    </router-link>
                </section>
                `,
    data() {
        return {
            url: null,
            // note: keeperService.createEmptyNote(),
        }
    },
    created() {
        // console.log('this not in ADD txt type', this.note);
        // this.note.type = 'txtType';
        // console.log('this not in ADD txt this.note.type', this.note.type);
        // console.log('this not in ADD txt this.selectedType', this.selectedType); //?????
        // console.log('this not in ADD txt this.note.type', this.note);

    },
    components: {
        // editNote
    },
    methods: {
        changeUrl() {
            console.log('this not in ADD txt this.note.type', this.note);
            this.note.data.url = this.url;
            console.log('this not in ADD after change', this.note.data.url);
            this.$emit('note', this.note);
        }
    }
}
