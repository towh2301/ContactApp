export interface Contact {
	id: string;
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
	favorite: boolean;
}
