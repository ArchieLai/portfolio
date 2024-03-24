import {list} from "../../../../public/text/list"
import { getImagePath } from "@/app/utils/path";
import styles from "./page.module.css";
import ShowImg from "@/app/component/showImg";

export function generateStaticParams() {
  return list.map((post) => ({
    id: String(post.id),
  }));
}

// export const dynamicParams = false; (cause error)

export default function Page({ params }) {
  const id = params.id;
  const imgNames = getImagePath(id);
  const square = list[id].square;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{list[id]?.title}</h1>
        <h2>{list[id]?.year}</h2>
        <span>{list[id]?.intro}</span>
      </div>
      <div className={styles.imgContainer}>
        {imgNames.map((img, index) => {
          if (img!==".DS_Store"){
            const imgPath = `/portfolio/images/posts/${id}/${img}`;
            return (
              <ShowImg
                key={index}
                imgPath={imgPath}
                width={870}
                height={615}
                square={square}
              />
            );
          }
        })}
      </div>
    </div>
  );
}