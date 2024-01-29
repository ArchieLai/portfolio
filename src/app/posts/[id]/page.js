import list from "../list"
import Image from "next/image";
import { getImagePath } from "@/app/utils/utils";
import styles from "./page.module.css";

export function generateStaticParams() {
  return list.map((post) => ({
    id: String(post.id),
  }));
}

export default function Page({ params }) {
  const id = params.id;
  const imgNames = getImagePath(id);
  const square = list[id].square;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{list[id].title}</h1>
        <h2>{list[id].year}</h2>
        <span>{list[id].intro}</span>
      </div>
      <div className={styles.imgContainer}>
        {imgNames.map((img) => {
          if (img!==".DS_Store"){
            const imgPath = `/images/posts/${id}/${img}`;
            return (
              <Image 
                key={id}
                src={imgPath}
                width={1070}
                height={580}
                style={{
                  objectFit: square ? "contain" : "cover",
                  objectPosition: "50% 50%" 
                }}/>
            );
          }
        })}
      </div>
      <br/>
    </div>
  );
}