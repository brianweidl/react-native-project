import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Profile</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
					<Text>Log Out</Text>
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
});

export default Profile;
