console.log('img-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section v-if="note">
                    <h1>This it img!! cmp, note type is {{note.type}}</h1>
                    <img :src="note.data.url"/>
                </section>
                `,
    created() {
        console.log('note in img: ', this.note);
    }
}