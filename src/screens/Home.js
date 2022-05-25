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

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			loading: false,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		db.collection("posts").onSnapshot(({ docs }) => {
			let dbPosts = [];
			console.log(docs);
			dbPosts = docs.map((doc) => doc.data());
			this.setState({ posts: dbPosts });
			this.setState({ loading: false });
		});
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.loading ? (
					<ActivityIndicator />
				) : (
					<FlatList
						data={this.state.posts}
						renderItem={({ item }) => <Post item={item} />}
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
});

export default Home;
