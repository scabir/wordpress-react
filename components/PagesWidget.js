import React from 'react';
import {useSelector} from 'react-redux';
import Link from 'next/dist/client/link'; 

const PagesWidget = (props) => {
    const reduxState = useSelector(state => state.pages);
    const content = reduxState.pages.payload?.map(page => {
        return (<li key={'pages_widget_item_' + page.id}>
            <Link href={'/page/' + page.id + '/' + page.slug} key={'pages_widget_item_0' + page.id}>{page.title.rendered}</Link>
        </li>);
    });

    return (
        <div className="widget">
        <h5>Pages</h5>
        <ul>
            <li key={'pages_widget_item_0'}><Link href="/">Home Page</Link></li>
            {content}
        </ul>
        </div>
    );
};

export default PagesWidget;