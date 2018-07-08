import emailService from '../../services/email-service.js'


export default {

    template:`
    <section class="compose-email">
       <div class="new-message-label">New Message</div>
       <input type="text" v-model="to" placeholder="To:">
       <input type="text" v-model="subject" placeholder="Subject">
       <input type="textarea" v-model="body">
       <button class="send-btn" @click="sendEmail">Send</button>
       <p>{{message}}</p>
       <router-link to="/email-app">
       <button v-if="(message)">Check Inbox</button>
       </router-link>
    </section>
    `,

    data() {
        return{
            emails: [],
            id: '',
            to: '',
            subject: '',
            body: '',
            message: ''           
        }
    },
    methods: {
        sendEmail() {
            let newEmail= {
                
                to: this.to,
                subject: this.subject,
                body: this.body,
                sentAt: Date.now(),
                isRead: false
            }
            emailService.updateEmails(newEmail);
            this.message = 'email sent successfully'
        }
    },

    created() {
        emailService.query()
        .then (emails => this.emails = emails)
    }


}