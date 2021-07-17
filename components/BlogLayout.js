import React from 'react';
import {Provider} from 'react-redux';

import store from '../store/Store';

import Header from './Header';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';
import Footer from './Footer';
import Loader from '../store/Loader'; 

import 'bootstrap/dist/css/bootstrap.css';

const BlogLayout = (props) => {
    return (
        <Provider store={store}>
        <Loader />
        <div className="siteMain">
        <div className="header"><Header /></div>
        <div className="topMenu"><TopMenu /></div>
        <div className="content">
            <div className="sidemenu">
                <SideMenu/>
            </div>
            <div className="mainbody">
                <div>{props.children}</div>
            </div>
        </div>
        <div className="footer"><Footer /></div>
        </div>
        </Provider>
    );
};

export default BlogLayout;