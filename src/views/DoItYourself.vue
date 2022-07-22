<template>
	<v-container>
		<div class="font-weight-bold text-h4 text-center">How to Do It?</div>
		<v-expansion-panels variant="popout" class="my-4">
			<v-expansion-panel bg-color="secondary" rounded class="mb-4">
				<v-expansion-panel-title class="text-tertiary">
					Things You Need
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<v-table fixed-header density="compact" style="background-color: transparent;">
						<thead class="font-weight-bold border">
							<tr>
								<td>Item</td>
								<td>Qty</td>
							</tr>
						</thead>
						<tbody  v-for="item in materials">
							<tr>
								<td>{{ item.name }}</td>
								<td>{{ item.qty }}</td>
							</tr>
						</tbody>
					</v-table>
				</v-expansion-panel-text>
			</v-expansion-panel>
			<v-expansion-panel bg-color="secondary" rounded class="mb-4">
				<v-expansion-panel-title class="text-tertiary">
					Circuit Blueprint
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<v-img :src="require('../assets/smart-dustbin/circuit.jpg')"></v-img>
				</v-expansion-panel-text>
			</v-expansion-panel>
			<v-expansion-panel bg-color="secondary" rounded class="mb-4">
				<v-expansion-panel-title class="text-tertiary">
					Code
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<code-editor
						:read_only="true"
						:wrap_code="true"
						:display_language="false"
						width="100%"
						:value="code"
					>
					</code-editor>
				</v-expansion-panel-text>
			</v-expansion-panel>
			<a href="https://www.tinkercad.com/things/hpLohqvoLMH-smart-dustbin/editel?sharecode=Qeso8LHAVkyD1jBszUFc0TVCKbiNKEF4llwStOIjfEs">
				<v-btn color="tertiary" target="_blank">Visit Tinkercad</v-btn>
			</a>
		</v-expansion-panels>
	</v-container>
</template>

<script>
	import CodeEditor from "simple-code-editor";
	import code from "!raw-loader!../assets/code.txt";
	export default {
		name: "DoItYourself",
		components: {
			CodeEditor,
		},
		data() {
			return {
				materials: [
					{
						name: "Arduino Uno R3 with USB Cable",
						qty: 1
					},
					{
						name: "Ultrasonic Distance Sensor",
						qty: 2
					},
					{
						name: "Positional Micro Servo",
						qty: 1
					},
					{
						name: "Red LED",
						qty: 1
					},
					{
						name: "Yellow LED",
						qty: 1
					},
					{
						name: "Green LED",
						qty: 1
					},
					{
						name: "Resistor",
						qty: 3
					},
					{
						name: "Alarm",
						qty: 1
					},
					{
						name: "Breadboard",
						qty: 1
					},
					{
						name: "Jumper Wire(Male & Female)",
						qty: 20
					},
					{
						name: "Container/Dustbin ",
						qty: 1
					},
				],
				code,
			};
		},
	};
</script>
