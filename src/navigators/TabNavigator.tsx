import { AppTheme } from "@/app/styles";
import React from "react";

<Tab.Navigator
	screenOptions={({ route }) => ({
		tabBarIcon: ({ focused, color, size }) => {
			let iconName: string;
			if (route.name === "Home") {
				iconName = focused ? "home" : "home-outline";
			} else if (route.name === "About") {
				iconName = focused ? "person" : "person-outline";
			} else if (route.name === "Add") {
				iconName = focused ? "add" : "add-outline";
			} else {
				iconName = focused ? "search" : "search-outline";
			}
			return <Ionicons name={iconName} size={size} color={color} />;
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
	})}
>
	<Tab.Screen
		name="Home"
		component={HomeStackNavigator} // Use HomeStackNavigator
		options={{
			headerShown: false,
			tabBarLabel: "Contacts",
		}}
	/>
	<Tab.Screen
		name="About"
		component={FavoriteScreen}
		options={{
			headerShown: false,
			tabBarLabel: "Favorite",
		}}
	/>
</Tab.Navigator>;
