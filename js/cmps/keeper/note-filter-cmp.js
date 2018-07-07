// console.log('notes-filter-cmp');


// import bookAdd from './book-add-cmp.js'


// Vue.component ('book-filter', {
export default {
    template: `
            <section class="note-filter flex"> 
                <!-- <h2>Notes Filter</h2> -->
                <i class="fa fa-search"></i>
                <input type="text" placeholder="Search by Title" v-model="filterBy.byName" @keydown="filterNotes" />
                <!-- <book-add></book-add> -->
            </section>
        `,

    data() {
        return {
            filterBy: {
                byName: '',
            }
        }
    },

    methods: {
        filterNotes() {            
            this.$emit('filtered', this.filterBy);
        }
    },
    components: {
        // bookAdd
    }
}