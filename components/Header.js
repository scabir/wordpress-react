import React, { useEffect, useState, Fragment } from 'react';
import ConfigData from '../config.json';

const Header = () => {
    const [pageInfo, setPageInfo] = useState({title:'', descriptiton:''});
    
    const url = ConfigData.wp.baseUrl.replace('wp/v2', '')

    const getTitleHandler = async () => 
    {
        const response = await fetch(url);
        const data = await response.json();
        
        setPageInfo({
            title: data.name, 
            descriptiton: data.description
        });

    };

    useEffect(() => {
        getTitleHandler();
    }, [url]);

    return (        
        <Fragment>
            <h1>{pageInfo.title}</h1>
            <p>{pageInfo.descriptiton}</p>
        </Fragment>
    );
}

export default Header