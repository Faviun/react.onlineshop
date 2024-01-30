import React from 'react';

const Header = () => {
    return (
        <header className="container sticky top-0 m-auto my-0 px-4 bg-slate-200 w-full rounded-b-lg">
            <nav>
                <ul className="flex justify-around py-4">
                    <li className="cursor-pointer hover:text-red-800 ">Products</li>
                    <li>Users</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;