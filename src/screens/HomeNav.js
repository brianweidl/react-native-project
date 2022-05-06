import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Comments from "../components/Comments";

const Stack = createStackNavigator();

function HomeNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name="Comments" component={Comments} />
		</Stack.Navigator>
	);
}

export default HomeNav;
