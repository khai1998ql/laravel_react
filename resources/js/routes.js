import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const  routes = [
    {
        path : '/laravel_react/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/laravel_react/products',
        exact : true,
        main : () => <ProductListPage/>
    },
    {
        path : '/laravel_react/product/add',
        exact : true,
        main : ({ history }) => <ProductActionPage history={ history } />
    },
    {
        path : '/laravel_react/product/edit/:id',
        exact : true,
        main : ({ match, history }) => <ProductActionPage match={ match } history={ history } />
    },
    {
        path : '',
        exact : true,
        main : () => <NotFoundPage />
    },
]
export default routes;
