import React from 'react';
import renderHTML from 'react-render-html';
import CategoryBadge from './CategoryBadge';
import TagBadge from './TagBadge';
import Link from 'next/link';

const SinglePost = (props) => {
    return (
        <div className="singlePost">
            <h4><Link 
                    key={'postid_' + props.post.id}
                    className="routerLink" 
                    href={'/post/' + props.post.slug}>{renderHTML(props.post.title.rendered)}</Link>
            </h4>
            <p className="dateField">{props.post.date}</p>
            {renderHTML(props.post.excerpt.rendered)}
            <CategoryBadge categories={props.post.categories} postid={props.post.id} />
            <TagBadge tags={props.post.tags}  postid={props.post.id}/>
        </div>
    );
};

export default SinglePost;