import { ContactResponse } from "../queries/types";

export type TabParamList = {
	Contacts: undefined;
	Favorite: undefined;
};

export type RootStackParamList = {
	Welcome: undefined;
	Main: undefined;
};

export type ContactParamList = {
	ContactScreen: undefined;
	ContactProfile: { contact: ContactResponse };
	ContactCard: undefined;
	FavoriteContactScreen: undefined;
};
