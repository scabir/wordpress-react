import React from 'react';
import { useRouter } from 'next/router';
import BlogLayout from '../../components/BlogLayout';
import PostList from '../../components/PostList';
import ErrorPage from '../../components/ErrorPage';

const CategoryPage = (props) => {
    const router = useRouter();
    const parameters = router.query.params;

    if(parameters === null || !Array.isArray(parameters)) {
        return <ErrorPage />
    }

    const id = parameters[0];
    const filter = '?categories=' + id;
    
    console.log(router.query.params);
    
    return (
        <BlogLayout>
           <PostList filter={filter} />
        </BlogLayout>
      )
};
export default CategoryPage;