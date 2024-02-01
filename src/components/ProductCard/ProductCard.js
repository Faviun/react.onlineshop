import React from 'react';

const ProductCard = ({data}) => {
    return (
        <div className="container mx-auto mt-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {data.map((item) => <div className="border rounded-3xl p-3 shadow hover:shadow-2xl transition"> 
                <p>id: {item.id}</p>
                <p>category: {item.category}</p>
                <p>description: {item.description}</p>
                <p>price: {item.price}</p>
                <p>rating count: {item.rating.count}</p>
                <p>rating rate: {item.rating.rate}</p>
                <p>title: {item.title}</p>
                <img className="h-[400px]" src={item.image} alt={item.title}/>
            </div>)}
        </div>
    );
};

export default ProductCard;