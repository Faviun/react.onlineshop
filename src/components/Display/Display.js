import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Users from '../Users/Users';

const Display = ({heading}) => {
    const arrayOfComponents = {
        products: <ProductCard data={heading.data}/>,
        users: <Users data={heading.data}/>,
        // albums: <Login data={heading.data}/>,
        // photos: <Cart data={heading.data}/>
    }
    return (
        
        <main>
            <div>
                {arrayOfComponents[heading.navState]}  
                {/* {data.map((item) => <ProductCard key={item.id} product={item}/>)} */}
            </div>
        </main>
    );
};

export default Display;