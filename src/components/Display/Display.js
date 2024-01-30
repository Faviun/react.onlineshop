import React from 'react';
import ProductCard from "../ProductCard/ProductCard";

const Display = (props) => {
    return (
        <main>
            <div className="container mx-auto mt-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {props.data.map((item) => <ProductCard key={item.id} product={item}/>)}
            </div>
        </main>
    );
};

export default Display;