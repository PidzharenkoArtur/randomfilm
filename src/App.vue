<template>
	<div class="container video-bg">
		<div class="video-bg">
    <video width="100%" height="auto" preload="auto" autoplay="autoplay"
    loop="loop" >
        <source src="./components/video.mp4" type="video/mp4"></source>
    </video>
		</div>
        
		<information-film/>
	</div>
	
</template>
<script>
	import InformationFilm from './components/InformationFilm';

	export default {
		data() {
			return {
				
			}
		},
		components: {
			InformationFilm
		}
	}
</script>

<style scope>
	.video-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
	background:  black;
    background-size: cover;
}

.video-bg > video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%; 
    min-height: 100%;
    width: auto;
    height: auto; 
}

 @supports (object-fit: cover) {
     .video-bg > video {
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         object-fit: cover;
     }
 }	
</style>