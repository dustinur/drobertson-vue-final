import TeamList from './components/TeamList.vue';
import TeamRanking from './components/teams/TeamRanking.vue';
import TeamDetails from './components/teams/TeamDetails.vue';
import SignUp from './components/user/SignUp.vue';
import Header from './components/Header.vue';

export const routes = [
    {
        path: '', name: 'TeamList', components: {
            default: TeamList,
            'header-top': Header
        }
    }, 
    {
        path: '/teams', components: {
            default: TeamRanking,
            'header-bottom': Header
        }, children: [
            { path: ':id', component: TeamDetails }
            // { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
    {
        path: '/user', components: {
            default: SignUp,
            'header-bottom': Header
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];