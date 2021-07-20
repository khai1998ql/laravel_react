import * as types from './../contants/ActionTypes';

var initialState = [];
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if(product.id == id){
            result = index;
        }
    });
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    var id = 0;
    switch (action.type) {
        case(types.FETCH_PRODUCTS):
            // console.log(action.products);
            return action.products;
        case(types.ADD_PRODUCT):
            state.push(action.product);
            return [...state];
        case(types.DELETE_PRODUCT):
            // console.log(action);
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case(types.UPDATE_PRODUCT):
            index = findIndex(state, parseInt(action.product.id));
            state[index] = action.product;
            return [...state];
        case(types.STATUS_PRODUCT):
            // index = findIndex(state, parseInt(action.id));
            // console.log(state[index]['product_status']);
            // state[index]['product_status'] = (state[index]['product_status'] === 1) ? 0 : 1;
            // console.log(state[index]['product_status']);
            // // state[index] = action.product;
            // return [...state];
            index = findIndex(state, parseInt(action.product.id));
            state[index] = action.product;
            return [...state];
        default:
            return [...state];
    }
}
export default products;