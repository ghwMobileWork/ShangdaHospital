<template>
	<button type="default" @click="cli">sss</button>
</template>

<script>
	import request from "@/utils/request";
	export default {
		data() {
			return {
				a:[]
		}
		},
		methods: {
			
			cli(){
				
				console.log(this.a.valueOf())
			}
		}
	}
	
</script>

<style >
	
</style>
