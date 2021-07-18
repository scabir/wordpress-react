import React from 'react';
import { useRouter } from 'next/router';
import BlogLayout from '../../components/BlogLayout';
import PostList from '../../components/PostList';
import ErrorPage from '../../components/ErrorPage';

const TagPage = (props) => {
    const router = useRouter();
    const parameters = router.query.params;

    if(parameters === null || !Array.isArray(parameters)) {
        return <ErrorPage />
    }

    const id = parameters[0];
    const filter = '?tags=' + id;
    
    return (
        <BlogLayout>
           <PostList filter={filter} />
        </BlogLayout>
      )
};
export default TagPage;