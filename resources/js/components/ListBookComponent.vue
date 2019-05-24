<template>
    <div class="container">
      <div v-if="errorBooks" class="alert alert-info" role="alert">
          Book not found!
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <h1>List Books</h1>
      <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'book.add' }" class="btn btn-primary">Create Book</router-link>
          </div>
      </div>
      <p class="space"></p>
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
            <tr v-for="book in books" v-bind:value="book.value" v-bind:key="book.id">
              <td>{{ book.id }}</td>
              <td>{{ book.name }}</td>
              <td>{{ book.price }}</td>
              <td>
                <router-link :to="{name: 'book.edit', params: { id: book.id }}" class="btn btn-primary">Edit</router-link>
                <button class="btn btn-danger" v-on:click="deleteBook(book)">Delete</button>
              </td>
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
              books: [],
              error: false,
              errorBooks: false
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
            }).catch(error => {
              this.errorBooks = false;
            });
          },
          deleteBook(book) {
            let id = book.id;
            let uri = '/api/book/' + id + '/delete';
            axios.delete(uri).then((response) => {
              this.books.shift(book);
              this.$router.push('/book');
            }).catch(error => {
              this.error = true;
            });
          }
        }
    }
</script>

