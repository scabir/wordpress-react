import React, { Fragment, useState, useEffect } from 'react';
import renderHTML from 'react-render-html';
import configData from '../config.json';

const PageRead = (props) => {
    const [page, setPage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const id  = props.id;
    const baseUrl = configData.wp.baseUrl + '/pages/' + id;    

    const getPostsHandler = async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();

        setPage(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getPostsHandler();
    }, [baseUrl]);

    let content = 'Loading...';
    if(page !== undefined) {
        content = (
            <Fragment>
                <h2>{page.title.rendered}</h2>
                <div>
                    {renderHTML(page.content.rendered)}
                </div>
            </Fragment>
        );
    }

    return (
        <Fragment>
            {content}
        </Fragment>
    );
};

export default PageRead;