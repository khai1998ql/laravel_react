import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actDeleteProductRequest, actStatusProductRequest } from './../../actions/actions';

class ProductItem extends Component {
    onDelete = (id) => {
        this.props.productDelete(id);
    }
    onUpdateStatus = (id) => {
        this.props.productStatus(id);
    }
    render(){
        
        var { product, index } = this.props;
        var statusName = product.product_status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.product_status ? 'label label-warning' : 'label label-default';
        return (
            <Fragment>
                <tr>
                    <td>{ index +1 }</td>
                    <td>{ product.id }</td>
                    <td>{ product.product_name }</td>
                    <td>{ product.product_price } VND</td>
                    <td>{ product.product_qty }</td>
                    <td>
                        <button className={ statusClass } onClick={ () => this.onUpdateStatus(product.id) }>{ statusName }</button>
                    </td>
                    <td>
                        <Link to={ `/laravel_react/product/edit/${product.id}` } className="btn btn-success mr-10">Sửa</Link>
                        <button onClick={ () => this.onDelete(product.id) } className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        productDelete : (id)  => {
            dispatch(actDeleteProductRequest(id))
        },
        productStatus : (id) => {
            dispatch(actStatusProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductItem);