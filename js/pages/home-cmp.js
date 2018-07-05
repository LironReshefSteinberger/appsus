
import emailApp from './email-cmp.js'
import keeperApp from './keeper-cmp.js'


export default {
    template: `
            <section class="home">
                <router-link to="/email-app">
                    <img src="img/email/email.png" />
                </router-link>
                <router-link to="/keeper-app">
                    <img src="img/keeper/keeper.png" />
                </router-link>
            </section>`,
    components: {
        emailApp,
        keeperApp

    }
}