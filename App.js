import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Foundation, FontAwesome } from "@expo/vector-icons";
import HomeNav from "./src/screens/HomeNav";
import Camara from "./src/screens/Camara";
import Profile from "./src/screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarShowLabel: false,
				}}
				/* screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === "Home") {
							iconName = focused
								? "ios-information-circle"
								: "ios-information-circle-outline";
						} else if (route.name === "Otra") {
							iconName = focused ? "ios-list-box" : "ios-list";
						}
						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: "tomato",
					tabBarInactiveTintColor: "gray",
				})} */
			>
				<Tab.Screen
					name="HomeNav"
					component={HomeNav}
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
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
