import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Image,
	ActivityIndicator,
} from "react-native";
import { db } from "../firebase/config";
import Post from "../components/Post";

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			loading: false,
		};
		console.log(this.props);
	}

	componentDidMount() {
		db.collection("posts").onSnapshot(({ docs }) => {
			this.setState({ loading: true });
			let dbPosts = [];
			dbPosts = docs.map((doc) => {
				return { data: doc.data(), id: doc.id };
			});
			this.setState({ posts: dbPosts, loading: false });
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>React Native Project</Text>
				{this.state.loading ? (
					<ActivityIndicator />
				) : (
					<FlatList
						data={this.state.posts}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Post
								postInfo={item}
								userInfo={this.props.userInfo}
								navigation={this.props.navigation}
							/>
						)}
					/>
				)}
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
	title: {
		fontWeight: "700",
		fontSize: 20,
		margin: 5,
	},
});

export default Posts;
