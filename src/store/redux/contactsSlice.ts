import { Contact } from "@/src/types/Contact";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ContactState = {
	contacts: Contact[];
};

const initialState: ContactState = {
	contacts: [],
};

const contactSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		setContacts: (state, action: PayloadAction<Contact[]>) => {
			state.contacts = action.payload;
		},
	},
});

export const { setContacts } = contactSlice.actions;
export default contactSlice.reducer;
