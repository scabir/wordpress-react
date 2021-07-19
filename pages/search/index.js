import React from 'react';
import { useRouter } from "next/router";
import SearchResult from '../../components/SearchResult';
import BlogLayout from '../../components/BlogLayout';

const SearchPage = (props) => {
    const { query } = useRouter();
    const term = query.term;    

    return (
        <BlogLayout>
            <SearchResult term={term} />
        </BlogLayout>
    );
};
export default SearchPage;