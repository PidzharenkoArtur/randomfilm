<template>
	<section class="information-film">
		<div class="row">
			<div class="col col-md-12">
				<h1 class="information-film__header">{{movieData.title}}</h1> 
			</div>
		</div>
        <div class="row">
            <div class="col col-md-12 information-film__description">
                <div class="information-film__description-poster">
                    <img :src='movieData.poster' alt=""/>
                </div>
                <div class="information-film__characteristic">
                    <p>
                        Imdb: {{movieData.imdbRating}}
                    </p>
                    <p>
                        Genre: {{movieData.genre}}
                    </p>
                    <p>
                        Country: {{movieData.country}}
                    </p>
                    <p class="information-film__text">{{movieData.plot}}</p>  
                </div>
            </div>    
        </div>
		<div class="row">
			<button type="submit" @click="showRandomFilm" class="btn btn-primary search-film__button">Another movie</button>
		</div>
	</section>	
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

	export default {
		props: [],
		data() {
			return {
               
			}
        },
        created (){
            this.showRandomFilm();    
        },
        computed: {
            ...mapState([
                'movieData',
                "randomNumber"
            ])
        },
		methods: {
            ...mapActions([
                'getDataMovieAsync',
            ]),
            
            showRandomFilm() {
                this.getDataMovieAsync();
            }
		}
    }	
</script>

<style scope>
    .information-film__header {
        text-align: center;
        margin-bottom: 30px;
        color: white;
    }
    .information-film {
		margin: 0;
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	margin-right: -50%;
    	transform: translate(-50%, -50%)
	}
    .information-film__description {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 30px;
        color: white;
    }
    
    .information-film__description-poster {
        margin-right: 30px;
    }
    .information-film__characteristic {
        margin-left: 30px;
        font-size: 18px;
    }
    .information-film__text {
        word-wrap: break-word;
        max-width: 400px;
    }
    .information-film__description-poster img {
        width: 250px;
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
