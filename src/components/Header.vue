<template>
	<v-app-bar fixed shrink-on-scroll color="tertiary">
		<v-app-bar-title>
			<v-img :src="require('../assets/logo-white.png')" width=100 />
		</v-app-bar-title>
		<v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
	</v-app-bar>

	<v-navigation-drawer v-model="drawer" bottom temporary location="right" color="#C5E0B4">
		<v-list bg-color="#C5E0B4">
			<v-list-item
				v-for="item in items"
				:key="item"
				active-color="primary"
				:to="item.link"
			>
				<v-list-item-icon :icon="item.icon" class="me-2" color="tertiary"></v-list-item-icon>
				<v-list-item-title  class="text-tertiary">{{ item.text }}</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				drawer: false,
				items: [
				{
					text: "Home",
					icon: "mdi-home",
					link: "/",
				},
				{
					text: "Prototype Demo",
					icon: "mdi-rocket-launch-outline",
					link: "/prototype",
				},
				{
					text: "Do It Yourself",
					icon: "mdi-creation",
					link: "/diy",
				},
				{
					text: "Resources",
					icon: "mdi-download-outline",
					link: "/resources",
				},
				{
					text: "About",
					icon: "mdi-information-outline",
					link: "/about",
				},
				{
					text: "Contact",
					icon: "mdi-smart-card-outline",
					link: "/contact",
				},]
			};
		},
	};
</script>