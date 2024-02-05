import React from 'react';

const Login = () => {
    const handlerLoginUser = (e) => {
        e.preventDefault();
        const userData = {
            username: e.target.login.value,
            pasword: e.target.password.value
        }
        fetch("https://fakestoreapi.com/auth/login", {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }

    return (
        <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-3'>
            <form onSubmit={handlerLoginUser} className='border flex flex-col gap-[15px] p-4 min-[420px]: max-w-[420px]'>
                <label htmlFor="Login">Login</label>
                <input type="text" name='login' placeholder='Enter username'/>
                <label htmlFor="password">Password</label>
                <input type="text" name='password' placeholder='Enter your password' />
                <input className='bg-green-500 py-2 text-white' type="submit" />
            </form>
        </div>
    );
};

export default Login;