import Vue from 'vue';
import VueRouter from 'vue-router';
import ListBookComponent from '../components/book/ListBookComponent';
import AddBookComponent from '../components/book/AddBookComponent';
import EditBookComponent from '../components/book/EditBookComponent';
import HomeComponent from '../components/home/HomeComponent';

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