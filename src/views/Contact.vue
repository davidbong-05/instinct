<template>
	<v-container>
		<h2 class="mb-2">Our Contact</h2>
		<v-row class="d-md-flex">
			<v-col md="4" sm="4" cols="12" v-for="member in members" class="">
				<v-card class="mb-4" color="secondary" flat rounded  height="100%">
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
									<a class="text-decoration-none" :href="'mailto:' + member.email">{{ member.email }}</a>
								</div>
							</v-col>
						</v-row>
					</v-card-item>
				</v-card>
			</v-col>
		</v-row>
		<h2 class="my-2">Our Mentor's Contact</h2>
		<v-card class="mb-4" color="tertiary" flat>
			<v-card-item>
				<v-row class="d-flex align-center">
					<v-col md="1" sm="1" cols="0" class="py-0"></v-col>
					<v-col md="7" sm="7" cols="9">
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
						image: require("../assets/connie.png"),
						faculty: "Faculty of Economics & Business",
						major: "Major in Accounting",
						email: "connie.0ng1999@gmail.com",
					},
					{
						name: "David Bong",
						image: require("../assets/david.png"),
						faculty: "Faculty of Computer Science & Information Technology",
						major: "Major in Software Engineering",
						email: "davidbong05@gmail.com",
					},
					{
						name: "Nur Husna Aqila",
						image: require("../assets/husna.png"),
						faculty: "Faculty of Computer Science & Information Technology",
						major: "Major in Multimedia Computing",
						email: "husnasahabudin97@gmail.com",
					},
				],
			};
		},
	};
</script>
