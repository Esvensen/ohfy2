import { Buffer } from "buffer";
if (!window.Buffer) window.Buffer = Buffer; // make Buffer global

import matter from "gray-matter";

// ➊ Grab every markdown file in the folder (Vite feature)
const files = import.meta.glob("/_posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// ➋ Convert each Markdown file to a JS object
export const artists = Object.entries(files).map(([path, raw]) => {
  const { data, content } = matter(raw); // front-matter + body
  const slug = path.split("/").pop().replace(".md", "");

  const name = data.name || data.title || slug;
  return { id: slug, name, ...data, bio: content };
});

export default artists; // ← add this line
