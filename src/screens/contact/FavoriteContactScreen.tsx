import styles from "@/app/styles";
import { useFavorites } from "@/src/hooks/useFavorites";
import { ContactParamList } from "@/src/navigators/helpers";
import { ContactResponse } from "@/src/queries/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	Text,
	View,
} from "react-native";
import ContactCard from "./ContactCard";

export const FavoriteContactScreen = () => {
	const navigation = useNavigation<StackNavigationProp<ContactParamList, "FavoriteContactScreen">>();
	const { favorites, loading, isFavorite, toggleFavorite } = useFavorites();

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

	if (loading) {
		return (
			<SafeAreaView style={[styles.container, styles.padding]}>
				<ActivityIndicator size="large" color="#0000ff" />
			</SafeAreaView>
		);
	}

	if (favorites.length === 0) {
		return (
			<SafeAreaView style={[styles.container, styles.padding]}>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text style={{ fontSize: 18, color: "#666", textAlign: "center" }}>
						No favorite contacts yet.{"\n"}
						Tap the star icon on any contact to add them to your favorites.
					</Text>
				</View>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={[styles.container]}>
			<FlatList
				data={favorites}
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
