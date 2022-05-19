import React from "react";

import { AntDesign, Foundation, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Camara from "../screens/Camara";
import Profile from "../screens/Profile";

function HomeNav() {
	const Tab = createBottomTabNavigator();
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
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
				}}
				initialParams={{ prueba: "prueba string" }}
			/>
		</Tab.Navigator>
	);
}

export default HomeNav;
