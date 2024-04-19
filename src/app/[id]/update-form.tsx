"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateSmoothie } from "../actions";
import { Smoothie } from "../../types";
import { useState } from "react";

const initialState = {
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <button type="submit" aria-disabled={pending}>
        Update Smoothie Recipe
      </button>
    );
  }

export function UpdateForm( {smoothie}: {smoothie: Smoothie} ) {
    const updateSmoothieWithId = updateSmoothie.bind(null, smoothie.id);
    const [state, formAction] = useFormState(updateSmoothieWithId, initialState);

    const [title, setTitle] = useState(smoothie.title);
    const [method, setMethod] = useState(smoothie.method);
    const [rating, setRating] = useState(smoothie.rating);

    return (
        <form action={formAction}>
            <label htmlFor="title">Enter Title</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <label htmlFor="method">Enter Method</label>
            <input 
                type="text" 
                id="method" 
                name="method" 
                value={method} 
                onChange={(e) => setMethod(e.target.value)} 
                required 
            />
            <label htmlFor="rating">Enter Rating</label>
            <input 
                type="number" 
                id="rating" 
                name="rating" 
                value={rating} 
                onChange={(e) => setRating(Number(e.target.value))} 
                required 
            />
            <SubmitButton />
            <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
            </p>
            {/* {formError && <p className="error">{formError}</p>} */}
        </form>
    );
}