import { supabase } from "../lib/supabase";

export type WorkPreview = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl?: string;
  previewVideoUrl?: string;
  vimeoId?: string;
};

type WorkFromApi = {
  id: string;
  title: string;
  description: string;
  category_id: string;
  thumbnail_url?: string;
  preview_video_url?: string;
  vimeo_id?: string;
};

export async function getWorkPreviews(): Promise<WorkPreview[]> {
  const { data, error } = await supabase
    .from("works")
    .select(`
      id,
      title,
      description,
      category_id,
      thumbnail_url,
      preview_video_url,
      vimeo_id
    `);

  if (error) {
    throw new Error(`Failed to fetch work previews: ${error.message}`);
  }

  const works: WorkFromApi[] = data;

  // We still need the category name because works stores category_id.
  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("id, name");

  if (categoriesError) {
    throw new Error(
      `Failed to fetch categories for works: ${categoriesError.message}`
    );
  }

  return works.map((work) => {
    const category = categories.find(
      (category) => category.id === work.category_id
    );

    return {
      id: work.id,
      title: work.title,
      description: work.description,
      category: category?.name ?? "Unknown",
      thumbnailUrl: work.thumbnail_url,
      previewVideoUrl: work.preview_video_url,
      vimeoId: work.vimeo_id,
    };
  });
}