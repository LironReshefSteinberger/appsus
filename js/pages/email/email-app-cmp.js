
import emailService from '../../services/email-service.js'
import emailList from '../../cmps/email/email-list-cmp.js'
import emailDetails from './email-details-cmp.js'
import emailStatus from '../../cmps/email/email-status-cmp.js'
import emailSearch from '../../cmps/email/email-search-cmp.js'
import eventBus from '../../services/event-bus-service.js'
import emailFilter from '../../cmps/email/email-filter-cmp.js'

export default {


    template: `
    <section class="email-app">

        <email-filter @doFilter="setFilter"></email-filter>
        
        <email-search :emails="emails"></email-search>

        <router-link to="/compose">
            <div class="compose-email-button">Compose</div>
        </router-link> 

        <email-status></email-status>

        <email-list :emails="emailsToShow"></email-list>

        <email-details v-if="selectedEmail"></email-details>
        
        
    </section>
    
    `,
    data() {
        return {
            emails: [],
            selectedEmail: false,
            filter: null
        }

    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
    },
    components: {
        emailList,
        emailDetails,
        emailStatus,
        emailSearch,
        emailFilter

    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        }
    },
    computed: {
        emailsToShow() {
            let emailsToShow = this.emails
            if (this.filter) {
                emailsToShow = emailsToShow.filter
                (email => email.subject.includes(this.filter.txt) ||
                email.body.includes(this.filter.txt))
           
            
                switch (this.filter.emailStatus) {
                    case 'read':
                    emailsToShow = emailsToShow.filter(email=> email.isRead = true);
                    break;
                    case 'unread': 
                    emailsToShow = emailsToShow.filter(email=> email.isRead = false);
                    break;
                    case 'all':
                    emailsToShow = emailsToShow;
                    break;
                };               
            }
            return emailsToShow


        }
    },

    watch: {
        '$route.params.emailId': function (newEmailId) {
            console.log('$route.params.emailId has changed!', newEmailId);
            this.selectedEmail = true;
        }

    }
}










// import composeEmail from '../cmps/email/composeEmail-cmp.js'

// export default {
//     template: `
//     <section>
//         <router-link to="/email-app/compose">
//         <div>EMAIL app</div>
//     </router-link>
//     <router-view></router-view>
//         <!-- <compose-email></compose-email> -->

//     </section>`,
//     components: {
//         composeEmail
//     }

// }