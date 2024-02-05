import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Users from '../Users/Users';
import Login from '../Login/Login';

const Display = ({routeState, heading}) => {
    const arrayOfComponents = {
        products: <ProductCard data={heading}/>,
        users: <Users data={heading}/>,
        login: <Login data={heading}/>,
        // photos: <Cart data={heading}/>
    }
    console.log(heading);
    return (
        
        <main>
            <div>
                {arrayOfComponents[routeState]}  
                {/* {data.map((item) => <ProductCard key={item.id} product={item}/>)} */}
            </div>
        </main>
    );
};

export default Display;