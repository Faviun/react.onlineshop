import React from 'react';

const Modal = () => {

    const handleClickCancel = () => {

    }

    const handleClickSave = (e) => {
        e.preventDefault();
        const recBody = {
            title: e.target.title.value,
            price: e.target.price.value,
            description: e.target.description.value,
            image: e.target.image.value,
            category: e.target.category.value
        }
        fetch('https://fakestoreapi.com/products' ,{
            method: "POST",
            body: JSON.stringify({
                recBody
            })
        })
        .then(res => res.json())
    }

    return (
        <div onSubmit={handleClickSave} className='bg-black/80 fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center'>
            <form className='flex flex-col gap-[15px ] w-[420px] bg-white p-4 border rounded-3xl'>
                <input placeholder="title" name='title' type="text" />
                <input placeholder='price' name='price' type="text" />
                <input placeholder='category' name='category' type="text" />
                <input placeholder='image' name='image' type="text" />
                <textarea placeholder='description' name="description" id="" cols="30" rows="10"></textarea>
                <div className='flex gap-[30px] justify-center'>
                    <button onClick={handleClickCancel}>Cancel</button>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Modal;