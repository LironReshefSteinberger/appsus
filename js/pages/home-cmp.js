
import emailApp from './email/email-app-cmp.js'
import keeperApp from './keeper/keeper-app-cmp.js'




export default {
    template: `
            <section class="home">
                <router-link to="/email-app">
                    <img src="img/email/email_1.png" />
                </router-link>
                <router-link to="/keeper-app">
                    <img src="img/keeper/notes_1.png" />
                </router-link>
            </section>`,
    components: {
        emailApp,
        keeperApp,
    }
}