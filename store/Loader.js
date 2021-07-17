import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ConfigData from '../config.json';
import { fetchCategories, fetchTags, fetchPages } from './Fetchers';

const Loader = (props) => {
    const baseUrl = ConfigData.wp.baseUrl;
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPages(baseUrl, dispatch);
        fetchCategories(baseUrl, dispatch);
        fetchTags(baseUrl, dispatch);
        
    }, [dispatch]);
    
    return ('');
};
export default Loader;