import { NEW_ENTRY, GET_ENTRY } from "../actions";

export default (entries = [{text: "Hello World!", id: 0, username: "jgriggs" }], action) => {
  switch (action.type) {
    case NEW_ENTRY:
      return [...entries, action.payload];

    case GET_ENTRY:
      return action.payload;
    default:
      return entries;
  }
};
