import React, { Fragment } from 'react';
import renderHTML from 'react-render-html';

const HtmlRender = (props) => {
    return (
        <Fragment>{renderHTML(props.children)}</Fragment>
    );
};
export default HtmlRender;