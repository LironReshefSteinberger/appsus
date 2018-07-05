console.log('routes');
import home from './pages/home-cmp.js'
import emailApp from './pages/email-cmp.js'
import keeperApp from './pages/keeper-cmp.js'
import composeEmail from './cmps/email/composeEmail-cmp.js'
import emailDetails from './pages/email-details-cmp.js'

const routes = [
    {path: '/', component: home},     
    {path: '/email-app', component: emailApp,
    
      children: [
        {path: 'compose', component: composeEmail},       
      ]
    },
    {path: '/email-app/:emailId', component: emailApp},
    {path: '/keeper-app', component: keeperApp},
  ];



Vue.use(VueRouter);
var appRouter = new VueRouter({routes})

export default appRouter;


