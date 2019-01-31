<template>
  <div>
    <h1>Create Book</h1>
    <form v-on:submit.prevent="addBook">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Book Name:</label>
            <input type="text" class="form-control" v-model="book.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Book Price:</label>
              <input type="text" class="form-control col-md-6" v-model="book.price" />
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add Book</button>
        </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
          book:{}
        }
    },
    methods: {
      addBook(){
        let uri = '/api/book';
        axios.post(uri, this.book).then((response) => {
          this.$router.push({name: 'book.list'})
        })
    }
  }
}
</script>

