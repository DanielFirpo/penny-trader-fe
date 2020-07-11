export const SET_TOAST = "SET_TOAST";
export const SET_IMAGE = "SET_IMAGE";

export const setToast = (text, type) => dispatch => {

    if(!type) type = "success"

    dispatch({ type: SET_TOAST, payload: {text: text, type: type} });
}

export const setImage = (image) => dispatch => {

    dispatch({ type: SET_IMAGE, payload: {image: image} });

}