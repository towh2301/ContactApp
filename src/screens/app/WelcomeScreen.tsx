import styles from "@/app/styles";
import { RootStackParamList } from "@/src/queries/types";
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
		<SafeAreaView style={[styles.container, styles.center, styles.padding]}>
			<StatusBar barStyle="dark-content" />
			<View style={styles.content}>
				<Text style={styles.title}>Contact App</Text>
				<Text style={styles.subtitle}>
					Contact App - Lab 4 - CSE441
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Main")}
				>
					<Text style={styles.buttonText}>Start</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default WelcomeScreen;
