import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/Transaction/Index.vue';
import Create from '../components/Transaction/Create.vue';
import Edit from '../components/Transaction/Edit';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: Index, name: 'transaction.index'},
        {path: '/create', component: Create},
        {path: '/edit/:id', component: Edit},
    ],
    mode: 'history'
});
