<template>
	<div class="container">
		<h1>Update Book</h1>
		<div v-if="validationErrors">
			<div v-for="(value, key) in validationErrors" v-bind:value="value" v-bind:key="key" class="alert alert-danger" role="alert">
				{{ value }}
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>

		<div v-if="errorUpdate" class="alert alert-danger" role="alert">
			Error: Book not updated!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>

		<div v-if="error" class="alert alert-danger" role="alert">
			Error: Book not found!
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>

    <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
      {{ message }}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

		<div class="row">
		  <div class="col-md-10"></div>
		  <div class="col-md-2"><router-link :to="{ name: 'book.list' }" class="btn btn-success">Return to List Book</router-link></div>
		</div>
		<form v-on:submit.prevent="updateBook">
			<div class="form-group">
				<label>Book Name</label>
				<input type="text" class="form-control" v-model="book.name" :class="{ 'is-invalid': submitted && $v.book.name.$error }"/>
				<div v-if="submitted && !$v.book.name.required" class="invalid-feedback"> Name is required</div>
			</div>
			<div class="form-group">
				<label>Book Price</label>
				<input type="text" class="form-control" v-model="book.price" :class="{ 'is-invalid': submitted && $v.book.price.$error }"/>
				<div v-if="submitted && !$v.book.price.required" class="invalid-feedback"> Price is required</div>
			</div>
			<div class="form-group">
				<button class="btn btn-primary">Update</button>
			</div>
		</form>
	</div>
</template>

<script>
	import axios from 'axios';
  import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

	export default{
		data(){
			return {
				book:{},
				error: false,
				errorUpdate: false,
				submitted: false,
				success: false,
				message: '',
				validationErrors: ''
			}
		},
    validations: {
      book: {
        name: { required },
        price: { required }
      }
    },
		created: function() {
			this.getBook();
		},
		methods: {
			getBook() {
			  let uri = '/api/book/'+ this.$route.params.id +'/edit';
				axios.get(uri).then((response) => {
					this.book = response.data;
				}).catch(error => {
					this.error = true;
				});
			},
			updateBook() {
				this.submitted = true;
			  let uri = '/api/book/'+this.$route.params.id;
				axios.patch(uri, this.book).then((response) => {
					this.message = response.data;
          this.success = true; 
					this.$router.push({name: 'book.list'});
				}).catch(errors => {
          if (errors.response.status == 422) {
            this.validationErrors = Object.values(errors.response.data.errors).flat();
          }

					this.$v.$touch();
          if (this.$v.$invalid) {
            return;
          }
          this.errorUpdate = true;
				});
			}
		}
	}
</script>

