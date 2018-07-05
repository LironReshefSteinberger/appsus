console.log('routes');
import home from './pages/home-cmp.js'
import emailApp from './pages/email-cmp.js'
import keeperApp from './pages/keeper-cmp.js'
import composeEmail from './cmps/email/composeEmail-cmp.js'
import editNote from './cmps/keeper/edit-note-cmp.js'



const routes = [
    {path: '/', component: home}, 
    {path: '/email-app', component: emailApp,
    
      children: [
        {
          path: 'compose', component: composeEmail
        }
      ]},
    {path: '/keeper-app', component: keeperApp},
    // { path: '/keeper-app/edit/:bookId?', component: bookEdit },
    { path: '/keeper-app/edit/:noteId', component: editNote },
  ];



Vue.use(VueRouter);
var appRouter = new VueRouter({routes})

export default appRouter;


