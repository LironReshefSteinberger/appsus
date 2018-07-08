console.log('add-note-cmp');

import addImgType from '../../cmps/keeper/add-img-type-cmp.js'
import editNote from '../../pages/keeper/edit-note-cmp.js'
import eventBus from '../../services/event-bus-service.js'


export default {
    template:`
            <section class="add-container flex" >
                <h2>Take a note</h2>
                    <button class="btn btn-txt-selected" @click="selectedTxtType">Text</button>
                    <button class="btn btn-img-selected" @click="selectedImgType">Image</button>
                    <button class="btn btn-todos-selected" @click="selectedTodosType">Todos</button>
            </section>
            `,
      data() {
        return {
            selectedType: '',
        }
    },
    
    components: {
        addImgType,
        editNote
    },
    methods: {
        selectedTxtType() {
            this.selectedType = 'txtType';
            this.transferSelectedType();
            this.$router.push(`/keeper-app/add/${this.selectedType}`);
        },
        selectedImgType() {
            this.selectedType = 'imgType';
            this.$router.push(`/keeper-app/add/${this.selectedType}`);

            this.transferSelectedType();
        },
        selectedTodosType() {
            this.selectedType = 'todosType';
            this.$router.push(`/keeper-app/add/${this.selectedType}`);
            this.transferSelectedType();
        },
        routerPush() {
            this.$router.push(`/keeper-app/edit`);
        },
        transferSelectedType() {
            console.log('this.selectedType txt', this.selectedType);
        }
    }

}

