import styles from "./page.module.css";
import { getCovers } from "./utils/path";
import Post from "./component/post";
import {list, imgList, coverList} from "./posts/list";
import Carousel from "./component/carousel";

export default function Home() {
  const imgPaths = getCovers(imgList);
  const carousel = getCovers(coverList);
  return (
    <>
      <div className={styles.main}>
        <Carousel 
          pathList={carousel}
          ids={coverList}
        />
        <h2 className={styles.feature}>Welcome to Porfolio of Archie Lai</h2>
      </div>
      <div className={styles.container}>
        {imgList.map((Id, index) => {
          return(
            <Post
              key={Id}
              cover={imgPaths[index]} 
              index={Id} 
              title={list[Id].title} 
              width={640}
              height={450}
            />
          );
        })}
      </div>
    </>
  );
}
