import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="border rounded-3xl p-3 shadow hover:shadow-2xl transition">
            <p>id: {product.id}</p>
            <p>category: {product.category}</p>
            <p>description: {product.description}</p>
            <p>price: {product.price}</p>
            <p>rating count: {product.rating.count}</p>
            <p>rating rate: {product.rating.rate}</p>
            <p>title: {product.title}</p>
            <img className="h-[400px]" src={product.image} alt={product.title}/>
        </div>
    );
};

export default ProductCard;