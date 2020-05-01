import {
    SET_TOAST
} from "../actions/actions"

let initialState = {
    toast: {
        text: undefined,
        color: undefined
    }
}

function reducer(state = initialState, action) {
    console.log(
        "Reducer working, current action: ",
        action.type,
        " Payload: ",
        action.payload
    );

    //TODO: seperate this switch into multiple files, it's way too long
    switch (action.type) {
        case SET_TOAST:
            return {
                ...state,
                toast: {
                    text: action.payload.text,
                    color: action.payload.color
                }
            }
        default:
            console.log(`\nUnknown action type:\n${action.type}`);
            return {
                ...state
            };
    }
}

export default reducer;