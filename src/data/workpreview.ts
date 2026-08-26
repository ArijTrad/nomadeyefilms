/* workpreview.ts */

import type { Category } from "./categories";

export type WorkPreview = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  previewVideoUrl: string;
  vimeoId: string;
};


type WorkFromApi = {
  id: string;
  title: string;
  description: string;
  category_id: string;
  thumbnail_url: string;
  preview_video_url: string;
  vimeo_id: string;
};




export async function getWorkPreviews(): Promise<WorkPreview[]> {
  const [worksResponse, categoriesResponse] = await Promise.all([
    fetch("http://192.168.0.7:3000/works"),
    fetch("http://192.168.0.7:3000/categories"),
  ]);

  if (!worksResponse.ok || !categoriesResponse.ok) {
    throw new Error("Failed to fetch work previews.");
  }

  const works: WorkFromApi[] = await worksResponse.json();
  const categories: Category[] = await categoriesResponse.json();

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