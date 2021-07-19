import { useRouter } from 'next/router';
import React from 'react';
import BlogLayout from '../../components/BlogLayout';
import ErrorPage from '../../components/ErrorPage';
import PageRead from '../../components/PageRead';

const PageReadPage = (props) => {
    const router = useRouter();
    const parameters = router.query.params;

    if(parameters === null || !Array.isArray(parameters)) {
        return <ErrorPage />
    }

    const id = parameters[0];
    
    return (
        <BlogLayout>
            <PageRead id={id} />
         </BlogLayout>
        );
};
export default PageReadPage;