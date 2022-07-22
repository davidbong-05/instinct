<template>
	<v-container>
		<h2 class="mb-2">Our Contact</h2>
		<v-card v-for="member in members" class="mb-4" color="secondary" flat rounded>
			<v-card-item>
				<v-row class="d-flex align-center">
					<v-col cols="3">
						<v-img :src="member.image"></v-img>
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
		<v-card class="mb-4" color="tertiary" flat>
			<v-card-item>
				<v-row class="d-flex align-center">
					<v-col cols="9">
						<div class="text-h6">{{ mentor.name }}</div>
						<div class="text-subtitle-2  text-secondary">
							<div>{{ mentor.faculty }}</div>
							<div>{{ mentor.role }}</div>
							<a :href="'mailto:' + mentor.email">{{ mentor.email }}</a>
						</div>
					</v-col>
					<v-col cols="3">
						<v-img :src="mentor.image"></v-img>
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
				mentor: {
					name: "Ts. Dr Suriati Khartini",
					role: "Senior Lecturer",
					image: require("../assets/mentor.png"),
					faculty: "Faculty of Computer Science & Information Technology",
					email: "jskhartini@unimas.my",
				},
				members: [
					{
						name: "Connie Ong",
						role: "",
						image: require("../assets/connie.png"),
						faculty: "Faculty of Economy & Business",
						major: "Accounting",
						email: "connie.0ng1999@gmail.com",
					},
					{
						name: "David Bong",
						role: "",
						image: require("../assets/david.png"),
						faculty: "Faculty of Computer Science & Information Technology",
						major: "Software Engineering",
						email: "davidbong05@gmail.com",
					},
					{
						name: "Nur Husna Aqila",
						role: "",
						image: require("../assets/husna.png"),
						faculty: "Faculty of Computer Science & Information Technology",
						major: "Multimedia Computing",
						email: "husnasahabudin97@gmail.com",
					},
				],
			};
		},
	};
</script>
