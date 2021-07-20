import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name : 'Trang chủ',
        to : '/laravel_react/',
        exact : true
    },
    {
        name : 'Sản phẩm',
        to : '/laravel_react/products/',
        exact : true
    },
    {
        name : 'Thêm sản phẩm',
        to : '/laravel_react/product/add',
        exact : true
    },
]

const MenuLink = ({ label, to, activeExact}) => {
    return (
        <Route
            path={ to }
            exact={ activeExact }
            children={({ match }) => {
                var active= match ? 'active' : '';
                return (
                    <li className={ active }>
                        <Link to={ to }>{ label }</Link>
                    </li>
                );
            }}
        />
    )
}

class Menu extends Component {
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    { this.showMenu(menus) }
                </ul>
            </nav>
        )
    }
    showMenu = (menus) => {
        var result = '';
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={ index }
                        label={ menu.name }
                        to={ menu.to }
                        activeExact={ menu.exact }
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;