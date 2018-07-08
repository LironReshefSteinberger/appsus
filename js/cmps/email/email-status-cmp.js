import emailService from '../../services/email-service.js'

export default {

    props: ['unread', 'totalCount'],
    template: `
    
        <section class="email-status">
            <p>inbox: {{unread}} unread emails 
                from {{totalCount}}  total emails</p>
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

        // getUnreadEmails() {
        //     var unreadCount = 0;
        //     this.emails.then(emails => {
        //         emails.forEach(email => {
        //             if (!email.isRead) {
        //                 unreadCount++
        //             }
        //         })
        //         return unreadCount
        //     })
        // },
        // getTotalEmailsCount() {

        //     this.emails.then(emails => {
        //         let length = emails.length;
        //         this.totalEmails = length
        //     })

        // }
    }
}