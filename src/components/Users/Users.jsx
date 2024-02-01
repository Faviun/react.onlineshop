import React from 'react';

const Users = ({data}) => {
    return (
        <div className="container mx-auto mt-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {data.map((item) => <div className="border rounded-3xl p-3 shadow hover:shadow-2xl transition"> 
                <p>id: {item.id}</p>
                <p>username: {item.username}</p>
                <p>password: {item.password}</p>
                <p>firstname: {item.name.firstname}</p>
                <p>lastname: {item.name.lastname}</p>
                <p>phone: {item.phone}</p>
                <p>city: {item.address.city}</p>
                <p>street: {item.address.street}</p>
                <p>number: {item.address.number}</p>
                <p>zipcode: {item.address.zipcode}</p>
                <p>lat: {item.address.geolocation.lat}</p>
                <p>long: {item.address.geolocation.long}</p>
            </div>)}
        </div>
    );
}

export default Users;