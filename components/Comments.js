import React, {useState, useEffect, Fragment } from 'react';
import configData from '../config.json';
import HtmlRender from './HtmlRender';

const Comments = (props) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let url = configData.wp.baseUrl + '/comments';

    if(props.postid) {
        url = url + '?post=' + props.postid;
    }

    const getPostsHandler = async () => {
        const response = await fetch(url);
        const data = await response.json();
        
        setComments(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getPostsHandler();
    }, [url]);

    console.log(comments);
    
    let content = <p>No comments</p>;

    if(isLoading) {
        content = <p>Loading</p>;
    }

    if(!isLoading && comments.length > 0) {
        content = comments.map(comment => {
            return (
                <div className="comment">
                    <p><i><strong>{comment.author_name}</strong></i> says <strong>on </strong>{comment.date}: </p>
                    <p><HtmlRender>{comment.content.rendered}</HtmlRender></p>
                </div>
            );
        });
    }

    return <div className="comments">
                <h5>Comments:</h5>
                {content}
            </div>;
};

export default Comments;