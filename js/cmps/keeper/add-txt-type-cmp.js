console.log('add-txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['selectedType'],
    template: `<section v-if="selectedType">
                    <h1>This is ADD txt cmp</h1>
                    <div>
                    <!-- <button class="btn btn-edit" @click="editNote">Edit</button>
                    <button class="btn btn-delete">Delete</button> -->
                    </div>
                </section>
                `,
    data() {
        return {
            note: keeperService.createEmptyNote(),
        }
    },
    created() {
        console.log('this not in ADD txt type', this.note);
        
    }
}