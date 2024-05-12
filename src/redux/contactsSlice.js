import { createSlice } from "@reduxjs/toolkit";
// import contactsJson from '../components/contacts.json';




const contactsInitState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
    // items: contactsJson,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index, 1);
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;