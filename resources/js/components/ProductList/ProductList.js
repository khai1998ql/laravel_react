import React, { Component, Fragment } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from './../../actions/actions';

class ProductList extends Component{
    
    UNSAFE_componentWillMount (){
        this.props.fetchAllProducts();
    }
    // componentWillReceiveProps (nextProps){
    //     console.log(nextProps);
    // }
    render(){
        var { products } = this.props;
        // console.log(products);
        return (
            <Fragment>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã Sp</th>
                                <th>Tên Sp</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <ProductItem /> */}
                            { this.showProductItem(products) }
                        </tbody>
                    </table>
                    
                </div>
            </Fragment>
        )
    }
    showProductItem = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return (
                    <ProductItem key={ index } index={index} product={ product } />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return  {
        products : state.products
    };
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductList);