console.log('add-note-cmp');

// import addImgType from '../../cmps/keeper/
// import addTxtType from '../../cmps/keeper/add-txt-type-cmp.js'
import addImgType from '../../cmps/keeper/add-img-type-cmp.js'
import editNote from '../../pages/keeper/edit-note-cmp.js'
import eventBus from '../../services/event-bus-service.js'


export default {
    template:`
            <section class="add-container flex" >
                <h2>Take a note</h2>
                <!-- <h2>&amp; select type </h2> -->
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

                <!-- <select class="radio-btns-container flex" v-model="selectedType">
                    <option class="btn btn-txt-selected" value="addTxtType">Text</option>
                    <option class="btn btn-img-selected" value="addImgType">Image</option>
                    <option class="btn btn-todos-selected" value="addTodosType">Todos</option> -->
                    <!-- <component :is="selectedType" v-if="note"> -->
                <!-- </select> -->
                
                <!-- <router-link class="btn btn-edit-note" to="/keeper-app/edit" v-if="selectedType">
                 -->

                    
                <!-- 
                </router-link> -->

                <!-- <edit-note :type="selectedType"> -->
                    <button class="btn btn-txt-selected" @click="selectedTxtType">Text</button>
                    <button class="btn btn-img-selected" @click="selectedImgType">Image</button>
                    <button class="btn btn-todos-selected" @click="selectedTodosType">Todos</button>
                <!-- </edit-note> -->


                <!-- <router-link v-if="selectedType" to="/keeper-app/edit">
                    <edit-note :type="selectedType"></edit-note>
                </router-link> -->
            
                    <!-- <component :is="selectedType" v-if="selectedType" :type="selectedType"> -->
                        <!-- {{selectedType}} -->

                    <!-- </component> -->

                    
               
            <!-- </router-link> -->
            </section>
            `,
      data() {
        return {
            selectedType: '', //TODO: FOR EMPTY NOTE TO ADD DATA 
        }
    },
    components: {
        // addTxtType,
        addImgType,
        editNote
    },
    methods: {
        selectedTxtType() {
            this.selectedType = 'addtxtType';
            this.transferSelectedType();
            // this.routerPush();
            this.$router.push(`/keeper-app/add/${this.selectedType}`);
        },
        selectedImgType() {
            this.selectedType = 'imgType';
            console.log('this.selectedType img', this.selectedType);
            this.transferSelectedType();
            this.routerPush();
        },
        selectedTodosType() {
            this.selectedType = 'todosType';
            console.log('this.selectedType todos', this.selectedType);
            this.transferSelectedType();
            this.routerPush();
        },
        routerPush() {
            this.$router.push(`/keeper-app/edit`);
        },
        transferSelectedType() {
            console.log('this.selectedType txt', this.selectedType);
            
            // eventBus.$emit('selected-type', this.selectedType);
        }
    }

}

