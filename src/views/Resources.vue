<template>
	<v-container>
		<v-list bg-color="secondary" class="pa-4" rounded>
			<v-list-item
				v-for="item in resources"
				:key="item"
				:value="item"
				:href="item.link"
				download
			>
			<v-list-item-icon :icon="item.icon" class="me-2"></v-list-item-icon>
			{{ item.name }}
			</v-list-item>
		</v-list>
	</v-container>
</template>

<script>
	export default {
		name: "Resources",
		data() {
			return {
				resources:[{
					icon: "mdi-file-pdf-outline",
					name: "Neo.pdf",
					link: "/resources/Neo.pdf",
				}]
			};
		},
	};
</script>
