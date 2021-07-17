import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import Link from 'next/dist/client/link'; 

const CategoriesWidget = (props) => {
    const reduxState = useSelector(state => state.categories);    
    let filteredTags = reduxState.categories?.payload?.filter((category) => category.count > 0);
    filteredTags = filteredTags?.sort((left, right) =>  left.count < right.count ? 1 : -1);

    const content = filteredTags?.map((category) => {
        return (
            <li key={'category_widget_item_' + category.id}>
                <Link activeClassName="activeLink" 
                    href={'/category/' + category.id + '/' + category.slug}>{category.name}</Link> ({category.count})</li>
          );
    });

    console.log('catts hit');
    console.log(reduxState);

    return (
        <div className="widget">
            <h5>Categories</h5>
            <ul key='category_widget_item_0'>
            {content}
            </ul>
        </div>
    );
};

export default CategoriesWidget;