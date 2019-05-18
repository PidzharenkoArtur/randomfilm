<template>
<div class="wrapper">
    <label class="label-search">
        Найти книгу
        <input type="text" v-model="search" class="form-control input-search" v-on:input="sortbooks">
        <div v-show="showLivesearch" class="livesearch">
            <a class="livesearch__links" @click="showBooks(book, index)" :key="index" v-for="(book, index) in filteredBooks">{{book.name}}</a>
        </div>
    </label>
</div>
</template>

<script>
	export default {
		props: ["arrBooks"],
		data(){
			return {
               search:"" ,
               filteredBooks:[],
               showLivesearch: false
			}
		},
		methods: {
            sortbooks() {
                this.showLivesearch = this.search.length != 0 ? true : false;
                this.filteredBooks = this.arrBooks.filter(book => book.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
            },
            showBooks(book) {
                this.$emit("showBook", book);
                this.showLivesearch = false;
            }
        },
	}
	
</script>
<style scope>
    .label-search{
        margin-top:20px;
        margin-bottom:100px;
    }
    .livesearch {
        border: 1px solid rgb(165, 172, 178);
    }
    .livesearch__links {
        display: block;
    }
    .livesearch__links:hover {
        background: #495057;
    }
</style>
