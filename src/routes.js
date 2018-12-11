import TeamDetails from './components/teams/TeamDetails.vue';
import SignUp from './components/user/SignUp.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/teams', component: TeamDetails },
    { path: '/user', component: SignUp }


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