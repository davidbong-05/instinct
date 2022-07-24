<template>
	<div class="font-weight-bold text-h4 text-center">
		Problems with Traditional Dustbin
	</div>
	<v-carousel cycle hide-delimiters show-arrows="hover" class="mt-3">
		<v-carousel-item v-for="item in problems" :key="item">
			<div class="font-weight-bold text-h6 text-tertiary text-center">{{ item.title }}</div>
			<v-row>
				<v-col md="6" sm="6" cols="12">
					<v-img :src="item.src"></v-img>
				</v-col>
				<v-col md="6" sm="6" cols="12">
					<v-list bg-color="secondary" rounded>
						<v-list-item
						v-for="text in item.text"
						:key="text"
						class="py-0"
						density="compact"
						>
							<div class="text-subtitle-2 text-info">{{text}}</div>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
	export default {
		name: "ProblemStatement",
		data() {
			return {
				problems: [
					{
						title:
							"People not utilize the rubbish bin properly & Dislike Segregating Their Garbage",
						src: require("@/assets/problems/problem1.png"),
						text: [
							"There is little information provided about waste segregation",
							"Lack of environment awareness",
							"Laziness",
						],
					},
					{
						title: "Dustbin Are Always Overflowing​",
						src: require("@/assets/problems/problem2.png"),
						text: [
							"Inconsistent trash volume making it is hard to maintain"
						],
					},
					{
						title: "Bad Dustbin Condition",
						src: require("@/assets/problems/problem3.png"),
						text: [
							"Open lid and the smell of garbage will attract wild animal to scavenge and make a mess around the area"
						],
					},
				],
			};
		},
	};
</script>
