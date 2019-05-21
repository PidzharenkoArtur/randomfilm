<template>
<div>
<search
	:arrList = "jsonBooks"
	@show = "showBooks"
/>
<div class="wrapper">
<table class="table table-bordered">
  <thead>
    <tr>
	  <th scope="col">Книги</th>
	  <th scope="col">Автор</th>
	  <th scope="col">Цена</th>
	  <th scope="col">Общая цена: {{sumCurrency}}</th>
    </tr>
  </thead>
  <tbody>
	<tr v-for="(book, index) in filteredBooks" :key="index">
	  <td>{{book.name}}</td>
	  <td>{{book.location}}</td>
	  <td>{{book.currency}}</td>
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
				jsonBooks,
				filteredBooks:jsonBooks
			}
		},
		methods: {
			showBooks(books) {
				this.filteredBooks = books;
            }
		},
		computed: {
			sumCurrency() {
				let sum = 0;
				
				for (let book of this.filteredBooks) {
					sum += book.currency;
				}

				return sum;
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