<template>
	<v-row>
		<v-container>
			<SmartDustbin />
			<v-divider class="my-4"></v-divider>
			<ProblemStatement />
			<v-divider class="my-4"></v-divider>
			<MainFeatures />
			<v-divider class="my-4"></v-divider>
			<v-row class="my-2">
				<v-col md="4" sm="4" cols="12">
					<div class="font-weight-bold text-h6">Presented by:</div>
					<div class="d-flex justify-center mt-2">
						<v-img :src="require('../assets/logo-outlined.png')" height="75"></v-img>
					</div>
				</v-col>
				<v-col md="8" sm="8" cols="12">
					<div class="font-weight-bold text-h6">Supported by:</div>
					<div class="d-flex justify-center mt-2">
						<v-img :src="require('../assets/ytn_logo.png')" height="75"></v-img>
						<v-img :src="require('../assets/unimas_logo.png')" height="75"></v-img>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-row>
</template>

<script>
	import ProblemStatement from "@/components/home/ProblemStatement.vue";
	import SmartDustbin from "@/components/home/SmartDustbin.vue";
	import MainFeatures from "@/components/home/MainFeatures.vue";

	export default {
		name: "Home",
		components: {
			ProblemStatement,
			SmartDustbin,
			MainFeatures,
		},
	};
</script>
