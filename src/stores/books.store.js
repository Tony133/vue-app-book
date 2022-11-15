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
                this.books = await fetchWrapper.get(`${baseUrl}`);
            } catch (error) {
                this.books = { error };
            }
        },
        async getById(id) {
            this.book = { loading: true };
            try {
                this.book = await fetchWrapper.get(`${baseUrl}/api/books/${id}`);
            } catch (error) {
                this.book = { error };
            }
        },
        async create(book) {
            await fetchWrapper.post(`${baseUrl}/api/books`, book);
        },
        async update(id, params) {
            await fetchWrapper.put(`${baseUrl}/api/books/${id}`, params);
        },
        async delete(id) {
            // add isDeleting prop to book being deleted
            this.books.find(x => x.id === id).isDeleting = true;
            await fetchWrapper.delete(`${baseUrl}/api/books/${id}`);
            // remove user from list after deleted
            this.books = this.books.filter(x => x.id !== id);
        }
    }
});
