<template>
    <div>
		<div class="row">
			<div class="col col-md-12">
				<h1 class="information-film__header">{{movieData.Title}}</h1> 
			</div>
		</div>
        <div class="row">
            <div class="col col-md-12 information-film__description">
                <div class="information-film__description-poster">
                    <h2>{{movieData.Title}}</h2>
                    <img :src='movieData.Poster' alt=""/>
                </div>
                <div class="information-film__characteristic">
                    <p>
                        Imdb: {{movieData.ImdbRating}}
                    </p>
                    <p>
                        Genre: {{movieData.Genre}}
                    </p>
                    <p>
                        Country: {{movieData.Country}}
                    </p>
                    <p class="information-film__text">{{movieData.Plot}}</p>  
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

	export default {
        name: 'home',
		props: [],
		data() {
			return {
			}
        },
        computed: {
            ...mapState([
                'movieData',
            ])
        },
    }	
</script>

<style scope>
 
</style>
