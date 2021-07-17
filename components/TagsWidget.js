import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import Link from 'next/dist/client/link'; 

const TagsWidget = (props) => {
    const reduxState = useSelector(state => state.tags);    
    let itemCounter = 0;
    let filteredTags = reduxState.tags?.payload?.filter((tag) => tag.count > 0);
    filteredTags = filteredTags?.sort((left, right) =>  left.count < right.count ? 1 : -1);
    
    const content = filteredTags?.map((tag) => {
        itemCounter++;
        return (
            <Fragment>
                <Link  
                    activeClassName="activeLink" 
                    key={'tags_widget_item_' + tag.id} 
                    href={'/tag/' + tag.id + '/' + tag.slug}>{tag.name}</Link> ({tag.count})
                {itemCounter !== filteredTags.length ? ', ' : ''}
            </Fragment>
          );
    });

    return (
        <div className="widget">
            <h5>Tags</h5>
            {content}
        </div>
    );
};

export default TagsWidget;