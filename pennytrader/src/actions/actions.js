export const SET_TOAST = "SET_TOAST";

export const setToast = (text, color) => dispatch => {

    if(!color) color = "green"

    dispatch({ type: SET_TOAST, payload: {text: text, color: color} });
}