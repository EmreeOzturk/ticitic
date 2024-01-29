import { socket } from "../socket"
import React, { useState } from 'react';
const Enter = () => {
    const [name, setName] = useState('')
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name)
        if (name) {
            socket.connect();
            socket.emit('new-user', name);
        }
        e.currentTarget.reset();

    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Enter your name" id="name" name="name"
                className="text-black p-4 rounded-lg border-black border-2"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <button className="text-white p-4 rounded-lg border-white border-2" type="submit">Enter</button>
        </form>
    )
}

export default Enter