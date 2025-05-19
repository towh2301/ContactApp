import styles from "@/app/styles";
import { RootStackParamList } from "@/src/navigators/helpers";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
	SafeAreaView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"Welcome"
>;

const WelcomeScreen = () => {
	const navigation = useNavigation<WelcomeScreenNavigationProp>();

	return (
		<SafeAreaView style={[styles.container]}>
			<StatusBar barStyle="dark-content" />
			<View style={styles.content}>
				<View style={styles.card}>
					<Text style={{ color: "white", fontSize: 30 }}>📘</Text>
				</View>
				<Text style={styles.title}>Contact App</Text>
				<Text
					style={[
						styles.padding,
						{
							textAlign: "center",
							fontSize: 18,
							fontWeight: "bold",
						},
					]}
				>
					Manage all your contacts in one place
					{"\n"}Lab 4 - CSE441
				</Text>

				<TouchableOpacity
					style={{
						backgroundColor: "#007bff",
						paddingVertical: 15,
						paddingHorizontal: 30,
						borderRadius: 25,
						width: "80%",
						alignItems: "center",
						elevation: 3,
					}}
					onPress={() => navigation.navigate("Main")}
				>
					<Text
						style={{
							color: "white",
							fontSize: 18,
							fontWeight: "600",
						}}
					>
						Get Started
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default WelcomeScreen;
