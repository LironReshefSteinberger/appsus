console.log('add-note-cmp');

import imgType from '../../cmps/keeper/img-type-cmp.js'
import txtType from '../../cmps/keeper/txt-type-cmp.js'

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
                    <option class="btn btn-txt-selected" value="txtType">Text</option>
                    <option class="btn btn-img-selected" value="imgType">Image</option>
                    <option class="btn btn-todos-selected" value="todosType">Todos</option>
                    <!-- <book-preview :book="book"></book-preview> -->
                    <!-- <component :is="selectedType" v-if="note"> -->
                </select>
            
                    <component :is="selectedType" v-if="selectedType">
                        {{selectedType}}dfsdfds

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
        imgType,
        txtType,
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

