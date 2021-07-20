import * as types from './../contants/ActionTypes';
import callApi from '../utils/apiCaller';


export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
            // console.log(res.data);
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type : types.FETCH_PRODUCTS,
        products
    }
}
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products/add', 'POST', product).then(res => {
            // console.log(res.data);
            dispatch(actAddProduct(res.data.product));
        })
    }
}
export const actAddProduct  = (product) => {
    return {
        type : types.ADD_PRODUCT,
        product
    }
}
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/delete/${id}`, 'delete', null).then(res => {
            if(res.data.alert === true){
                dispatch(actDeleteProduct(res.data.id));
            }else{
                dispatch(actFetchProductsRequest());
            }
            
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}
export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'GET', null).then(res => {
            dispatch(actEditProduct(res.data))
        })
    }
}
export const actEditProduct = (product) => {
    return {
        type : types.EDIT_PRODUCT,
        product
    }
}
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'put', product).then(res => {
            if(res.data.alert == true){
                dispatch(actUpdateProduct(res.data.product));
            }
        })
    }
}
export const actUpdateProduct = (product) => {
    return {
        type :types.UPDATE_PRODUCT,
        product
    }
}
export const actStatusProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/status/${id}`, 'put', null).then(res => {
            if(res.data.alert == true){
                // dispatch(actStatusProduct(id));
                dispatch(actStatusProduct(res.data.product));

            }
        })
    }
}
export const actStatusProduct = (product) => {
    return {
        type : types.STATUS_PRODUCT,
        product
    }
}