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
            .insert([ smoothieToBeAdded ]) // array automatically generates the id in the db
    
        revalidatePath("/"); // revalidatePath the homepage before redirection
    } catch (e) {
        return { message: "Failed to create smoothie" };
    }
    redirect('/');
};

export async function updateSmoothie(
    id: string,
    prevState: {
        message: string;
    },
    formData: FormData,
  ) {

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

    const {  title, method, rating } = parse.data;

    try {
        await supabase
            .from('smoothies')
            .update({ title, method, rating })
            .eq('id', id)
            .select() // in order to get the data back in the console (only needed bc we use supabase v2)
    
        revalidatePath("/");
    } catch (e) {
        return { message: "Failed to update smoothie" };
    }

    redirect('/');
};

export const handleDelete = async (id: string) => {
    const { data, error } = await supabase
        .from('smoothies')
        .delete()
        .eq('id', id);
    if (error) {
        console.log(error);
    };
    if (data) {
        console.log(data);    
    };
    revalidatePath("/");
};
