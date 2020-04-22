<template>
	<div>
		<v-snackbar 
        v-for="(snackbar,index) in snackbars.filter(s=>s.showing)"
         v-model="snackbar.showing" 
         :timeout="0" 
         :color="snackbar.color"
         :key="snackbar.text + Math.random()"
         :style="`bottom: ${index * 60}px`"
         >
          {{ snackbar.text }}
          <v-btn text @click="snackbar.showing = false">close</v-btn>
        </v-snackbar>
	</div>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		computed:{
			...mapState(["snackbars"])
		}
	}
</script>