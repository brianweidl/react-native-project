import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			mail: "",
			password: "",
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.heading}>
					<Text style={styles.title}>Register</Text>
					<Text style={styles.subtitle}>Complete to continue</Text>
				</View>

				<View>
					<View style={styles.inputView}>
						<MaterialIcons
							name="account-circle"
							size={24}
							color="black"
							style={styles.inputIcon}
						/>
						<TextInput
							placeholder="Name"
							style={styles.input}
							onChangeText={(text) => this.setState({ name: text })}
							primary="green"
						/>
					</View>
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
							primary="green"
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
							primary="green"
							onChangeText={(text) => this.setState({ password: text })}
						/>
					</View>
					{/* <View style={styles.inputView}>
						<MaterialIcons
							name="lock-outline"
							size={24}
							color="black"
							style={styles.inputIcon}
						/>
						<TextInput placeholder="Confirm Password" style={styles.input} />
					</View> */}
				</View>
				<LinearGradient style={styles.gradient} colors={["#537A96", "#659DA6"]}>
					<TouchableOpacity
						style={styles.submit}
						onPress={() =>
							this.props.register(
								this.state.mail,
								this.state.password,
								this.state.name
							)
						}
					>
						<Text style={styles.signUpText}>SIGN UP</Text>
					</TouchableOpacity>
				</LinearGradient>
				{this.props.registerErr ? (
					<Text>Error: {this.props.registerErr}</Text>
				) : null}
				<View
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: 5,
					}}
				>
					<Text>Already have an account?</Text>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("Login")}
						style={styles.loginNav}
					>
						<Text style={{ fontWeight: "700" }}>Log in here!</Text>
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
		width: "100%",
		height: "100%",
		backgroundColor: "white",
	},
	heading: {
		position: "relative",
		right: 50,
		marginBottom: 3,
		textAlign: "left",
	},
	title: { fontSize: 35, fontWeight: "700", margin: 4 },
	subtitle: {
		color: "#5C5C5C",
		marginLeft: 6,
	},
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
		margin: 5,
	},
	signUpText: {
		color: "white",
		fontWeight: "500",
	},
	loginNav: {
		width: 230,
		textAlign: "center",
		margin: 5,
	},
});
export default Register;
