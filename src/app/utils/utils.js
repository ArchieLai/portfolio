import fs from 'fs';
import path from 'path';

export function getImagePath(id) {
  const postsDirectory = path.join(process.cwd(), `public/images/posts/${id}`);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames;
}