import styles from "@/app/styles";
import TabNavigator from "@/src/navigators/TabNavigator";
import React from "react";
import { View } from "react-native";

export default function MainScreen() {
	return (
		<View style={styles.container}>
			<TabNavigator />
		</View>
	);
}
