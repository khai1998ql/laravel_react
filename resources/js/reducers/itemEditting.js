import * as types from './../contants/ActionTypes';

var initialState = {};
const itemEditting = (state = initialState, action) => {
    switch (action.type) {
        case(types.EDIT_PRODUCT):
            // state = action.product;
            return action.product;
            // console.log(action);
        default:
            return state;
    }
}
export default itemEditting;