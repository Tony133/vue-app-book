<script setup>
	import { storeToRefs } from 'pinia';
	import { useBooksStore } from '../../../stores';
	
	const booksStore = useBooksStore();
	const { books } = storeToRefs(booksStore);
	
	booksStore.getAll();
</script>	
<template>
    <div class="card m-3">
        <h2 class="card-header">ListBook</h2>
        <div class="card-body">
			<router-link to="/books/add" class="btn btn-sm btn-success mb-2 btn-add">Add Book</router-link>
			<hr />
			<table class="table table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Author</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<template v-if="books.length">
						<tr v-for="book in books" :key="book.id">
							<td>{{ book.id }}</td>
							<td>{{ book.title }}</td>
							<td>{{ book.price }}</td>
							<td>{{ book.author }}</td>
							<td>
								<router-link :to="`/books/edit/${book.id}`" class="btn btn-sm btn-primary mr-1 btn-edit">Edit</router-link>
								<button @click="booksStore.delete(book.id)" class="btn btn-sm btn-danger btn-delete" :disabled="book.isDeleting">
									<span v-if="book.isDeleting" class="spinner-border spinner-border-sm"></span>
									<span v-else>Delete</span>
								</button>
							</td>
						</tr>
					</template>
					<tr v-if="books.loading">
						<td colspan="4" class="text-center">
							<span class="spinner-border spinner-border-lg align-center"></span>
						</td>
					</tr>
					<tr v-if="books.error">
						<td colspan="4">
							<div class="text-danger">Error loading books: {{ books.error }}</div>
						</td>
					</tr>         
				</tbody>
			</table>
		</div>
	</div>
</template>
<style>
a.btn.btn-sm.btn-primary.mr-1.btn-edit {
    margin-right: 10px;
    padding: 10px 20px;
}

button.btn.btn-sm.btn-danger.btn-delete {
    padding: 10px 20px;
}

a.btn.btn-sm.btn-success.mb-2.btn-add {
    padding: 10px 20px;
}
</style>