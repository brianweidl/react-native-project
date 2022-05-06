import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Comments from "./Comments";
import { db } from "../firebase/config";

class Home extends Component {
	constructor(props) {
		super(props);
	}

	addUser() {
		db
			.collection("users")
			.add({
				nombre: "Brian",
				Apellido: "Weidl",
			})
			.then((doc) => console.log(doc))
			.catch((err) => console.log(err));
	}
	getUsers() {
		db
			.collection("users")
			.get()
			.then((users) => {
				users.forEach((user) => console.log(user.data()));
			});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Soy Home</Text>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("Comments")}
				>
					<Text>Ir a comentarios</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.addUser()}>
					<Text>Agregar Usuario</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.getUsers()}>
					<Text>Ver Usuarios</Text>
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

export default Home;
