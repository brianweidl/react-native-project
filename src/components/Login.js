import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mail: "",
			password: "",
		};
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
						<TextInput
							placeholder="email"
							style={styles.input}
							onChangeText={(text) => this.setState({ mail: text })}
						/>
					</View>
					<View style={styles.inputView}>
						<MaterialIcons
							name="lock-outline"
							size={24}
							color="black"
							style={styles.inputIcon}
						/>
						<TextInput
							placeholder="password"
							secureTextEntry={true}
							style={styles.input}
							onChangeText={(text) => this.setState({ password: text })}
						/>
					</View>
				</View>
				<LinearGradient style={styles.gradient} colors={["#537A96", "#659DA6"]}>
					<TouchableOpacity
						style={styles.submit}
						onPress={() => this.props.login(this.state.mail, this.state.password)}
					>
						<Text style={styles.signInText}>SIGN IN</Text>
					</TouchableOpacity>
				</LinearGradient>
				{this.props.loginErr ? <Text>Error: {this.props.loginErr}</Text> : null}
				<View
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: 5,
					}}
				>
					<Text>Not registered?</Text>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("Register")}
						style={styles.createAccount}
					>
						<Text style={{ fontWeight: "700" }}>Create an account</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => this.props.loginDeUna()}>
					<Text>Logearte de una</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		backgroundColor: "white",
	},
	heading: {
		position: "relative",
		right: 25,
		marginBottom: 5,
		textAlign: "left",
	},
	title: { fontSize: 35, fontWeight: "700", margin: 4 },
	subtitle: { color: "#5C5C5C", marginLeft: 6 },
	inputView: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#D4D4D4",
		borderRadius: 8,
		margin: 8,
	},
	inputIcon: {
		margin: 10,
	},
	input: {
		padding: 10,
		borderRadius: 5,
	},
	submit: {
		borderRadius: 5,
		padding: 10,
		textAlign: "center",
	},
	gradient: {
		borderRadius: 5,
		width: 230,
		margin: 10,
	},
	signInText: {
		color: "white",
		fontWeight: "500",
	},
	createAccount: {
		padding: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#D4D4D4",
		width: 230,
		textAlign: "center",
		margin: 8,
	},
});

export default Login;
