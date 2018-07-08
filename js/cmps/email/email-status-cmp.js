import emailService from '../../services/email-service.js'

export default {


    template: `
    
        <section class="email-status">
            <p>inbox: {{getUnreadEmails}} {{unReadEmailsCount}} unread emails 
                from {{getTotalEmailsCount}} {{totalEmails}}  total emails</p>
        </section>
    `,
    data() {
        return {
            emails: emailService.query(),
            unReadEmailsCount: 0,
            totalEmails: 0
        }
    },
    methods: {

    },

    computed: {

        getUnreadEmails() {
            this.emails.then(emails => {
                emails.forEach(email => {
                    if (!email.isRead) {
                        this.unReadEmailsCount++
                    }
                })
                return this.unReadEmailsCount
            })
        },
        getTotalEmailsCount() {

            this.emails.then(emails => {
                let length = emails.length;
                this.totalEmails = length
            })

        }
    }
}