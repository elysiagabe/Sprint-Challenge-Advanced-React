import React from 'react';
import { useForm } from '../hooks/useForm';

const SubscriptionForm = () => {
    const [values, handleChanges, clearForm] = useForm("newSubscriber", {
        name: "",
        email: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        alert("Thanks for signing up! We'll be in touch soon.")
    }

    return (
        <div>
            <h2>Want to receive more content about Women's soccer?</h2>
            <p>Sign up for our emails!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChanges}
                />

                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChanges}
                />
                <button type="submit">Submit</button>
                <button onClick={clearForm}>Nevermind</button>
            </form>
        </div>
    )
} 

export default SubscriptionForm;