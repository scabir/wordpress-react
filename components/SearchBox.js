import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const SearchBox = (props) => {
    const router = useRouter();
    const elementRef = useRef();

    const onKeyPressHandler = (event) => {
        if(event.key === 'Enter') {
            console.log(elementRef.current.value);  
            router.push('/search?term=' + elementRef.current.value);
        }
    }

    return (
        <input id="search" ref={elementRef} placeholder="search..." onKeyPress={onKeyPressHandler}  />
    );
};
export default SearchBox;