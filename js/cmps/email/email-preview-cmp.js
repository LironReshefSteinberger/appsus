import emailService from '../../services/email-service.js'

export default {

    props: ['email'],
    template: `
    <section @click="setEmailStatus" class="email-preview">
       
        <router-link :to="'/email-app/'+email.id">
            <h2 class="unread" v-bind:class="{'read':email.isRead}">Subject: {{email.subject}}</h2>
            <p>Sent: {{email.sentAt}}</p>
            <p>Read? {{isRead}}</p>
            <div @click.stop="toggleMarkStatus" title="Mark as read/unread">           
             <i ref="myMark" class="far fa-envelope"></i>
            </div>
            
            
        </router-link>
       
    </section>
    `,

    data() {
        return {
            isRead: this.email.isRead

        }
    },
    methods: {
        setEmailStatus() {
            if (this.isRead) return;
            emailService.setReadStatus(this.email)
                .then(() => this.isRead = this.email.isRead)
        },
        toggleMarkStatus() {
            emailService.setReadStatus(this.email)
                .then(() => this.isRead = this.email.isRead)
            console.log('my mark', this.$refs)

            if (this.isRead) this.$refs.myMark.classList = 'far fa-envelope'
            else this.$refs.myMark.classList = 'far fa-envelope-open'

        }, 

        mounted () {
            if (this.isRead) this.$refs.myMark.classList = 'far fa-envelope'
            else this.$refs.myMark.classList = 'far fa-envelope-open'
        }
    }




}