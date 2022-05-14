import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Login</Text>

				<TextInput style={styles.input} />
				<TextInput style={styles.input} />
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("Register")}
				>
					<Text>Ir a registro</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.submit}
					onPress={() =>
						this.props.navigation.navigate("HomeNav", { screen: "Home" })
					}
				>
					<Text>Logearte</Text>
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
		gap: 20,
		height: 500,
	},
	input: {
		borderWidth: 1,
		borderColor: "black",
		padding: 2,
		borderRadius: 5,
	},
	submit: {
		borderWidth: 1,
		borderColor: "#007aff",
		borderRadius: 5,
		padding: 4,
	},
});

export default Login;
