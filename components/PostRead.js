import React, { Fragment, useState, useEffect } from 'react';
import CategoryBadge from './CategoryBadge';
import TagBadge from './TagBadge';
import HtmlRender from './HtmlRender';
import configData from '../config.json';
import Comments from './Comments';

const PostRead = (props) => {
    const [posts, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const slug = props.slug;
    const baseUrl = configData.wp.baseUrl + '/posts?slug=' + slug;
    
    const getPostsHandler = async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();

        setPost(data);        
        setIsLoading(false);
    }

    useEffect(() => {
        getPostsHandler();
    }, [baseUrl]);

    let content = 'Loading...';
    if(!isLoading && posts !== undefined && posts.length > 0) {
        const post = posts[0];

        content = (
            <Fragment>
                <div className="postRead">
                    <h2>{post.title.rendered}</h2>
                    <p className="date">{post.date}</p>
                    <div>
                        <HtmlRender>{post.content.rendered}</HtmlRender>
                    </div>
                    <CategoryBadge categories={post.categories} postid={post.id} />
                    <TagBadge tags={post.tags}  postid={post.id}/>
                </div>
                {post.comment_status === 'open' && <Comments postid={post.id} />}
                {post.comment_status === 'closed' && <p>This post is closed to comments</p>}
            </Fragment>
        );
    }

    return (
        <Fragment>
            {content}
        </Fragment>
    );
};

export default PostRead;