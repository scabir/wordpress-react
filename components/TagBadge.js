import React, { Fragment } from 'react';
import TagItem from './TagItem';

const TagBadge = (props) => {
    let tagsExist = false;
    let itemCounter = 0;

    const tagsRendered = props.tags.map(tag => {
        tagsExist = true;
        itemCounter++;

        return (
            <Fragment>
                <TagItem tagId={tag} key={'tag_' + props.postid + '_' + tag}/> 
                {itemCounter !== props.tags.length ? ', ' : ''}
            </Fragment>
        );
    });

    return (
        <Fragment>
            { tagsExist && <div><strong>Tags: </strong> {tagsRendered}</div> }
        </Fragment>
    );
};

export default TagBadge;