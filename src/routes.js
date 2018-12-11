import TeamDetails from './components/teams/TeamDetails.vue';
import SignUp from './components/user/SignUp.vue';
import Home from './components/Home.vue';
// import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';
// import Nav from './components/Nav.vue';


export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
    } },
    { path: '/teams', name: 'teamDetails', components: {
        default: TeamDetails
    } },
    { path: '/user', name: 'signUp', components: {
        default: SignUp,
    } }


    //     path: '', name: 'Home', components: {
    //         default: Home,
    //         'header-top': Header
    //     }, children: [
    //         { path: ':id', component: TeamList }
    //         // { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    //     ]
    // }, 
    // {
    //     path: '/teams', components: {
    //         default: TeamRanking,
    //         'header-bottom': Header
    //     }, children: [
    //         { path: ':id', component: TeamDetails }
    //         // { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    //     ]
    // },
    // {
    //     path: '/user', components: {
    //         default: SignUp,
    //         'header-bottom': Header
    //     }
    // },
    // { path: '/redirect-me', redirect: { name: 'home' } },
    // { path: '*', redirect: '/' }
];