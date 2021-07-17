import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link'

import SearchBox from './SearchBox';
import FetchAllFromWeb from '../store/FetchFromWeb';
import ConfigData from '../config.json';
import {pagesActions} from '../store/Store';
import { fetchPages } from '../store/Fetchers';

const TopMenu = (props) => {
    const baseUrl = ConfigData.wp.baseUrl;    
    const reduxState = useSelector(state => state.pages);

    return (
        <section>
            <div className="navigation">
                <span className="topMenuLink"><Link href='/' exact activeClassName="activeLink">Home Page</Link></span>
                {
                    reduxState.pages.payload?.map(page => {
                        return (<span className="topMenuLink" key={page.id}>
                            <Link href={'/page/' + page.id + '/' + page.slug} activeClassName="activeLink">{page.title.rendered}</Link>
                        </span>);
                    })
                }
            </div>
            <div className="searchContainer">
                <SearchBox />
            </div>

        </section>
    );
};

export default TopMenu;