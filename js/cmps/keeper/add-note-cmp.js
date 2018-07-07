console.log('add-note-cmp');

// import addImgType from '../../cmps/keeper/
import addTxtType from '../../cmps/keeper/add-txt-type-cmp.js'
import addImgType from '../../cmps/keeper/add-img-type-cmp.js'


export default {
    template:`
            <section class="add-container">
            <!-- <section class="add-container" v-if="selectedType"> -->
            <!-- <router-link class="add" tag="button" to="/keeper-app/edit">Add new note -->
            <!-- <edit-note :type="selectedType"></edit-note> -->
                <!-- <div class="radio-btns-container flex">
                    <button class="btn btn-txt-selected" @click="selectedTxtType">Text</button>
                    <button class="btn btn-img-selected" @click="selectedImgType">Image</button>
                    <button class="btn btn-todos-selected" @click="selectedTodosType">Todos</button> -->
                    <!-- <book-preview :book="book"></book-preview> -->
                    <!-- <component :is="selectedType" v-if="note"> -->
                <!-- </div> -->

                <select class="radio-btns-container flex" v-model="selectedType">
                    <option class="btn btn-txt-selected" value="addTxtType">Text</option>
                    <option class="btn btn-img-selected" value="addImgType">Image</option>
                    <option class="btn btn-todos-selected" value="addTodosType">Todos</option>
                    <!-- <component :is="selectedType" v-if="note"> -->
                </select>
            
                    <component :is="selectedType" v-if="selectedType" :type="selectedType">
                        {{selectedType}}

                    </component>

                    
               
            <!-- </router-link> -->
            </section>
            `,
      data() {
        return {
            selectedType: null, //TODO: FOR EMPTY NOTE TO ADD DATA 
        }
    },
    components: {
        addTxtType,
        addImgType
    },
    methods: {
        selectedTxtType() {
            this.selectedType = 'txtType';
            console.log('this.selectedType txt', this.selectedType);
        },
        selectedImgType() {
            this.selectedType = 'imgType';
            console.log('this.selectedType img', this.selectedType);
        },
        selectedTodosType() {
            this.selectedType = 'todosType';
            console.log('this.selectedType todos', this.selectedType);
        },
    }

}

