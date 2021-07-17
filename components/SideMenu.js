import React, { Fragment } from 'react';
import PagesWidget from './PagesWidget';
import CategoriesWidget from './CategoriesWidget';
import TagsWidget from './TagsWidget';

const SideMenu = (props) => {
    return (
        <Fragment>
            <PagesWidget />
            <CategoriesWidget />
            <TagsWidget />
        </Fragment>
    );
};
export default SideMenu;