/*categories.ts*/

import { supabase } from "../lib/supabase";


export type Category = {
  id: string;
  name: string;
  imageUrl: string;
};



export async function getCategories(): Promise<Category[]> {
    const { data, error } = await supabase
    .from("categories")
    .select("id, name, image_url");



  if (error) {
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }

return data.map((category) => ({
    id: category.id,
    name: category.name,
    imageUrl: category.image_url,
  }));

}

