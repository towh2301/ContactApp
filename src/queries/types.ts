export type ContactResponse = {
	name: Name;
	email: string;
	phone: string;
	cell: string;
	picture: Picture;
};

type Name = {
	title: string;
	first: string;
	last: string;
};

type Picture = {
	large: string;
	medium: string;
	thumbnail: string;
};

export interface Contact {
	id: string;
	name: Name;
	email?: string;
	phone: string;
	cell?: string;
	picture?: Picture;
	isFavorite?: boolean;
}
