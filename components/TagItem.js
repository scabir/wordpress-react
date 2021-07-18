import React from 'react';
import {useSelector} from 'react-redux';
import Link from 'next/dist/client/link'; 

const TagItem = (props) => {
    const reduxState = useSelector(state => state.tags);
    let selectedTag = null;

    if(reduxState.tags.payload) {
        selectedTag = reduxState.tags?.payload?.find(x => {
            return x.id === props.tagId;
        });
    }

    return (
        selectedTag ? (<Link href={'/tag/' + selectedTag.id + '/' + selectedTag.slug}>{selectedTag.name}</Link>) : ''
    );
};

export default TagItem;