<script setup>
	import { Form, Field } from 'vee-validate';
	import * as Yup from 'yup';
	import { useRoute } from 'vue-router';
	import { storeToRefs } from 'pinia';
	import { router } from '../../../routers';
	import { useBooksStore } from '../../../stores';
	
	const booksStore = useBooksStore();
	const route = useRoute();
	const id = route.params.id;
	let book = null;
	
	if (id) {
		({ book } = storeToRefs(booksStore));
		booksStore.getById(id);
	}

	const schema = Yup.object().shape({
		title: Yup.string()
			.required('title is required'),
		price: Yup.number()
			.required('price is required'),
		author: Yup.string()
			.required('author is required'),
	});
	
	async function onSubmit(values) {
		try {
            await booksStore.update(book.value.id, values)
			await router.push('/books/list');
			console.log("Update Books successfully!")
		} catch (error) { 
			console.log(error);
		}
	}
</script>
<template>
    <div class="card m-3">
        <h2 class="card-header">Edit Book</h2>
        <div class="card-body">
			<template v-if="!(book?.loading || book?.error)">
				<div class="card-body">
					<Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
						<div class="form-group">
							<label>Title</label>
							<Field name="title" type="text"  class="form-control" v-model="book[0].title" :class="{ 'is-invalid': errors.title }" />
							<div class="invalid-feedback">{{ errors.title }}</div>
						</div>
						<div class="form-group">
							<label>Price</label>
							<Field name="price" type="text"  class="form-control" v-model="book[0].price" :class="{ 'is-invalid': errors.price }" />
							<div class="invalid-feedback">{{ errors.price }}</div>
						</div>
						<div class="form-group">
							<label>Author</label>
							<Field name="author" type="text" class="form-control" v-model="book[0].author" :class="{ 'is-invalid': errors.author }" />
							<div class="invalid-feedback">{{ errors.author }}</div>
						</div>
						<!-- <div class="form-group">
							<label>Categories</label>
							<Field name="categories" type="text" class="form-control" v-model="book[0].categories" :class="{ 'is-invalid': errors.categories }" />
							<div class="invalid-feedback">{{ errors.categories }}</div>
						</div> -->
						<div class="form-group box-space">
							<button class="btn btn-primary" :disabled="isSubmitting">
								<span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
								Save
							</button>
							<router-link to="/books/list" class="btn btn-link">Cancel</router-link>
						</div>
					</Form>
				</div>
			</template>
			<template v-if="book?.loading">
				<div class="text-center m-5">
					<span class="spinner-border spinner-border-lg align-center"></span>
				</div>
			</template>
			<template v-if="book?.error">
				<div class="text-center m-5">
					<div class="text-danger">Error loading book: {{ book.error }}</div>
				</div>
			</template>
		</div>
	</div>
</template>
	