// console.log('txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section>
                    <!-- <h1>This is txt cmp, note type is {{note.type}}</h1> -->
                    <div>{{note.data.txt}}
                    <!-- <button class="btn btn-edit" @click="editNote">Edit</button>
                    <button class="btn btn-delete">Delete</button> -->
                    </div>
                </section>
                `
}