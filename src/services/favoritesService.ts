import { ContactResponse } from "@/src/queries/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorite_contacts";

export class FavoritesService {
	static async getFavorites(): Promise<ContactResponse[]> {
		try {
			const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
			return favorites ? JSON.parse(favorites) : [];
		} catch (error) {
			console.error("Error getting favorites:", error);
			return [];
		}
	}

	static async addToFavorites(contact: ContactResponse): Promise<void> {
		try {
			const favorites = await this.getFavorites();
			const isAlreadyFavorite = favorites.some(
				(fav) => fav.email === contact.email
			);

			if (!isAlreadyFavorite) {
				const updatedFavorites = [...favorites, contact];
				await AsyncStorage.setItem(
					FAVORITES_KEY,
					JSON.stringify(updatedFavorites)
				);
			}
		} catch (error) {
			console.error("Error adding to favorites:", error);
		}
	}

	static async removeFromFavorites(contactEmail: string): Promise<void> {
		try {
			const favorites = await this.getFavorites();
			const updatedFavorites = favorites.filter(
				(fav) => fav.email !== contactEmail
			);
			await AsyncStorage.setItem(
				FAVORITES_KEY,
				JSON.stringify(updatedFavorites)
			);
		} catch (error) {
			console.error("Error removing from favorites:", error);
		}
	}

	static async isFavorite(contactEmail: string): Promise<boolean> {
		try {
			const favorites = await this.getFavorites();
			return favorites.some((fav) => fav.email === contactEmail);
		} catch (error) {
			console.error("Error checking if favorite:", error);
			return false;
		}
	}

	static async toggleFavorite(contact: ContactResponse): Promise<boolean> {
		try {
			const isCurrentlyFavorite = await this.isFavorite(contact.email);

			if (isCurrentlyFavorite) {
				await this.removeFromFavorites(contact.email);
				return false;
			} else {
				await this.addToFavorites(contact);
				return true;
			}
		} catch (error) {
			console.error("Error toggling favorite:", error);
			return false;
		}
	}
}
