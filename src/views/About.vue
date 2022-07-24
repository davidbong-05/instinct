<template>
	<v-container>
		<div class="font-weight-bold text-h4 text-center">About Us</div>
		<v-card color="secondary" class="my-3" contained>
			<v-card-text class="text-justify">
				<p>
					<span class="font-weight-bold">Group Instinct</span> was founded by
					three undergrad and a senior lecturer from
					<span class="font-weight-bold">
						University Malaysia Sarawak (UNIMAS)
					</span>
					in the early April 2022. The group was form to take on the challenge
					of <span class="font-weight-bold">MyBF Business Pitch Idea</span> by
					<span class="font-weight-bold font-italic"
						>Yayasan Tenaga Nasional (YTN)</span
					>.
				</p>
				<p class="mt-1">
					&nbsp; &nbsp; The group brainstormed various of ideas, and ultimately
					choose <span class="font-weight-bold">Smart Dustbin</span> as their
					business product. Seeking to save the environment and to develop a
					solution with current pollution problem. The groups carefully planed
					the details and specification of the Smart Dustbin. With the support
					and the guidance of their lovely mentor, they made it into the final
					stage.
				</p>
			</v-card-text>
			<v-card-item class="d-flex justify-center pa-3 mb-6 text-center">
				<iframe
					width="100%"
					height="350"
					src="https://www.youtube.com/embed/YilgDHuVqas"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<span class="tex-caption text-medium-emphasis"
					>Initial development stage of Smart Dustbin. (Credit to Dr. Suriati for making this video 😂)</span
				>
			</v-card-item>
		</v-card>
		<div class="font-weight-bold text-h6">Presented by:</div>
		<div class="d-flex justify-center mt-2">
			<v-img
				:src="require('../assets/logo-outlined.png')"
				height="80"
				alt="Group Instinct Logo"
			></v-img>
			<v-img
				:src="require('../assets/unimas_logo.png')"
				height="80"
				alt="UNIMAS Logo"
			></v-img>
		</div>
	</v-container>
</template>
<script>
	export default {
		name: "About",
	};
</script>
<style scoped>
	.v-card-text {
		font-family: "Courier New", Courier, monospace;
		font-size: medium;
	}
</style>
