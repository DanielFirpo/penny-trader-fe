import {
    SET_TOAST,
    SET_IMAGE
} from "../actions/actions"

let initialState = {
    toast: {
        text: undefined,
        type: undefined
    },
    image: undefined
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
                    type: action.payload.type
                }
            }
        case SET_IMAGE:
            return {
                ...state,
                image: action.payload.image
            }
        default:
            console.log(`\nUnknown action type:\n${action.type}`);
            return {
                ...state
            };
    }
}

export default reducer;