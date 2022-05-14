import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from "react-native";
class Register extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Registro </Text>
				<TextInput style={styles.input} />
				<TextInput style={styles.input} />
				<TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
					<Text>Ir al login</Text>
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
});

export default Register;
