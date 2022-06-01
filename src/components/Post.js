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

import { FontAwesome, AntDesign } from "@expo/vector-icons";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0,
			liked: false,
		};
	}
	componentDidMount() {
		this.setState({
			likes: this.props.postInfo.data.likes.length,
			liked: this.props.postInfo.data.likes.includes(this.props.userInfo.email),
		});
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
				<Image
					style={styles.image}
					source={{ uri: this.props.postInfo.data.image }}
				/>
				<View style={styles.dataContainer}>
					<View style={styles.buttons}>
						<View style={styles.likes}>
							{this.state.liked ? (
								<TouchableOpacity onPress={() => this.quitarLike()}>
									<AntDesign name="heart" size={24} color="red" />
								</TouchableOpacity>
							) : (
								<TouchableOpacity onPress={() => this.darLike()}>
									<AntDesign name="hearto" size={24} color="black" />
								</TouchableOpacity>
							)}
							<Text style={styles.likeNumber}>{this.state.likes} Likes</Text>
						</View>

						<TouchableOpacity
							onPress={() =>
								this.props.navigation.navigate("Comments", {
									postId: this.props.postInfo.id,
									userEmail: this.props.userInfo.email,
								})
							}
						>
							<FontAwesome name="comment-o" size={25} color="black" />
						</TouchableOpacity>
					</View>
					<View style={styles.data}>
						<Text style={styles.owner}>{this.props.postInfo.data.owner}</Text>
						<Text style={styles.description}>
							{this.props.postInfo.data.description}
						</Text>
					</View>
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
		width: 300,
		height: 420,
		margin: 5,
	},
	dataContainer: {
		borderWidth: 1,
		borderColor: "#D4D4D4",
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		width: 300,
		padding: 5,
	},

	image: { width: 300, height: 340 },
	buttons: {
		width: "100%",
		padding: 6,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	likes: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
	},
	likeNumber: { margin: 5 },
	data: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 5,
	},
	description: {
		margin: 5,
	},
	owner: {
		fontWeight: 700,
		margin: 5,
	},
});

export default Post;
