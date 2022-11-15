import { createRouter, createWebHistory } from 'vue-router';
import { Home } from '../views/home';
import booksRoutes from './books.routes';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', name: "home", component: Home },
        { ...booksRoutes },

        // catch all redirect to home page
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});