"use client";

import { useState, useEffect } from "react"


export default function Guesser() {
    const [id, setId]  = useState(0);

    const handleGuess = async() => {
        const response = await fetch("/api/guesser")
        const data = await response.json();
        setId(data.id);
        console.log("current id: ", data);
    }
    

    return(
        <>
            <h1>{id}</h1>
            <button onClick = {handleGuess}>click</button>
        </>
    )
}