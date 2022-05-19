import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.heading}>
					<Text style={styles.title}>Login</Text>
					<Text style={styles.subtitle}>Enter your email and password</Text>
				</View>

				<View>
					<View style={styles.inputView}>
						<MaterialIcons
							name="alternate-email"
							size={24}
							color="black"
							style={styles.inputIcon}
						/>
						<TextInput placeholder="email" style={styles.input} primary="green" />
					</View>
					<View style={styles.inputView}>
						<MaterialIcons
							name="lock-outline"
							size={24}
							color="black"
							style={styles.inputIcon}
						/>
						<TextInput placeholder="password" style={styles.input} />
					</View>
				</View>
				<LinearGradient style={styles.gradient} colors={["#537A96", "#659DA6"]}>
					<TouchableOpacity
						style={styles.submit}
						onPress={() =>
							this.props.navigation.navigate("HomeNav", { screen: "Home" })
						}
					>
						<Text style={styles.signInText}>SIGN IN</Text>
					</TouchableOpacity>
				</LinearGradient>
				<View
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: 8,
					}}
				>
					<Text>Not registered?</Text>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("Register")}
						style={styles.createAccount}
					>
						<Text style={{ fontWeight: 700 }}>Create an account</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
		width: "100%",
		height: "100%",
		backgroundColor: "white",
	},
	heading: {
		position: "relative",
		right: 25,
		marginBottom: 3,
		textAlign: "left",
	},
	title: { fontSize: 35, fontWeight: 750, margin: 4 },
	subtitle: { color: "#5C5C5C", marginLeft: 6 },
	inputView: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 9,
		borderWidth: 1,
		borderColor: "#D4D4D4",
		borderRadius: 8,
		margin: 5,
	},
	inputIcon: {
		margin: 10,
	},
	input: {
		padding: 10,
		borderRadius: 5,
		outlineStyle: "none", //ver si rompe
	},
	submit: {
		borderRadius: 5,
		padding: 10,
		textAlign: "center",
	},
	gradient: {
		borderRadius: 5,
		width: 230,
	},
	signInText: {
		color: "white",
		fontWeight: 500,
	},
	createAccount: {
		padding: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#D4D4D4",
		width: 230,
		textAlign: "center",
	},
});

export default Login;
