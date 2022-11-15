import { slotFlagsText } from '@vue/shared';
import axios from 'axios';
import { defineStore } from 'pinia';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const baseUrl = `${import.meta.env.API_URL}`;

export const useBooksStore = defineStore({
    id: 'books',
    state: () => ({
        books: {},
        book: {}
    }),
    actions: {
        async getAll() {
            this.books = { loading: true };
            try {
                this.books = await fetchWrapper.get(`http://localhost:3333/api/books`);
            } catch (error) {
                this.books = { error };
            }
        },
        async getById(id) {
            this.book = { loading: true };
            try {
                this.book = await fetchWrapper.get(`http://localhost:3333/api/books/${id}`);
            } catch (error) {
                this.book = { error };
            }
        },
        async create(book) {
            await fetchWrapper.post(`http://localhost:3333/api/books`, book);
        },
        async update(id, params) {
            await fetchWrapper.put(`http://localhost:3333/api/books/${id}`, params);
        },
        async delete(id) {
            // add isDeleting prop to book being deleted
            this.books.find(x => x.id === id).isDeleting = true;
            await fetchWrapper.delete(`http://localhost:3333/api/books/${id}`);
            // remove user from list after deleted
            this.books = this.books.filter(x => x.id !== id);
        }
    }
});
