import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactResponse } from "./../../queries/types";

type ContactsState = {
	contacts: ContactResponse[];
};

const initialState: ContactsState = {
	contacts: [],
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		setContacts: (state, action: PayloadAction<ContactResponse[]>) => {
			state.contacts = action.payload;
		},
	},
});

export const { setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
