// import {bus} from '../../services/eventbus-services.js'


export default {

    props: ['email'],
    template: `
    <section class="email-preview">
       
        <router-link :to="'/email-app/'+email.id">
            <h2>Subject: {{email.subject}}</h2>
            <p>Sent: {{email.sentAt}}</p>
        </router-link>
       
    </section>
    `,

    data() {
        return {
            

        }
    },
    methods: {

    }

}