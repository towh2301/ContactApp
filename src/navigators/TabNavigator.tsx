import { AppTheme } from "@/app/styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ContactNavigator from "./ContactNavigator";
import FavoriteNavigator from "./FavoriteNavigator";
import { TabParamList } from "./helpers";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName: string;
					if (route.name === "Contacts") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "Favorite") {
						iconName = focused ? "star" : "star-outline";
					} else {
						iconName = focused ? "person" : "person-outline";
					}
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
				tabBarActiveTintColor: AppTheme.colors.primary,
				tabBarInactiveTintColor: "#8E8E93",
				tabBarStyle: {
					backgroundColor: "#FFFFFF",
					borderTopColor: "#E5E5EA",
					height: 70,
					paddingTop: 10,
				},
				animation: "shift",
				headerShown: false,
			})}
		>
			<Tab.Screen
				name="Contacts"
				component={ContactNavigator}
				options={{
					headerShown: false,
					tabBarLabel: "Contacts",
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavoriteNavigator}
				options={{
					headerShown: false,
					tabBarLabel: "Favorite",
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
