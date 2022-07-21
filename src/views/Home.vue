<template>
	<v-container>
		<ProblemStatement />
	</v-container>
</template>

<script>
	import ProblemStatement from '@/components/home/ProblemStatement.vue'
	export default {
		name: "Home",	
		components: {
			ProblemStatement,
		},
	};
</script>
