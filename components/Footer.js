import React from 'react';
import ConfigData from '../config.json';

const Footer = () => {
    return (
        <div>
            <p>{ConfigData.wp.blogTitle}</p>
            <p>{ConfigData.wp.footerNote}</p>
        </div>
    );
};

export default Footer;