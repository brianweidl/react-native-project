import React, { Component } from "react";

import { AntDesign, Foundation, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Camara from "../screens/Camara";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

class HomeNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Tab.Navigator
				screenOptions={{
					tabBarShowLabel: false,
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
					}}
				/>
				<Tab.Screen
					name="Camara"
					component={Camara}
					options={{
						tabBarIcon: () => <AntDesign name="pluscircle" size={24} color="black" />,
					}}
				/>
				<Tab.Screen
					name="Profile"
					options={{
						tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
					}}
					children={(navProps) => (
						<Profile
							userInfo={this.props.userInfo}
							logout={() => this.props.logout()}
							{...navProps}
						/>
					)}
				/>
			</Tab.Navigator>
		);
	}
}

export default HomeNav;
