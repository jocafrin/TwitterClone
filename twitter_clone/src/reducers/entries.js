import { NEW_ENTRY, GET_ENTRY } from "../actions";

export default (entries = [], action) => {
  switch (action.type) {
    case NEW_ENTRY:
      return [...entries, action.payload];

    case GET_ENTRY:
      return action.paylod;
    default:
      return entries;
  }
};
