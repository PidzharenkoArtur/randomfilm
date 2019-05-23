<template>
	<section v-if=false class="search-film">
		<div class="row">
			<div class="col col-md-12">
				<h1 class="search-film__header">Fly to choose a movie?</h1> 
			</div>
		</div>
		<div class="row">
			<button type="submit" class="btn btn-primary search-film__button">Drive</button>
		</div>
	</section>	
</template>

<script>
	export default {
		props: [],
		data() {
			return {
               
			}
        },
        computed: {
           
        },
		methods: {
            
		}
    }	
</script>

<style scope>
	.search-film {
		margin: 0;
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	margin-right: -50%;
    	transform: translate(-50%, -50%)
	}
	.search-film__header {
		text-align: center;
    	text-transform: uppercase;
    	padding-bottom: 30px;
    	color: white;
	}
	
	.search-film__button:hover{
		border:2px solid #007bff!important;
	}
	.search-film__button {
		background: 0!important;
		color: white!important;
		width: 300px!important;
		text-transform: uppercase;
		text-align: center;
		border: 2px solid white!important;
		margin: 0 auto;
		font-size: 25px!important;
	}
	
</style>
