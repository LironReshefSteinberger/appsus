import emailService from '../../services/email-service.js'


export default {   

    template: `
    <section class="email-details" v-if="email">
  
        <div class="email-top-section">
        
            <h2>Subject: {{email.subject}}</h2>
            <h3>Sent: {{email.sentAt}}</h3> 
             <p>{{email.body}}</p>           
        </div>
        <hr>
        <div class="email-body-section">
           
        </div>



    </section>
    `,

    data (){
        return {
            email: ''
        }
    },

    created() {
        this.loadEmail();
      },

    methods: {
        loadEmail() {
            emailService.getEmailById(this.$route.params.emailId)
            
            .then(email => {
                this.email = email
                
            })
        },
        
    },
    watch: {
        '$route.params.emailId': function (newEmailId) {
            console.log('$route.params.bookId has changed!', newEmailId);
            this.loadEmail()            
        }
    }
}