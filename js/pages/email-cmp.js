
import emailService from '../services/email-service.js'
import emailList from '../cmps/email/email-list-cmp.js'
import emailDetails from './email-details-cmp.js'

export default {


    template: `
    <section class="email-app">
        <email-list :emails="emails"></email-list>
        <email-details v-if="selectedEmail"></email-details>
        
    </section>
    
    `,
    data() {
        return {
            emails: [],
            selectedEmail: false,
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
        emailDetails
    },

    watch: {
        '$route.params.emailId': function (newEmailId) {
            console.log('$route.params.bookId has changed!', newEmailId);
            this.selectedEmail=true;
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