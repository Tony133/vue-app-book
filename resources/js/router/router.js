import Vue from 'vue';
import VueRouter from 'vue-router';
import ListBookComponent from '../components/ListBookComponent';
import AddBookComponent from '../components/AddBookComponent';
import EditBookComponent from '../components/EditBookComponent';
import HomeComponent from '../components/HomeComponent';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/book/add',
            name: 'book.add',
            component: AddBookComponent
        },
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/book',
            name: 'book.list',
            component: ListBookComponent
        },
        {
            path: '/edit/:id',
            name: 'book.edit',
            component: EditBookComponent
        }
    ],
});

export default router;