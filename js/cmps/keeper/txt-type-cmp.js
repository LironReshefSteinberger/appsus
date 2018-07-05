// console.log('txt-type-cmp');

import keeperService from '../../services/keeper-service.js'

export default {
    props: ['note'],
    template: `<section>
                    <h1>This it txt cmp, note type is {{note.type}}</h1>
                    <div>{{note.data.txt}}</div>
                </section>
                `
}