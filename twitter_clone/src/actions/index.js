export const NEW_ENTRY = 'NEW_ENTRY';
export const GET_ENTRY = 'GET_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';


 export const newEntry = entry => {
    return {
        type: NEW_ENTRY,
        payload: entry
    }
}

 export const getEntry = entries => {
    return {
        type: GET_ENTRY,
        payload: entries
    }
}

export const removeEntry = () => {
    return {
      type: REMOVE_ENTRY
    };
  };