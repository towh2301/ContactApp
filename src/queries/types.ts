export type ContactResponse = {
	name: {
		title: string;
		first: string;
		last: string;
	};
	email: string;
	phone: string;
	cell: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
};

export type TabParamList = {
	Contacts: undefined;
	Favorite: undefined;
};

export type RootStackParamList = {
	Welcome: undefined;
	Main: undefined;
};
