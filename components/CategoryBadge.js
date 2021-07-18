import React, { Fragment } from 'react';
import CategoryItem from './CategoryItem';

const CategoryBadge = (props) => {
    let categoriesExist = false;
    let itemCounter = 0;
    
    const categoriesRendered = props.categories.map(cat => {
        categoriesExist = true;
        itemCounter++;

        return (
            <Fragment>
                <CategoryItem categoryId={cat} key={'category_' + props.postid + '_' + cat}/>
                {itemCounter !== props.categories.length ? ', ' : ''}
            </Fragment>
        );
    });

    return (
        <Fragment>
            { categoriesExist && <div><strong>Categories: </strong> {categoriesRendered}</div> }
        </Fragment>
    );
};

export default CategoryBadge;