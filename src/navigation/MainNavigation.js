import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNav from "./HomeNav";
import Login from "../components/Login";
import Register from "../components/Register";

import { db, auth } from "../firebase/config";

const Stack = createStackNavigator();

export default class MainNavigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			loginErr: "",
			registerErr: "",
			userInfo: {},
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ userInfo: user });
				this.setState({ loggedIn: true });
			}
		});
	}

	login(mail, password) {
		console.log("Signing in");
		auth
			.signInWithEmailAndPassword(mail, password)
			.then((res) => {
				this.setState({ loggedIn: true });
				console.log(res);
			})
			.catch((e) => {
				this.setState({ loginErr: e.message });
				console.log(e);
			});
	}

	loginDeUna() {
		this.setState({ loggedIn: true });
	}

	addUser(name, mail) {
		db
			.collection("users")
			.add({
				name: name,
				mail: mail,
			})
			.then((doc) => console.log(doc))
			.catch((err) => console.log(err));
	}

	register(mail, password, name) {
		console.log("Signing up");
		auth
			.createUserWithEmailAndPassword(mail, password)
			.then((res) => {
				console.log(res);
				this.addUser(name, mail);
				this.setState({ loggedIn: true });
				console.log("User registered");
			})
			.catch((e) => {
				this.setState({ registerErr: e.message });
				console.log(e);
			});
	}

	logout() {
		auth
			.signOut()
			.then(() => this.setState({ loggedIn: false }))
			.catch((e) => console.log(e));
	}

	render() {
		return (
			<Stack.Navigator>
				{this.state.loggedIn ? (
					<Stack.Screen
						name="HomeNav"
						options={{ headerShown: false }}
						children={(navProps) => (
							<HomeNav
								userInfo={this.state.userInfo}
								logout={() => this.logout()}
								{...navProps}
							/>
						)}
					/>
				) : (
					<Stack.Group>
						<Stack.Screen
							name="Login"
							options={{ headerShown: false }}
							children={(navProps) => (
								<Login
									login={(mail, password) => this.login(mail, password)}
									loginErr={this.state.loginErr}
									loginDeUna={() => this.loginDeUna()}
									{...navProps}
								/>
							)}
						/>
						<Stack.Screen
							name="Register"
							options={{ headerShown: false }}
							children={(navProps) => (
								<Register
									register={(mail, password, name) =>
										this.register(mail, password, name)
									}
									registerErr={this.state.registerErr}
									{...navProps}
								/>
							)}
						/>
					</Stack.Group>
				)}
			</Stack.Navigator>
		);
	}
}
