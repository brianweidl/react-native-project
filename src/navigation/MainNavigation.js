import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import Register from "../components/Register";
import Comments from "../components/Comments";
import HomeNav from "./HomeNav";

const Stack = createStackNavigator();

export default class MainNavigation extends Component {
	render() {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Register"
					component={Register}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="HomeNav"
					component={HomeNav}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Comments" component={Comments} />
			</Stack.Navigator>
		);
	}
}
