import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { db } from "../firebase/config";

class Profile extends Component {
	constructor(props) {
		super(props);
		console.log(props.userInfo.email);
	}

	componentDidMount() {
		db
			.collection("users")
			.where("mail", "==", this.props.userInfo.email)
			.get()
			.then((user) => console.log(user));
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.circle}></View>
				<Image
					style={styles.profilePicture}
					source={{
						uri: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=",
					}}
				/>
				<Text style={styles.welcome}>{this.props.userInfo.email}</Text>
				<View style={styles.options}>
					<TouchableOpacity
						style={styles.logOut}
						onPress={() => this.props.logout()}
					>
						<Text style={styles.logOutText}>Log Out</Text>
						<Text>{">"}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		height: "100%",
		backgroundColor: "white",
	},
	circle: {
		position: "absolute",
		top: -300,
		height: 500,
		width: 500,
		backgroundColor: "#537A96",
		borderRadius: "50%",
	},
	profilePicture: {
		height: 150,
		width: 150,
		borderRadius: "50%",
		marginTop: 150,
		borderWidth: 1,
		borderColor: "#D4D4D4",
	},
	welcome: {
		fontSize: 20,
		marginTop: 50,
	},
	options: { marginTop: 50 },
	logOut: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: 200,
		backgroundColor: "#EBEBEB",
		borderRadius: 5,
		padding: 10,
	},
	logOutText: {
		fontWeight: "600",
	},
});

export default Profile;
