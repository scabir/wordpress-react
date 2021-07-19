import React, { useState, useEffect } from 'react';
import configData from '../config.json';
import PostList from './PostList';

const SearchResult = (props) => {
    const [result, setResult] = useState();
    const [isLoading, setIsLoading] = useState(true);


    let url = configData.wp.baseUrl + '/search?search=' + props.term;

    const getSearchResultsHandler = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log('hit');
        
        setResult(data);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getSearchResultsHandler();
    }, [url]);

    let content = <p>Searching...</p>;

    if(!isLoading && result) {
        const filteredResults = result.filter(x => x.type === 'post');
        let postIds = '';
        filteredResults.map(x => {
            return postIds += x.id + ',';
        });
        postIds = postIds.slice(0, -1);        
        content = <PostList filter={'?include=' + postIds} noPagination/>
    }

    if(!isLoading && (!result || result.length === 0)) {
        content = <p>No results found</p>;
    }

    return <div>
        {content}
    </div>;

    return (
        <div>SearchResult Content</div>
    );
};
export default SearchResult;