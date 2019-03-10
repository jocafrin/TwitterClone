export const NEW_ENTRY = 'NEW_ENTRY';
export const GET_ENTRY = 'GET_ENTRY';
export const TOGGLE_ENTRY = 'TOGGLE_ENTRY';

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

 export const toggleEntry = id => {
    return {
        type: TOGGLE_ENTRY,
        payload: id
    }
}