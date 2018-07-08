export default {
    template: `
    <section class="email-filter">
            <input type="text" v-model="filter.txt" @input="findEmails" placeholder="Search for emails"/>
        
            <input type="radio" id="read" v-model="filter.emailStatus" value="read" @click="updateFilter"/>
            <label for="read">Read</label>
        
            <input type="radio" id="unread" v-model="filter.emailStatus" value="unread" @click="updateFilter"/>
            <label for="unread">Unread</label>
       
            <input type="radio" id="all" v-model="filter.emailStatus" value="all" @click="updateFilter" />  
            <label for="all">All</label>
    </section>
    `,

    data() {
        return {
            filter: {
                txt: '',
                emailStatus: ''
            }
        }
    },
    methods: {
        findEmails() {
            this.$emit('doFilter', this.filter)
        },
        updateFilter() {
            // console.log('ev: ', ev.value)
            // this.filter.emailStatus = ev.value
            this.$emit('doFilter', this.filter)
           
        }
    }
}