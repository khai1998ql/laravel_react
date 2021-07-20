import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from './../../actions/actions';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            product_name : '',
            product_price : '',
            product_qty : '',
            product_status : false,
            title : 'Thêm sản phẩm',
            imgSrc : []
        }
        this.fileInput = React.createRef();
    }
    componentDidMount(){
        var { match } = this.props;
        if(match){
            // console.log(match.params.id); 
            var id = parseInt(match.params.id);
            this.props.editProduct(id);
        }
    }
    UNSAFE_componentWillReceiveProps (nextProps){
        this.setState({
            id : nextProps.itemEditting.id,
            product_name : nextProps.itemEditting.product_name,
            product_price : nextProps.itemEditting.product_price,
            product_qty : nextProps.itemEditting.product_qty,
            product_status : (nextProps.itemEditting.product_status == 1) ? true : false,
            title : 'Sửa sản phẩm'
        })
    }
    onInputValue = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type == 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSaveProduct = (event) => {
        event.preventDefault();
        var id = this.state.id;
        // console.log(id);
        var product = {
            id : this.state.id,
            product_name : this.state.product_name,
            product_price : this.state.product_price,
            product_qty : this.state.product_qty,
            product_status : this.state.product_status,
        }
        if(id){
            this.props.updateProduct(product);
        }else{
            
            this.props.addProduct(product);
           
        }
        this.props.history.goBack();
        
        
    }
    render(){
        var { product_name, product_price, product_qty, product_status, title } = this.state;
        return (
            <Fragment>
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <form onSubmit={ this.onSaveProduct } encType="multipart/form-data">
                            <legend>{ title }</legend>
                        
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input type="text" name="product_name" onChange={ this.onInputValue } value={ product_name } className="form-control" placeholder="Nhập tên sản phẩm" />
                            </div>
                            <div className="form-group">
                                <label>Giá</label>
                                <input type="number" name="product_price" onChange={ this.onInputValue } value={ product_price } className="form-control" placeholder="Nhập giá sản phẩm" />
                            </div>
                            <div className="form-group">
                                <label>Số lượng</label>
                                <input type="number" name="product_qty" onChange={ this.onInputValue } value={ product_qty } className="form-control" placeholder="Nhập số lượng sản phẩm" />
                            </div>
                            <div className="form-group">
                                <label>Trạng thái</label>
                                <div className="checkbox">
                                    <input type="checkbox" name="product_status" onChange={ this.onInputValue } value={ product_status } checked={ product_status } placeholder="Nhập tên sản phẩm" />Còn hàng
                                </div>
                            </div>
                            <Link to="/laravel_react/products" className="btn btn-danger mr-10">Thoát</Link>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        
                    </div>
                </div>
                
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditting : state.itemEditting
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct : (product) => {
            dispatch(actAddProductRequest(product));
        },
        editProduct : (id) => {
            dispatch(actEditProductRequest(id));
        },
        updateProduct : (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductActionPage);