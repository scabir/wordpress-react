import React from 'react';
import { useRouter } from 'next/router';

const CategoryPage = (props) => {
    const router = useRouter();
    
    return (
        <div>{router.query.id}</div>
    );
};
export default CategoryPage;