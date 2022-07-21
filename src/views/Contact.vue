<template>
	<v-container>
		<h2 class="mb-2">Our Contact</h2>
		<v-card
			v-for="member in members"
			class="mb-4"
			color="#C5E0B4"
			:image="bgImg"
			flat
		>
			<v-card-item>
				<v-row>
					<v-col cols="3">
						<v-img :src="member.image" style="border-radius: 50%"></v-img>
					</v-col>
					<v-col cols="9">
						<div class="text-h6 text-tertiary">{{ member.name }}</div>
						<div class="text-subtitle-2 text-info">{{ member.faculty }}</div>
						<div class="text-subtitle-2 text-info">{{ member.major }}</div>
						<div>
							<a :href="'mailto:' + member.email">{{ member.email }}</a>
						</div>
					</v-col>
				</v-row>
			</v-card-item>
		</v-card>
		<h2 class="mb-2">Our Mentor's Contact</h2>
		<v-card class="mb-4" color="#C5E0B4" :image="bgImg" flat>
			<v-card-item>
				<v-row>
					<v-col cols="3">
						<v-img :src="mentor.image" style="border-radius: 50%"></v-img>
					</v-col>
					<v-col cols="9">
						<div class="text-h6 text-tertiary">{{ mentor.name }}</div>
						<div>
							<div class="text-subtitle-2">{{ mentor.faculty }}</div>
							<a :href="'mailto:' + mentor.email">{{ mentor.email }}</a>
						</div>
					</v-col>
				</v-row>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		name: "Contact",
		data() {
			return {
				bgImg: require("../assets/bg-img.png"),
				mentor: {
					name: "Dr. Suriati",
					role: "",
					image: "https://ui-avatars.com/api/?name=Suriati",
					faculty: "Faculty of Computer Science & Information Technology",
					email: "Suriati@gmail.com",
				},
				members: [
					{
						name: "Connie Ong",
						role: "",
						image: "https://ui-avatars.com/api/?name=Connie+Ong",
						faculty: "Faculty of Economy & Business",
						major: "Finance",
						email: "connieong@gmail.com",
					},
					{
						name: "David Bong",
						role: "",
						image: "https://ui-avatars.com/api/?name=David+Bong",
						faculty: "Faculty of Computer Science & Information Technology",
						major: "Software Engineering",
						email: "davidbong05@gmail.com",
					},
					{
						name: "Husna",
						role: "",
						image: "https://ui-avatars.com/api/?name=Husna",
						faculty: "Faculty of Computer Science & Information Technology",
						major: "Software Engineering",
						email: "husna@gmail.com",
					},
				],
			};
		},
	};
</script>
