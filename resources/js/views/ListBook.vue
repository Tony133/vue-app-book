<template>
    <div>
        <h1>List Books</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'book.add' }" class="btn btn-primary">Create Book</router-link>
          </div>
        </div>
        <p></p>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Book Name</td>
                <td>Book Price</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="book in books">
                    <td>{{ book.id }}</td>
                    <td>{{ book.name }}</td>
                    <td>{{ book.price }}</td>
                    <td>
                    <router-link :to="{name: 'book.edit', params: { id: book.id }}" class="btn btn-primary">Edit</router-link>
                    <button class="btn btn-danger" v-on:click="deleteBook(index, book.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                books: []
            }
        },
        created: function() {
            this.fetchBooks();
        },
        methods: {
            fetchBooks() {
              let uri = '/api/book/list';
              axios.get(uri).then((response) => {
                  this.books = response.data;
                  console.log(this.books);
              });
            },
            deleteBook(index, id) {
              let uri = '/api/book/' + id + '/delete';
              this.books.splice(index, 1);
              axios.delete(uri).then((response) => {
                this.$router.push('/book')
              });
            }
        }
    }
</script>

