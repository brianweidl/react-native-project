import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import { db } from "../firebase/config";
import firebase from "firebase";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: this.props.postInfo.data.likes.length,
			liked: this.props.postInfo.data.likes.includes(this.props.userInfo.email),
		};
	}

	darLike() {
		db
			.collection("posts")
			.doc(this.props.postInfo.id)
			.update({
				likes: firebase.firestore.FieldValue.arrayUnion(this.props.userInfo.email),
			})
			.then(() => this.setState({ likes: this.state.likes + 1, liked: true }))
			.catch((e) => console.log(e));
	}

	quitarLike() {
		db
			.collection("posts")
			.doc(this.props.postInfo.id)
			.update({
				likes: firebase.firestore.FieldValue.arrayRemove(this.props.userInfo.email),
			})
			.then(() => this.setState({ likes: this.state.likes - 1, liked: false }))
			.catch((e) => console.log(e));
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Posteo de {this.props.postInfo.data.owner}</Text>
				<Image
					style={styles.image}
					source={{ uri: this.props.postInfo.data.image }}
				/>
				<View style={styles.buttons}>
					<View>
						{this.state.liked ? (
							<TouchableOpacity onPress={() => this.quitarLike()}>
								<Text>Quitar Like</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity onPress={() => this.darLike()}>
								<Text>Dar Like</Text>
							</TouchableOpacity>
						)}
					</View>
					<Text>{this.state.likes}</Text>
					<TouchableOpacity
						onPress={() =>
							this.props.navigation.navigate("Comments", {
								postId: this.props.postInfo.id,
							})
						}
					>
						<Text>Comentarios</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.description}>
					{this.props.postInfo.data.description}
				</Text>
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
