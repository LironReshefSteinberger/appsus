import composeEmail from '../cmps/email/composeEmail-cmp.js'

export default {
    template: `
    <section>
        <router-link to="/email-app/compose">
        <div>EMAIL app</div>
    </router-link>
    <router-view></router-view>
        <!-- <compose-email></compose-email> -->

    </section>`,
    components: {
        composeEmail
    }

}