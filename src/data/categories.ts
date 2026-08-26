/*categories.ts*/

export type Category = {
  id: string;
  name: string;
  imageUrl: string;
};



export async function getCategories(): Promise<Category[]> {
  const response = await fetch("http://192.168.0.7:3000/categories");

  if (!response.ok) {
    throw new Error("Failed to fetch categories.");
  }

  return response.json();
}

