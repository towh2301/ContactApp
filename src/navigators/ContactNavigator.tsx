import { AppTheme } from "@/app/styles";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ContactScreen } from "../screens/contact/ContactScreen";
import ProfileScreen from "../screens/contact/ProfileScreen";
import { ContactParamList } from "./helpers";

const ContactStack = createStackNavigator<ContactParamList>();

const ContactNavigator = () => {
	return (
		<ContactStack.Navigator
			initialRouteName="ContactScreen"
			screenOptions={{
				headerStyle: {
					backgroundColor: AppTheme.colors.background,
				},
				headerTintColor: AppTheme.colors.text,
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<ContactStack.Screen
				name="ContactScreen"
				component={ContactScreen}
				options={{ title: "Home" }}
			/>
			<ContactStack.Screen
				name="ContactProfile"
				component={ProfileScreen}
				options={{
					title: "Contact Profile",
				}}
			/>
		</ContactStack.Navigator>
	);
};

export default ContactNavigator;
