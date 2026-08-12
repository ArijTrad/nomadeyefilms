/* workpreview.ts */

export type WorkPreview = {
  id: string;
  title: string;
  category: string;
  description: string;
  imagepath: string;
};


export const workPreview: WorkPreview[] = [
  {
    id: "1",
    category: "Commercial",
    title: "City",
    description: "A cinematic commercial capturing the energy and movement of the city.",
    imagepath: "/videos/videothumbnails/city.jpg",
  },

  {
    id: "2",
    category: "Events",
    title: "Event",
    description: "Dynamic event coverage focused on atmosphere, people and memorable moments.",
    imagepath: "/videos/videothumbnails/event.jpg",
  },

  {
    id: "3",
    category: "Sports",
    title: "Movement",
    description: "Fast-paced visual storytelling built around movement, energy and action.",
    imagepath: "/videos/videothumbnails/movement.jpg",
  },

  {
    id: "4",
    category: "Nature",
    title: "Nature",
    description: "A visual exploration of natural landscapes, light and atmosphere.",
    imagepath: "/videos/videothumbnails/nature.jpg",
  },

  {
    id: "5",
    category: "Studio",
    title: "Studio",
    description: "Controlled studio production combining clean visuals and cinematic lighting.",
    imagepath: "/videos/videothumbnails/studio.jpg",
  },
];