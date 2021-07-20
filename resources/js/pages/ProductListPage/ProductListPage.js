import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from './../../actions/actions';


class ProductListPage extends Component {
    onRefreshData = () => {
        this.props.refreshData();
    }
    render(){
        return (
            <Fragment>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="disFlex">
                            <Link to="/laravel_react/product/add" className="btn btn-info mb-20">Thêm sản phẩm mới</Link>
                            <button className="btn btn-success mb-20" onClick={ this.onRefreshData }><i className="ti-reload mr-5"></i>Refresh</button>
                        </div>
                        
                        
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Danh sách sản phẩm</h3>
                              </div>
                              <ProductList>

                              </ProductList>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        refreshData : () => {
            dispatch(actFetchProductsRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductListPage);