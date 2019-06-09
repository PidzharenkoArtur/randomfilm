<template>
    <div>
	<section v-if="look" class="information-film">
		<film/>
		<div class="row">
            <div class="favorite__buttons">
                <router-link :to="{ name: 'favorites'}">
                    <button type="submit" @click="deleteItem(indexListFilm)" class="btn btn-primary film__button" width="27px">-</button>
                </router-link>
                <router-link :to="{ name: 'favorites'}">
                    <button type="submit" class="btn btn-primary film__button go-film__button">-><span>{{numberFavorites}}</span></button>
                </router-link>
                <figure class="rating">
                    <figcaption class="rating__caption">your rating:</figcaption>
                    <div class="rating__list">
                        <input :id="'r' + item" type="radio" v-model="rating" :value="item" v-for="item in 5"  @click="saveFilmRating(item-1)" :key="item"/>
                        <label v-for="item in 5" :for="'r' + item" :key="'r' + item" class="rating__item" :class="[( (item -1) === indexRating ) ? 'rating__item--active' : '']">{{item}}</label>
                    </div>
                </figure>
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
		data() {
			return {
                rating:"",
                indexRating: -1,
                look: false
			}
        },
        components: {
            Film
        },
        created () {
            this.controlListFilmDownload();
            this.showFilm();
            this.setNumberFavoritesShow();
            
            this.indexRating = JSON.parse(localStorage.getItem("listFilm"))[this.indexListFilm].yourRating - 1;
            },
        computed: {
            ...mapState([
                'movieData',
                'numberFavorites',
                'listFilm',
                'indexListFilm'
            ]),
            getFilmId() {
                return "&i=" + this.$route.params.id;
            }
        },
		methods: {
            ...mapMutations([
               'setNumberFavoritesShow',
               'setNumberFavoritesDelete',
               'controlListFilm',
               'controlListFilmDelete',
               'controlListFilmDownload'
            ]),
            ...mapActions([
               'getFilm'
            ]),
            showFilm() {
                this.getFilm(this.getFilmId);

                setTimeout(()=> {
                    this.isLook();
                }, 1000);
            },
            deleteItem(index) {
               this.controlListFilmDelete();
               this.listFilm.splice(index, 1);

               localStorage.setItem('listFilm', JSON.stringify(this.listFilm));

               this.setNumberFavoritesDelete(); 
            },
            saveFilmRating(index) {
                this.indexRating = index;
                this.listFilm[this.indexListFilm].yourRating = this.indexRating + 1;
                localStorage.setItem('listFilm', JSON.stringify(this.listFilm));
            },
            isLook () {
                this.look = !this.look;
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
    .information-film, .preloader {
		margin: 0;
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	margin-right: -50%;
    	transform: translate(-50%, -50%)
	}
    .information-film__description {
        width: 840px;
        display: flex;
        margin-bottom: 30px;
        color: white;
    }
    
    .information-film__description-poster {
        margin-left: 30px;
        width: 250px;
        border: 1px solid white;
        background: white;
    }
    .information-film__characteristic {
        margin-left: 30px;
        font-size: 18px;
    }
    .information-film__text {
        word-wrap: break-word;
        max-width: 500px;
    }
    .information-film__description-poster img {
        width: 248px;
        min-height: 335px;
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
    .favorite__buttons {
        display: flex;
        width: 400px;
        margin: 0 auto;
        justify-content: space-around;
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
    .rating__list {
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }
    .rating__caption {
        color: white;
    }
    .rating__item {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        border: 1px solid white;
        display: inline-block;
        margin-right: 5px;
        color: white;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
    }
    .rating__item:hover {
        border-color: #007bff;
    }
    .rating__item--active{
        background: #007bff;
        border-color: #007bff;
    }
    input[type=radio] {
        visibility: hidden;
        position: absolute;
    }
</style>
