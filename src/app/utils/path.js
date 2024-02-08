import fs from 'fs';
import path from 'path';
/* 
 If you use fs, be sure it's only within getInitialProps or getServerSideProps. 
 (anything includes server-side rendering).
*/

export function getImagePath(id) {
  const postsDirectory = path.join(process.cwd(), `public/images/posts/${id}`);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames;
}

export function getCovers(ids){
  return ids.map((id) => {
    const images = getImagePath(id);
    let imageName;
    if (images[0]===".DS_Store"){
      imageName = images[1];
    } else {
      imageName = images[0];
    }
    return path.join(`/portfolio/images/posts/${id}`, `${imageName}`)
  })
}