<template>
    <div>
        <h1>Update Book</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'book.list' }" class="btn btn-success">Return to List Book</router-link></div>
        </div>

        <form v-on:submit.prevent="updateBook">
            <div class="form-group">
                <label>Book Name</label>
                <input type="text" class="form-control" v-model="book.name">
            </div>

            <div class="form-group">
                <label>Book Price</label>
                <input type="text" class="form-control" v-model="book.price">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default{
        data(){
            return{
                book:{}
            }
        },

        created: function(){
            this.getBook();
        },

        methods: {
            getBook() {
              let uri = '/api/book/'+ this.$route.params.id +'/edit';
                axios.get(uri).then((response) => {
                    this.book = response.data;
                });
            },

            updateBook() {
              let uri = '/api/book/'+this.$route.params.id;
                axios.patch(uri, this.book).then((response) => {
                  this.$router.push({name: 'book.list'});
                });
            }
        }
    }
</script>

