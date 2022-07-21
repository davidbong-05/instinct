<template>
	<v-container>
		<SmartDustbin />
		<ProblemStatement />
	</v-container>
</template>

<script>
	import ProblemStatement from '@/components/home/ProblemStatement.vue'
	import SmartDustbin from '@/components/home/SmartDustbin.vue'

	export default {
		name: "Home",	
		components: {
			ProblemStatement,
			SmartDustbin
		},
	};
</script>
