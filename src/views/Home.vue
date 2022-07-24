<template>
	<v-container>
		<SmartDustbin />
		<v-divider class="my-4"></v-divider>
		<ProblemStatement />
		<v-divider class="my-4"></v-divider>
		<MainFeatures />
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
