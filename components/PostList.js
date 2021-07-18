import React, { Fragment, useState, useEffect } from 'react';
import SinglePost from './SinglePost';
import configData from '../config.json';
import ErrorPage from './ErrorPage';
import Link from 'next/dist/client/link'; 

const PostList = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let url = configData.wp.baseUrl + '/posts';
    let didFilterAdded = false;
    let perPage = configData.wp.postCount;
    // let query = new URLSearchParams(useLocation().search);
    let page = 1;
    let errorContent = undefined;

    // if(query.get("page")) {
    //     try {
    //         page = parseInt(query.get("page"));
    //     }
    //     catch {
    //         errorContent = <ErrorPage />
    //     }
    // }

    if(props.filter !== undefined) {
        url = url + props.filter;
        didFilterAdded = true;
    }

    let pagedUrl = url + (didFilterAdded ? '&' : '?') + 'page=' + page + '&per_page=' + perPage;

    const getPostsHandler = async () => {
        const response = await fetch(pagedUrl);
        const data = await response.json();

        setPosts(data);        
        setIsLoading(false);
    }

    useEffect(() => {
        getPostsHandler();
        window.scrollTo(0, 0);
    }, [pagedUrl]);

    let renderedPosts = '';
    

    if(posts && posts.length > 0) {
        renderedPosts = posts.map(post => {
            return (
                <Fragment>
                    <SinglePost post={post} key={post.id}/>
                </Fragment>
            );
        });
    }
    else {
        renderedPosts = <p>Found no posts. </p>;
    }
    
    const generatePagination = () =>
    {
        if(props.noPagination) {
            return '';
        }

        let prevPart = '<< Prev';
        let nextPart = 'Next >>';

        if(page > 2) {
            prevPart = <Link href={window.location.pathname + '?page=' + (page - 1)}>{'<< Prev'}</Link>;
        }
        else if((page) === 2) {
            prevPart = <Link href={window.location.pathname}>{'<<'} Prev</Link>;
        }

        if(posts?.length === perPage) {
            nextPart = <Link href={window.location.pathname + '?page=' + (page + 1)}>{'Next >>'}</Link>;
        }

        
        return <div className="pagination">{prevPart} - {nextPart}</div>;
    }

    let content = <p>Loading...</p>;

    if(!errorContent) {
        if(!isLoading && posts.length > 0) {
            content = <Fragment>
                {renderedPosts}
                {generatePagination()}
            </Fragment>;
        }
        else if(posts.data?.status === 400) {
            content = <ErrorPage />
        }
    }
    else {
        content = errorContent;
    }

    return (
        <Fragment>{content}</Fragment>
    );
};

export default PostList;