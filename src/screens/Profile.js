import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Profile extends Component {
	constructor(props) {
		super(props);
		console.log(props.userInfo.email);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Profile</Text>
				<Text style={styles.welcome}>Hola {this.props.userInfo.email}!</Text>
				<TouchableOpacity onPress={() => this.props.logout()}>
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
		width: "100%",
		height: "100%",
		backgroundColor: "white",
	},
	welcome: {
		margin: 15,
	},
});

export default Profile;
