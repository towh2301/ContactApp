import styles from "@/app/styles";
import { useFavorites } from "@/src/hooks/useFavorites";
import { ContactParamList } from "@/src/navigators/helpers";
import { ContactResponse } from "@/src/queries/types";
import { useGetAllContact } from "@/src/queries/useGetAllContacts";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
import ContactCard from "./ContactCard";

export const ContactScreen = () => {
	// All hooks called unconditionally at the top
	const navigation =
		useNavigation<StackNavigationProp<ContactParamList, "ContactScreen">>();
	const { contacts, isError, isFetching, isLoading, error } =
		useGetAllContact();
	const { isFavorite, toggleFavorite } = useFavorites();

	const handleContactPress = useCallback(
		(contact: ContactResponse) => {
			navigation.navigate("ContactProfile", { contact });
		},
		[navigation]
	);

	const handleToggleFavorite = useCallback(
		async (contact: ContactResponse) => {
			await toggleFavorite(contact);
		},
		[toggleFavorite]
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
						isFavorite={isFavorite(item.email)}
						onToggleFavorite={handleToggleFavorite}
					/>
				)}
			/>
		</SafeAreaView>
	);
};
