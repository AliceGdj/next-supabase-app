"use server";

import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'
import supabase from "@/config/supabaseClient";
import { z } from "zod";

export async function createSmoothie(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
    console.log(">> this is the top of the createSmoothie function ")

    const schema = z.object({
        title: z.string().min(1),
        method: z.string().min(1),
        rating: z.string().min(1),
    });

    const parse = schema.safeParse({
        title: formData.get("title"),
        method: formData.get("method"),
        rating: formData.get("rating"),
    });

    if (!parse.success) {
        return { message: "Failed to create smoothie" };
    }

    const smoothieToBeAdded = parse.data;

    try {
        await supabase
            .from('smoothies')
            .insert([ smoothieToBeAdded ])
    
        revalidatePath("/"); // revalidatePath the homepage before redirection
    } catch (e) {
        return { message: "Failed to create smoothie" };
    }
    redirect('/'); // redirect to the homepage
}

