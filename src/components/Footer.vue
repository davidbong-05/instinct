<template>
	<v-footer app bottom fixed class="pa-0">
		<div class="text-center text-white w-100" style="background-color: #358673">
			<blockquote class="font-italic">"Clean Nation with Smart Dustbin"</blockquote>
			&copy {{ new Date().getFullYear() }} — Group Instinct. All Rights Reserved
		</div>
	</v-footer>
</template>

<script>
	export default {
		name: "Footer",
	};
</script>
