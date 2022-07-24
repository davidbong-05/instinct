<template>
	<div class="font-weight-bold text-h4 text-center">Main Features</div>
	<v-carousel
		cycle
		hide-delimiters
		show-arrows="hover"
		class="mt-3"
		height="auto"
	>
		<v-carousel-item>
			<div class="font-weight-bold text-h6 text-tertiary text-center">
				{{ feat1.title }}
			</div>
			<v-row class="align-center">
				<v-col md="4" sm="4" cols="6">
					<v-img :src="feat1.src1"></v-img>
				</v-col>
				<v-col md="4" sm="4" cols="6">
					<v-img :src="feat1.src2"></v-img>
				</v-col>
				<v-col md="4" sm="4" cols="12">
					<v-list bg-color="secondary" rounded>
						<v-list-item
							class="py-0"
							density="compact"
							append-icon="mdi-contact"
						>
							<div class="text-subtitle-2 text-info">{{ feat1.text }}</div>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>
		</v-carousel-item>
		<v-carousel-item>
			<div class="font-weight-bold text-h6 text-tertiary text-center">
				{{ feat2.title }}
			</div>
			<v-row class="align-center">
				<v-col md="4" sm="4" cols="6">
					<v-img :src="feat2.src1"></v-img>
				</v-col>
				<v-col md="4" sm="4" cols="6">
					<v-img :src="feat2.src2"></v-img>
				</v-col>
				<v-col md="4" sm="4" cols="12">
					<v-list bg-color="secondary" rounded>
						<v-list-item
							class="py-0"
							density="compact"
							append-icon="mdi-contact"
						>
							<div class="text-subtitle-2 text-info">{{ feat2.text }}</div>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>
		</v-carousel-item>
		<v-carousel-item class="align-center">
			<div class="font-weight-bold text-h6 text-tertiary text-center">
				{{ feat3.title }}
			</div>
			<v-row class="align-center">
				<v-col md="2" sm="2" cols="0">
				</v-col>
				<v-col md="4" sm="4" cols="6">
					<v-img :src="feat3.src1"></v-img>
				</v-col>
				<v-col md="4" sm="4" cols="6">
					<v-img :src="feat3.src2" width="50" class="ms-4"></v-img>
					<v-list bg-color="secondary" rounded>
						<v-list-item
							class="py-0"
							density="compact"
							append-icon="mdi-contact"
						>
							<div class="text-subtitle-2 text-info">{{ feat3.text }}</div>
						</v-list-item>
					</v-list>
				</v-col>
				<v-col md="2" sm="2" cols="0">
				</v-col>
			</v-row>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
	export default {
		name: "MainFeatures",
		data() {
			return {
				feat1: {
					title: "Auto Open & Close Lid",
					src1: require("@/assets/smart-dustbin/feat1a.png"),
					src2: require("@/assets/smart-dustbin/feat1b.png"),
					text: "Secure Lid & Convenient",
				},
				feat2: {
					title: "Build-In Compressor",
					src1: require("@/assets/smart-dustbin/feat2a.png"),
					src2: require("@/assets/smart-dustbin/feat2b.png"),
					text: "Maximize used space",
				},
				feat3: {
					title: "Notification When Full",
					src1: require("@/assets/smart-dustbin/feat3a.png"),
					src2: require("@/assets/smart-dustbin/noti.webp"),
					text: "More efficient management",
				},
			};
		},
	};
</script>
