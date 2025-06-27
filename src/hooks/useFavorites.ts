import { ContactResponse } from "@/src/queries/types";
import { FavoritesService } from "@/src/services/favoritesService";
import { useCallback, useEffect, useState } from "react";

export const useFavorites = () => {
	const [favorites, setFavorites] = useState<ContactResponse[]>([]);
	const [loading, setLoading] = useState(true);

	const loadFavorites = useCallback(async () => {
		setLoading(true);
		try {
			const favs = await FavoritesService.getFavorites();
			setFavorites(favs);
		} catch (error) {
			console.error("Error loading favorites:", error);
		} finally {
			setLoading(false);
		}
	}, []);

	const addToFavorites = useCallback(
		async (contact: ContactResponse) => {
			try {
				await FavoritesService.addToFavorites(contact);
				await loadFavorites(); // Refresh the list
			} catch (error) {
				console.error("Error adding to favorites:", error);
			}
		},
		[loadFavorites]
	);

	const removeFromFavorites = useCallback(
		async (contactEmail: string) => {
			try {
				await FavoritesService.removeFromFavorites(contactEmail);
				await loadFavorites(); // Refresh the list
			} catch (error) {
				console.error("Error removing from favorites:", error);
			}
		},
		[loadFavorites]
	);

	const toggleFavorite = useCallback(
		async (contact: ContactResponse) => {
			try {
				const newFavoriteStatus = await FavoritesService.toggleFavorite(
					contact
				);
				await loadFavorites(); // Refresh the list
				return newFavoriteStatus;
			} catch (error) {
				console.error("Error toggling favorite:", error);
				return false;
			}
		},
		[loadFavorites]
	);

	const isFavorite = useCallback(
		(contactEmail: string): boolean => {
			return favorites.some((fav) => fav.email === contactEmail);
		},
		[favorites]
	);

	useEffect(() => {
		loadFavorites();
	}, [loadFavorites]);

	return {
		favorites,
		loading,
		addToFavorites,
		removeFromFavorites,
		toggleFavorite,
		isFavorite,
		refreshFavorites: loadFavorites,
	};
};
