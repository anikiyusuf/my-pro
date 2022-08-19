import React from 'react';

export default function Name() {
    const firstName = "John";
    const lastName = "Doe";
    const fullName = firstName + " " + lastName + " " + "is a good person!";


    return (
        <h1>Hello {fullName}</h1>   
    )

}