import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	TextInput,
} from "react-native";
import { db } from "../firebase/config";
import firebase from "firebase";

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentText: "",
			comments: [],
		};
		console.log(this.props.route.params.postId);
	}

	componentDidMount() {
		db
			.collection("posts")
			.doc(this.props.route.params.postId)
			.onSnapshot((doc) => {
				this.setState({ comments: doc.data().comments });
			});
	}
	addComment() {
		let newComment = {
			owner: this.props.route.params.userEmail,
			commentText: this.state.commentText,
			createdAt: Date.now(),
		};
		console.log(newComment);
		db
			.collection("posts")
			.doc(this.props.route.params.postId)
			.update({
				comments: firebase.firestore.FieldValue.arrayUnion(newComment),
			})
			.then(() => this.setState({ commentText: "" }))
			.catch((e) => console.log(e));
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.comments}
					keyExtractor={(item) => item.createdAt}
					renderItem={({ item }) => (
						<View style={styles.comment}>
							<Text>Comentario de {item.owner}:</Text>
							<Text>{item.commentText}</Text>
						</View>
					)}
				/>
				<View style={styles.addComment}>
					<TextInput
						placeholder="Agrega un comentario..."
						onChangeText={(text) => this.setState({ commentText: text })}
						style={styles.input}
					/>
					<TouchableOpacity onPress={() => this.addComment()}>
						<Text>Publicar</Text>
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
	addComment: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		width: "80%",
		margin: 8,
	},
	comment: {
		padding: 5,
		borderWidth: 1,
		borderColor: "#D4D4D4",
		borderRadius: 8,
		margin: 8,
	},
	input: {
		width: "70%",
		borderWidth: 1,
		borderColor: "#D4D4D4",
		borderRadius: 8,
		padding: 4,
		margin: 8,
	},
});

export default Comments;
