// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
	theme: {
		themes: {
			light: {
				dark: false,
				colors: {
					primary: "#1A2421",
					secondary: "#FFF2CC",
					tertiary: "#4B6F44",
					accent: "#82B1FF",
					error: "#FF5252",
					info: "#607D3B",
					success: "#4CAF50",
					warning: "#FFC107",
					background: "#C5E0B4",
				},
			},
			options: {
				customProperties: true,
			},
		},
	},
});
