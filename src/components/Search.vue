<template>
<div class="wrapper">
    <label class="label-search">
        Найти
        <input type="text" v-on:keyup.enter="showList" v-model="search" class="form-control input-search">
        <div v-show="showLivesearch" class="livesearch">
            <a class="livesearch__links" @click="showListItem(list)" :key="index" v-for="(list, index) in sortList">{{list.name}}</a>
        </div>
    </label>
</div>
</template>

<script>
	export default {
		props: ["arrList"],
		data() {
			return {
               search:"",
               filteredList:[],
               showLivesearch: false,
			}
        },
        computed: {
            sortList() {
                this.showLivesearch = this.search.length > 1 ? true : false;
                this.filteredList = this.arrList.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);

                return this.filteredList;
            },
        },
		methods: {
            showList() {
                this.$emit("show", this.filteredList);
                this.showLivesearch = false;
            },
            showListItem(item) {
                this.search = item.name;
                this.$emit("show", this.sortList);
                this.showLivesearch = false;
            }
        },
	}
	
</script>
<style scope>
    .label-search{
        margin-top:20px;
        margin-bottom:150px;
    }
    .livesearch {
        position: absolute;
        width: 200px;
        border: 1px solid rgb(165, 172, 178);
    }
    .livesearch__links {
        display: block;
    }
    .livesearch__links:hover {
        background: grey;
    }
    
</style>
