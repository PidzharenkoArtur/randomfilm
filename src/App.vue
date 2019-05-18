<template>
<div>
<search
	:arrBooks = "jsonBooks"
	@showBook = "showBooks"
/>
<div class="wrapper">
<table class="table table-bordered">
  <thead>
    <tr>
	  <th scope="col">Книга</th>
	  <th scope="col">Автор</th>
	  <th scope="col">Номер</th>
    </tr>
  </thead>
  <tbody>
  	<tr >
	  <td>{{nameBook}}</td>
	  <td>{{authorBook}}</td>
	  <td>{{numberBook}}</td>
	</tr>
  </tbody>
</table>
</div>
</div>
</template>
<script>
	import Search from './components/Search';
	import jsonBooks from "../Json/test.json";

	export default {
		data() {
			return {
				search: "",
				filteredBooks:[],
				jsonBooks: jsonBooks,
				nameBook: "",
				authorBook:"",
				numberBook:""
			}
		},
		methods: {
			showBooks(book) {
				console.log(book);
				this.nameBook = book.name;
				this.authorBook = book.location;
				this.numberBook = book.currency;
            }
		},			
		components: {
			Search
		}
	}
</script>

<style scope>
	.wrapper {
		width:940px;
		margin:auto;
	}
</style>