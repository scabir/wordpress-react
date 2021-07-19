import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import ConfigData from '../config.json';
import SearchBox from './SearchBox';

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