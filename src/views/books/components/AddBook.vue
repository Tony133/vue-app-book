<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { router } from '../../../routers';
import { useBooksStore } from '../../../stores';

let book = null;

const schema = Yup.object().shape({
    title: Yup.string()
        .required('title is required'),
    price: Yup.number()
        .required('price is required'),
	author: Yup.string()
		.required('author is required'),
});

async function onSubmit(values) {
    const booksStore = useBooksStore();
    try {
        await booksStore.create(values);
        await router.push('/books/list');
		console.log("Create Books successfully!")
    } catch (error) { 
		console.log(error);
	}
}

</script>
<template>
    <div class="card m-3">
        <h2 class="card-header">Add Book</h2>
        <div class="card-body">
			<Form @submit="onSubmit" :validation-schema="schema"  :initial-values="book" v-slot="{ errors, isSubmitting }">
                <div class="form-group">
                    <label>Title</label>
                    <Field name="title" type="text" class="form-control" :class="{ 'is-invalid': errors.title }" />
                    <div class="invalid-feedback">{{ errors.title }}</div>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <Field name="price" type="text" class="form-control" :class="{ 'is-invalid': errors.price }" />
                    <div class="invalid-feedback">{{ errors.price }}</div>
                </div>
				<div class="form-group">
                    <label>Author</label>
                    <Field name="author" type="text" class="form-control" :class="{ 'is-invalid': errors.author }" />
                    <div class="invalid-feedback">{{ errors.author }}</div>
                </div>
                <div class="form-group box-space">
                    <button class="btn btn-primary" :disabled="isSubmitting">
                        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        Add
                    </button>
                    <router-link to="/books/list" class="btn btn-link">Cancel</router-link>
                </div>
            </Form>
        </div>
	</div>
</template>
<style>
.form-group.box-space {
    margin-top: 20px;
}

</style>