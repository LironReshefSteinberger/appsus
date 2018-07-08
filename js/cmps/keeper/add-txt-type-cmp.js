console.log('add-txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
  props: ['type', 'note'],
    template: `<section v-if="note">                    
                    <h1>This is ADD txt cmp</h1>
                    <div>
                        <textarea ref="updatedTxt" v-model="note.data.txt"></textarea>
                    </div>
                </section>
                `,
    data() {
        return {
        }
    },
    created() {
    },
    components: {
    }
}
