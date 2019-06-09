<template>
    <div>
        <section v-if="look" class="information-film">
            <film/>
            <div class="row">
            <div class="information-film__buttons">
                <button type="submit" @click="addFavorites" class="btn btn-primary film__button">+</button>
			    <button type="submit" @click="showRandomFilm" class="btn btn-primary film__button search-film__button">Another movie</button>
                <router-link :to="{ name: 'favorites'}">
                    <button type="submit" class="btn btn-primary film__button go-film__button">-><span>{{numberFavorites}}</span></button>
                </router-link>
            </div>
		</div>
        </section>
        <section v-if="!look" class="preloader">
            <p class="preloader__text">DOWNLOAD</p>
        </section>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    import Film from './Film'

	export default {
        name: 'home',
		props: [],
		data() {
			return {
                look:true
			}
        },
        components: {
            Film
        },
        created () {
            this.controlListFilmDownload();
            this.showRandomFilm();
            this.setNumberFavoritesShow();        
            },
        computed: {
            ...mapState([
                'numberFavorites',
                'listFilm'
            ])
        },
		methods: {
            ...mapMutations([
               'setNumberFavoritesShow',
               'setNumberFavoritesAdd',
               'setNumberFavorites',
               'controlListFilmDownload',
               'controlListFilmAdd'
            ]),

            ...mapActions([
                'getFilm',
            ]),
            getRandomFilmId () {
                let max, min, iter, iterMax, randomNumber;

                iterMax      = 4;
                iter         = 0;
                max          = 0;
                min          = 9;
                randomNumber = "";
          
                while(iter < iterMax) {
                    randomNumber += Math.floor(Math.random() * (max - min)) + min;
                    iter++;  
                }

                return "&i=tt128" + randomNumber;
            },
      
            showRandomFilm() {
                this.isLook();
                this.getFilm(this.getRandomFilmId());

                setTimeout(()=> {
                    this.isLook();
                }, 1000);
            },

            addFavorites() {
                this.setNumberFavoritesAdd();
                this.controlListFilmAdd();
            },
            isLook () {
                this.look = !this.look;
            },
		}
    }	
</script>

<style scope>
    .information-film__header {
        text-align: center;
        margin-bottom: 30px;
        color: white;
    }
    .information-film, .preloader {
		margin: 0;
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	margin-right: -50%;
    	transform: translate(-50%, -50%)
	}
    .information-film__description {
        margin-bottom: 30px;
        color: white;
    }
    
    .information-film__description-poster {
        position: relative;
        width: 250px;
        border: 1px solid white;
        background: white;
        max-width: 0 auto;
        
    }
    .information-film__characteristic {
        margin-left: 30px;
        font-size: 18px;
    }
    .information-film__text {
        word-wrap: break-word;
        max-width: 400px;
    }
    .information-film__description-poster h2 {
        position: absolute;
        color: black;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 1;
        font-size: 20px;
    }
    .information-film__description-poster img {
        position: relative;
        width: 248px;
        min-height: 335px;
        z-index: 2;
    }
    .film__button:hover {
		border:2px solid #007bff!important;
	}
	.film__button, .preloader__text {
		background: 0!important;
		color: white!important;
		text-transform: uppercase;
		text-align: center;
		border: 2px solid white!important;
		margin: 0 auto;
		font-size: 25px!important;
	}
    .information-film__buttons {
        display: flex;
        width: 530px;
        margin: 0 auto;
    }  
    .search-film__button {
        width: 300px!important;
    } 
    .go-film__button {
        position: relative;
    }
    .go-film__button span {
        display: block;
        position: absolute;
        bottom: -12px;
        right: -11px;
        font-size: 14px;
        background-color: #007bff;
        min-width: 23px;
        border-radius: 50%;
    }  
    .preloader__text {
       border: 0px solid white!important;
    }
</style>
