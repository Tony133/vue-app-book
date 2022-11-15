import { Layout } from '../views/books';

const loadComponent = (view) => {
    return () => import(`../views/books/components/${view}.vue`);
}

export default {
    path: '/books',
    component: Layout,
    children: [
        { path: '', redirect: 'list' },
        { path: 'list', component: loadComponent('ListBook') },
        { path: 'add', component: loadComponent('AddBook') },
        { path: 'edit/:id', component: loadComponent('EditBook') },
    ]
};
