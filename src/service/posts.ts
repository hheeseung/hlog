import fs from 'fs/promises';
import path from 'path';

interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await fs.readFile(path.join(process.cwd(), 'data', 'posts.json'), 'utf-8');
  return JSON.parse(posts);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = (await getAllPosts()).filter((post) => post.featured);
  return posts;
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = (await getAllPosts()).filter((post) => !post.featured);
  return posts;
}
