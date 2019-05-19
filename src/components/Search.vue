<template>
<div class="wrapper">
    <label class="label-search">
        Найти
        <input type="text" v-on:keyup.enter="show" v-model="search" class="form-control input-search">
        <div v-show="showLivesearch" class="livesearch">
            <a class="livesearch__links" :key="index" v-for="(list, index) in sortList">{{list.name}}</a>
        </div>
    </label>
</div>
</template>

<script>
	export default {
		props: ["arrList"],
		data(){
			return {
               search:"",
               filteredList:[],
               showLivesearch: false
			}
        },
        computed: {
            sortList() {
                this.showLivesearch = this.search.length > 1 ? true : false;
                this.filteredList = this.arrList.filter(list => list.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);

                return this.filteredList;
            },
        },
		methods: {
            show() {
                this.$emit("show", this.filteredList);
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
    
</style>
