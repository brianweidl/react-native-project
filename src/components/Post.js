import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";

class Post extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Posteo</Text>
				<Image style={styles.image} source={{ uri: this.props.item.image }} />
				<View style={styles.buttons}>
					<TouchableOpacity>
						<Text>Dar Like</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>Comentarios</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.description}>{this.props.item.description}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 300,
		height: 400,
		margin: 5,
		borderWidth: 1,
		borderColor: "#D4D4D4",
		borderRadius: 5,
	},
	image: { width: "100%", height: 300 },
	buttons: {
		width: "100%",
		padding: 6,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	description: {
		margin: 5,
	},
});

export default Post;
