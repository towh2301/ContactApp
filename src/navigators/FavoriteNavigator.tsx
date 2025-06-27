import { AppTheme } from "@/app/styles";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { FavoriteContactScreen } from "../screens/contact/FavoriteContactScreen";
import ProfileScreen from "../screens/contact/ProfileScreen";
import { ContactParamList } from "./helpers";

const FavoriteStack = createStackNavigator<ContactParamList>();

const FavoriteNavigator = () => {
	return (
		<FavoriteStack.Navigator
			initialRouteName="FavoriteContactScreen"
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
			<FavoriteStack.Screen
				name="FavoriteContactScreen"
				component={FavoriteContactScreen}
				options={{ title: "Favorite Contacts" }}
			/>
			<FavoriteStack.Screen
				name="ContactProfile"
				component={ProfileScreen}
				options={{
					title: "Contact Profile",
				}}
			/>
		</FavoriteStack.Navigator>
	);
};

export default FavoriteNavigator;
