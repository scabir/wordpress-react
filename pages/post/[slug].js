import React from 'react';
import { useRouter } from 'next/router';
import PostRead from '../../components/PostRead';
import BlogLayout from '../../components/BlogLayout';

const PostReadPage = (props) => {
    const router = useRouter();

    return (
    <BlogLayout>
        <PostRead slug={router.query.slug} />
     </BlogLayout>
    );
};

export default PostReadPage;