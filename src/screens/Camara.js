import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { db } from "../firebase/config";

class Camara extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: "",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg",
		};
	}

	addPost() {
		db
			.collection("posts")
			.add({
				description: this.state.description,
				image: this.state.image,
				likes: [],
			})
			.then((res) => console.log(res))
			.catch((e) => console.log(e));
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.inputView}
					onChangeText={(text) => this.setState({ description: text })}
				/>
				<TouchableOpacity onPress={() => this.addPost()}>
					<Text>Agregar Post</Text>
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
	inputView: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#D4D4D4",
		borderRadius: 8,
		margin: 8,
	},
});

export default Camara;
