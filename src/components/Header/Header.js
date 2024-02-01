import React from 'react';

const Header = ({changeNav}) => {
    const configNav = [
        {
            id: 0,
            url: 'products',
            title: 'Products'
        },
        {
            id: 1,
            url: 'users',
            title: 'Users'
        },
        {
            id: 2,
            url: 'login',
            title: 'Login'
        },
        {
            id: 3,
            url: 'cart',
            title: 'Cart'
        }
    ]
    return (
        <header className="container sticky top-0 m-auto my-0 px-4 bg-slate-200 w-full rounded-b-lg">
            <nav>
                <ul className="flex justify-around py-4">
                    {configNav.map((item) => (
                        <li className="cursor-pointer hover:text-red-800"
                            onClick={() => changeNav(item.url)}
                            key={item.id} 
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>



                {/* <ul className="flex justify-around py-4">
                    <li className="cursor-pointer hover:text-red-800 ">Products</li>
                    <li>Users</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul> */}
            </nav>
        </header>
    );
};

export default Header;