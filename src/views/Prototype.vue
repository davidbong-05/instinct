<template>
	<v-card color="transparent">
		<v-card-title class="text-center justify-center py-6">
			<div class="font-weight-bold text-h4">Smart Dustbin Demo</div>
		</v-card-title>

		<v-tabs v-model="tab" background-color="transparent" grow>
			<v-tab
				v-for="item in items"
				:key="item"
				:value="item"
				class="text-tertiary"
			>
				{{ item.title }}
			</v-tab>
		</v-tabs>

		<v-window v-model="tab">
			<v-window-item v-for="item in items" :key="item" :value="item">
				<v-card color="secondary" class="d-flex justify-center pa-3 mb-6" flat>
					<iframe
						:src="item.link"
                        width="100%"
                        height="480"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					>
					</iframe>
				</v-card>
			</v-window-item>
		</v-window>
	</v-card>
</template>

<script>
	export default {
		name: "Prototype",
		data() {
			const items = [
				{
					title: "Introduction",
					link: "https://www.youtube.com/embed/zWCOfSwC3fU",
				},
                {
					title: "Capacity reaches 80%",
					link: "https://www.youtube.com/embed/ov6qA-xORMU",
				},
                {
					title: "Maintenance Process",
					link: "https://www.youtube.com/embed/MX-VfWd1CvM",
				}
			];
			return {
				tab: items[0].title,
				items,
			};
		},
	};
</script>
