"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createSmoothie } from "../actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Create Smoothie Recipe
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createSmoothie, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="title">Enter Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="method">Enter Method</label>
      <input type="text" id="method" name="method" required />
      <label htmlFor="rating">Enter Rating</label>
      <input type="number" id="rating" name="rating" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}