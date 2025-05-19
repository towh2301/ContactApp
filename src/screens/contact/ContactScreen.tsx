import styles from "@/app/styles";
import { ContactParamList } from "@/src/navigators/helpers";
import { ContactResponse } from "@/src/queries/types";
import { useGetAllContact } from "@/src/queries/useGetAllContacts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
import ContactCard from "./ContactCard";

export const ContactScreen = () => {
	// All hooks called unconditionally at the top
	const navigation =
		useNavigation<NativeStackNavigationProp<ContactParamList>>();
	const { contacts, isError, isFetching, isLoading, error } =
		useGetAllContact();

	const handleContactPress = useCallback(
		(contact: ContactResponse) => {
			navigation.navigate("ContactProfile", { contact });
		},
		[navigation]
	);

	// Loading state
	if (isLoading || isFetching) {
		return (
			<SafeAreaView style={[styles.container, styles.padding]}>
				<ActivityIndicator size="large" color="#0000ff" />
			</SafeAreaView>
		);
	}

	// Error state
	if (isError) {
		return (
			<SafeAreaView style={[styles.container, styles.padding]}>
				<Text>Error: {error?.message}</Text>
			</SafeAreaView>
		);
	}

	// Main render
	return (
		<SafeAreaView style={[styles.container]}>
			<FlatList
				data={contacts}
				keyExtractor={(item, index) => item.email || index.toString()}
				renderItem={({ item }) => (
					<ContactCard
						contact={item}
						onPress={() => handleContactPress(item)}
					/>
				)}
			/>
		</SafeAreaView>
	);
};
