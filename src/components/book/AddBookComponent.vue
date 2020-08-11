<template>
  <div class="container">
    <h1>Create Book</h1>
    <div v-if="error" class="alert alert-danger" role="alert">
      Error: Book not created!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div v-if="validationErrors">
      <div
        v-for="(value, key) in validationErrors"
        v-bind:key="key"
        class="alert alert-danger"
        role="alert"
      >
        {{ value }}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div
      v-if="success"
      class="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {{ message }}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <hr />
    <form v-on:submit.prevent="addBook">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Book Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              v-model="book.name"
              :class="{ 'is-invalid': submitted && $v.book.name.$error }"
            />
            <div
              v-if="submitted && !$v.book.name.required"
              class="invalid-feedback"
            >
              Name is required
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Book Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              class="form-control"
              v-model="book.price"
              :class="{ 'is-invalid': submitted && $v.book.price.$error }"
            />
            <div
              v-if="submitted && !$v.book.price.required"
              class="invalid-feedback"
            >
              Price is required
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Add Book</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      book: {},
      error: false,
      submitted: false,
      success: false,
      message: "",
      validationErrors: "",
    };
  },
  validations: {
    book: {
      name: { required },
      price: { required },
    },
  },
  methods: {
    addBook() {
      this.submitted = true;
      axios
        .post("/api/books", this.book)
        .then((response) => {
          this.message = response.data;
          this.success = true;
          this.$router.push({ name: "book.list" });
        })
        .catch((errors) => {
          if (errors.response.status == 422) {
            this.validationErrors = Object.values(
              errors.response.data.errors
            ).flat();
          }

          this.$v.$touch();
          if (this.$v.$invalid) {
            return;
          }
          this.error = true;
        });
    },
  },
};
</script>
