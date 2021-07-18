import React from 'react';
import {useSelector} from 'react-redux';
import Link from 'next/dist/client/link'; 

const CategoryItem = (props) => {
    const reduxState = useSelector(state => state.categories);
    let selectedCategory = null;

    if(reduxState.categories.payload) {
        selectedCategory = reduxState.categories.payload.find(x => {
            return x.id === props.categoryId;
        });
    }
    
    return (
        selectedCategory && <span><Link href={'/category/' + selectedCategory.id + '/' + selectedCategory.slug}>{selectedCategory.name}</Link></span>
    );
};

export default CategoryItem;