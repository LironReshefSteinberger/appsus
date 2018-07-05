import emailPreview from './email-preview-cmp.js'

export default {
    props: ['emails'],

    template: `
    <section class="email-list">

    <ul>
        <li v-for="email in emails" :key="email.id">
            <emailPreview :email="email"></emailPreview>
        </li>
    </ul>

    
    </section>
        
    
    `,

    data() {
        return {

        }
    },
    components: {
        emailPreview
    }

}