<template>
	<v-container>
		<SmartDustbin />
		<v-divider class="my-4"></v-divider>
		<ProblemStatement />
		<v-divider class="my-4"></v-divider>
		<MainFeatures />
		<v-divider class="my-4"></v-divider>
		<div class="font-weight-bold text-h6">Presented by:</div>
		<div class="d-flex justify-center mt-2">
		<v-img :src="require('../assets/logo-outlined.png')" height=80></v-img>
		<v-img :src="require('../assets/unimas_logo.png')" height=80></v-img>
		</div>
	</v-container>
</template>

<script>
	import ProblemStatement from '@/components/home/ProblemStatement.vue'
	import SmartDustbin from '@/components/home/SmartDustbin.vue'
	import MainFeatures from '@/components/home/MainFeatures.vue'

	export default {
		name: "Home",	
		components: {
			ProblemStatement,
			SmartDustbin,
			MainFeatures,
		},
	};
</script>
