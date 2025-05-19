import { RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ContactScreen } from "../screens/contact/ContactScreen";
import { FavoriteContactScreen } from "../screens/contact/FavoriteContactScreen";
import ProfileScreen from "../screens/contact/ProfileScreen";
import { ContactParamList } from "./helpers";

const Stack = createNativeStackNavigator<ContactParamList>();

const ContactNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="ContactScreen"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f4511e",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name="ContactScreen"
				component={ContactScreen}
				options={{ title: "Contacts" }}
			/>
			<Stack.Screen
				name="ContactProfile"
				component={ProfileScreen}
				options={({
					route,
				}: {
					route: RouteProp<ContactParamList, "ContactProfile">;
				}) => ({
					title: route.params.contact.name.first || "Contact Profile",
				})}
			/>
			<Stack.Screen
				name="FavoriteContactScreen"
				component={FavoriteContactScreen}
				options={{ title: "Favorite contacts" }}
			/>
		</Stack.Navigator>
	);
};

export default ContactNavigator;
