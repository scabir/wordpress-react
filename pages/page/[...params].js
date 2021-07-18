import React from 'react';
import { useRouter } from 'next/router';
import BlogLayout from '../../components/BlogLayout';
import PostList from '../../components/PostList';
import ErrorPage from '../../components/ErrorPage';
import PageRead from '../../components/PageRead';

const PageReadPage = (props) => {
    const router = useRouter();
    const parameters = router.query.params;

    if(parameters === null || !Array.isArray(parameters)) {
        return <ErrorPage />
    }

    const id = parameters[0];

    console.log(id);
    
    return (
        <BlogLayout>
            <PageRead id={id} />
         </BlogLayout>
        );
};
export default PageReadPage;