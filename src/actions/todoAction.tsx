"use server";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
    
    revalidatePath("/");
}