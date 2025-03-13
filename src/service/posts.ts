import fs from 'fs/promises';
import path from 'path';

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export async function getAllPosts(): Promise<Post[]> {
  const data = await fs.readFile(path.join(process.cwd(), 'data', 'posts.json'), 'utf-8');
  const posts: Post[] = JSON.parse(data);
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = (await getAllPosts()).filter((post) => post.featured);
  return posts;
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = (await getAllPosts()).filter((post) => !post.featured);
  return posts;
}
