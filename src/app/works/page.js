import list from "../posts/list";
import { getCovers } from "../utils/path";
import styles from "./page.module.css";
import Post from "./post";

export default function Works(){
  const ids = list.map((post) => {
    return String(post.id);
  });
  const covers = getCovers(ids);

  return(
    <div className={styles.container}>
      {covers.map((cover, index) => {
        return (
          <Post 
            key={index}
            cover={cover} 
            index={index} 
            title={list[index].title} 
          />
        );
      })}
      <br />
    </div>
  );
}